import { CARDS, FACTIONS } from "./shared/cards.js";
import { portrait, crest } from "./shared/portraits.js";

const eddie = CARDS.find((c) => c.id === "eddie");

const ART = {
  trumps: `<div class="fan">${[-12, 0, 12].map((r) => `<div style="--r:${r}deg">${crest()}</div>`).join("")}</div>`,
  role: `<svg viewBox="0 0 120 140" class="placeholder-insignia" fill="none" stroke="#c9a45c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M24 26 H96 V70 C96 102 60 124 60 124 C60 124 24 102 24 70 Z" fill="#123224"/>
    <path d="M30 32 H90 V70 C90 98 60 116 60 116 C60 116 30 98 30 70 Z" stroke-width="1" opacity=".6"/>
    <path d="M44 50 L76 90 M76 50 L44 90 M40 46 L48 54 M80 46 L72 54"/>
    <path d="M40 20 L44 6 L52 16 L60 2 L68 16 L76 6 L80 20 Z" fill="#c9a45c" stroke="none"/>
  </svg>`,
  character: portrait(eddie, FACTIONS[eddie.faction].color),
};

document.getElementById("hub-crest").innerHTML = crest("FAN GAMES");
for (const el of document.querySelectorAll("[data-art]")) el.innerHTML = ART[el.dataset.art];
