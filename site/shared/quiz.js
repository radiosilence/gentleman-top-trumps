// Quiz engine shared by the role and character quizzes. Each quiz supplies its
// questions, results and axes as data; this module handles flow, scoring,
// the result screen, shareable URLs and transitions.

const $ = (s, el = document) => el.querySelector(s);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const calm = matchMedia("(prefers-reduced-motion: reduce)");
const LETTERS = "ABCD";

function animate(el, frames, opts) {
  if (calm.matches) return Promise.resolve();
  return el.animate(frames, { easing: "cubic-bezier(.2, .8, .2, 1)", fill: "both", ...opts }).finished.catch(() => {});
}

export function run(data) {
  const byId = Object.fromEntries(data.results.map((r) => [r.id, r]));
  // Largest possible pull on each axis, so a player's total can be expressed as -1…1.
  const reach = Object.fromEntries(
    data.axes.map(({ key }) => [key, data.questions.reduce((n, q) => n + Math.max(...q.options.map((o) => Math.abs(o.a?.[key] ?? 0))), 0) || 1])
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    `<a class="back" href="../">All games</a>
    <main class="quiz">
      <section id="intro" class="q-screen">
        <div class="hero">${data.hero()}</div>
        <p class="kicker">${data.kicker}</p>
        <h1>${data.title}</h1>
        <p class="tagline">${data.tagline}</p>
        <p class="cutoff">Safe up to the end of series 2</p>
        <button class="btn primary" id="begin">Begin</button>
        <p class="fine">${data.questions.length} questions · about ${Math.ceil(data.questions.length / 6)} minutes</p>
      </section>
      <section id="ask" class="q-screen" hidden>
        <div class="progress" aria-hidden="true"><span></span></div>
        <div class="desk"></div>
      </section>
      <section id="result" class="q-screen" hidden></section>
      <footer class="q-foot"><p class="disclaimer">A non-commercial fan project. Not affiliated with or endorsed by Netflix, Moonage Pictures or Guy Ritchie. Characters belong to their owners; all illustrations are original.</p></footer>
    </main>
    <div class="toast" role="status" aria-live="polite"></div>`
  );

  const answers = [];
  let busy = false;

  function show(id) {
    for (const s of document.querySelectorAll(".q-screen")) s.hidden = s.id !== id;
    scrollTo({ top: 0, behavior: "instant" });
  }

  function sheetFor(i) {
    const q = data.questions[i];
    const el = document.createElement("article");
    el.className = "sheet ask";
    el.innerHTML = `<div class="sheet-no">${i + 1}</div>
      <p class="sheet-of">Question ${i + 1} of ${data.questions.length}</p>
      <h2>${q.q}</h2>
      <ol class="opts">${q.options.map((o, j) => `<li><button class="opt" data-i="${j}"><i>${LETTERS[j]}</i><span>${o.t}</span></button></li>`).join("")}</ol>
      <div class="sheet-foot">${i ? `<button class="link-btn" data-back>Previous question</button>` : `<span></span>`}<span class="sheet-hint">Keys 1–4</span></div>
      <div class="sheet-seal" aria-hidden="true"></div>`;
    return el;
  }

  async function ask(i, dir = 1) {
    const desk = $("#ask .desk");
    $(".progress span").style.transform = `scaleX(${i / data.questions.length})`;
    const old = desk.firstElementChild;
    if (old) {
      await animate(old, [{}, { transform: `translateX(${-dir * 110}%) rotate(${-dir * 8}deg)`, opacity: 0 }], { duration: 380, easing: "cubic-bezier(.5, 0, .75, 0)" });
      old.remove();
    }
    const el = sheetFor(i);
    desk.append(el);
    el.addEventListener("click", (e) => {
      const opt = e.target.closest(".opt");
      if (opt) choose(i, Number(opt.dataset.i));
      else if (e.target.closest("[data-back]")) back(i);
    });
    await animate(el, [{ transform: `translateX(${dir * 70}%) rotate(${dir * 6}deg)`, opacity: 0 }, {}], { duration: 460 });
    el.querySelector(".opt").focus({ preventScroll: true });
    busy = false;
  }

  async function choose(i, j) {
    if (busy) return;
    busy = true;
    answers[i] = j;
    const el = $("#ask .sheet");
    el.querySelectorAll(".opt")[j].classList.add("picked");
    const seal = el.querySelector(".sheet-seal");
    seal.textContent = LETTERS[j];
    seal.classList.add("show");
    navigator.vibrate?.(15);
    await wait(calm.matches ? 150 : 650);
    if (i + 1 < data.questions.length) ask(i + 1);
    else finish();
  }

  function back(i) {
    if (busy) return;
    busy = true;
    answers.length = i - 1;
    ask(i - 1, -1);
  }

  function score() {
    const totals = Object.fromEntries(data.results.map((r) => [r.id, 0]));
    const axes = Object.fromEntries(data.axes.map((a) => [a.key, 0]));
    answers.forEach((j, i) => {
      const o = data.questions[i].options[j];
      for (const [k, v] of Object.entries(o.r)) totals[k] += v;
      for (const [k, v] of Object.entries(o.a ?? {})) axes[k] += v;
    });
    // Ties are broken by a hash of the answers: the same sheet always gives the same result,
    // but no result is favoured just for being listed first.
    const seed = answers.reduce((h, j) => (h * 31 + j + 1) % 1000003, 7);
    const order = Object.fromEntries(data.results.map((r, i) => [r.id, (seed * (i + 1) * 7919) % 1000003]));
    const ranked = data.results.map((r) => r.id).sort((a, b) => totals[b] - totals[a] || order[a] - order[b]);
    return {
      top: ranked[0],
      second: ranked[1],
      axes: data.axes.map(({ key }) => Math.round((axes[key] / reach[key]) * 100)),
    };
  }

  async function finish() {
    const res = score();
    const hash = `#r=${res.top}&s=${res.second}&a=${res.axes.join(",")}`;
    history.replaceState(null, "", hash);
    $(".progress span").style.transform = "scaleX(1)";
    const old = $("#ask .sheet");
    if (old) await animate(old, [{}, { transform: "translateY(-30px) scale(.94)", opacity: 0 }], { duration: 300 });
    showResult(res, false);
  }

  function parse() {
    const p = new URLSearchParams(location.hash.slice(1));
    const top = p.get("r");
    if (!byId[top]) return null;
    const second = byId[p.get("s")] ? p.get("s") : data.results.find((r) => r.id !== top).id;
    const raw = (p.get("a") ?? "").split(",").map(Number);
    const axes = data.axes.map((_, i) => (Number.isFinite(raw[i]) ? Math.max(-100, Math.min(100, raw[i])) : 0));
    return { top, second, axes };
  }

  function showResult({ top, second, axes }, shared) {
    const r = byId[top];
    const s = byId[second];
    const box = $("#result");
    box.innerHTML = `<article class="sheet result">
      ${shared ? `<p class="shared-note">A result shared with you</p>` : ""}
      <div class="res-art ${data.artClass ?? ""}">${data.art(r)}<div class="res-seal">${data.seal(r)}</div></div>
      <p class="kicker">${shared ? data.sharedKicker : data.resultKicker}</p>
      <h2 class="res-title">${r.name}</h2>
      <p class="res-sub">${r.sub}</p>
      <p class="res-text">${r.text}</p>
      ${data.extra?.(r) ?? ""}
      <section class="axes">
        <h3>${shared ? "Their temperament" : "Your temperament"}</h3>
        ${data.axes.map((a, i) => `<div class="axis" style="--v:${axes[i]}"><span class="lo">${a.lo}</span><span class="track"><i><b></b></i></span><span class="hi">${a.hi}</span></div>`).join("")}
      </section>
      <section class="runner">
        <div class="runner-art">${data.art(s, true)}</div>
        <div><h3>Runner-up</h3><p><b>${s.name}</b><br><i>${s.sub}</i></p></div>
      </section>
      <div class="actions">
        ${shared
          ? `<button class="btn primary" data-retake>Take the quiz</button>`
          : `<button class="btn primary" data-share>Share result</button><button class="btn" data-retake>Take it again</button>`}
      </div>
    </article>`;
    show("result");
    const sheet = $(".sheet", box);
    animate(sheet, [{ transform: "translateY(40px) rotate(-1.5deg)", opacity: 0 }, {}], { duration: 600 });
    $(".res-seal", box).classList.add("show");
    box.querySelectorAll(".axis i").forEach((el, i) => animate(el, [{ transform: "translateX(0)" }, { transform: `translateX(${axes[i] / 2}%)` }], { duration: 900, delay: 500 + i * 90 }));
    $("[data-retake]", box).addEventListener("click", start);
    $("[data-share]", box)?.addEventListener("click", () => share(r));
  }

  async function share(r) {
    const url = location.href;
    const text = data.shareText(r);
    try {
      if (navigator.share) return await navigator.share({ title: document.title, text, url });
    } catch (e) {
      if (e.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast("Link copied");
    } catch {
      toast("Copy the address bar to share");
    }
  }

  let toastTimer;
  function toast(msg) {
    const t = $(".toast");
    t.textContent = msg;
    t.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("on"), 2200);
  }

  function start() {
    answers.length = 0;
    busy = true;
    history.replaceState(null, "", location.pathname);
    $("#ask .desk").replaceChildren();
    show("ask");
    ask(0);
  }

  $("#begin").addEventListener("click", start);
  addEventListener("keydown", (e) => {
    if ($("#ask").hidden || e.metaKey || e.ctrlKey) return;
    const n = Number(e.key);
    const i = answers.length;
    if (n >= 1 && n <= 4 && $("#ask .sheet")) choose(i, n - 1);
  });

  document.addEventListener("visibilitychange", () => document.documentElement.classList.toggle("paused", document.hidden));

  // A shared link pasted into a tab that already has the quiz open only changes the hash.
  addEventListener("hashchange", () => {
    const res = parse();
    if (res) showResult(res, true);
  });

  const fromHash = parse();
  if (fromHash) showResult(fromHash, true);
  else show("intro");
}
