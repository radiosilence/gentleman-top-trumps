import { CARDS, FACTIONS } from "./shared/cards.js";
import { portrait, crest } from "./shared/portraits.js";
import { insignia } from "./shared/insignia.js";

const eddie = CARDS.find((c) => c.id === "eddie");

const ART = {
  trumps: `<div class="fan">${[-12, 0, 12].map((r) => `<div style="--r:${r}deg">${crest()}</div>`).join("")}</div>`,
  role: insignia({ emblem: "king", tint: "#6b1d22", motto: "THE FIRM" }),
  character: portrait(eddie, FACTIONS[eddie.faction].color),
};

document.getElementById("hub-crest").innerHTML = crest("FAN GAMES");
for (const el of document.querySelectorAll("[data-art]")) el.innerHTML = ART[el.dataset.art];
