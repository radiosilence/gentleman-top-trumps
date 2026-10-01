// Heraldic insignia for the role quiz: a shield in the role's colour, a coronet,
// laurel sprigs and a 48×48 gold line emblem, matching the card emblems in portraits.js.
import { PROPS } from "./portraits.js";

const GOLD = "#c9a45c";

export const EMBLEMS = {
  ...PROPS,
  king: `<path d="M24 3 V11 M20 7 H28 M16 13 H32 L29 30 H19 Z M15 34 H33 L36 44 H12 Z"/>`,
  key: `<circle cx="15" cy="15" r="10"/><circle cx="15" cy="15" r="4"/><path d="M22 22 L44 44 M35 35 L41 29 M40 40 L45 35"/>`,
  knuckles: `<circle cx="9" cy="17" r="5"/><circle cx="19" cy="15" r="5"/><circle cx="29" cy="15" r="5"/><circle cx="39" cy="17" r="5"/><path d="M5 24 H43 C43 36 34 42 24 42 C14 42 5 36 5 24 Z"/>`,
};

const sprig = (side) => {
  const leaves = Array.from({ length: 7 }, (_, i) => {
    const t = i / 6;
    const x = 30 - 8 * Math.sin(t * Math.PI * 0.9);
    const y = 196 - t * 120;
    const a = -25 - t * 20;
    return `<path d="M${x} ${y} c-12 -4 -16 -14 -14 -20 c8 2 14 10 14 20 Z" transform="rotate(${a + 30} ${x} ${y})"/>`;
  }).join("");
  const stem = `<path d="M38 206 C22 180 18 130 26 74"/>`;
  return `<g ${side === "r" ? 'transform="translate(200 0) scale(-1 1)"' : ""}>${stem}${leaves}</g>`;
};

export function insignia({ emblem, tint, motto = "" }) {
  return `<svg viewBox="0 0 200 240" class="insignia-svg" aria-hidden="true">
  <g fill="none" stroke="${GOLD}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".9">${sprig("l")}${sprig("r")}</g>
  <path d="M46 48 H154 V118 C154 166 100 196 100 196 C100 196 46 166 46 118 Z" fill="${tint}" stroke="${GOLD}" stroke-width="3"/>
  <path d="M53 55 H147 V118 C147 160 100 187 100 187 C100 187 53 160 53 118 Z" fill="none" stroke="${GOLD}" stroke-width="1" opacity=".6"/>
  <path d="M70 40 L74 18 L86 30 L100 10 L114 30 L126 18 L130 40 Z" fill="${GOLD}"/>
  <path d="M68 44 H132" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>
  <g transform="translate(64 80) scale(1.5)" fill="none" stroke="${GOLD}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${EMBLEMS[emblem] ?? ""}</g>
  ${motto ? `<path d="M30 206 L44 200 H156 L170 206 L156 212 L162 222 H38 L44 212 Z" fill="#123224" stroke="${GOLD}" stroke-width="1.5" stroke-linejoin="round"/>
  <text x="100" y="215" text-anchor="middle" font-family="Cinzel, serif" font-size="10" font-weight="700" letter-spacing="2" fill="${GOLD}">${motto}</text>` : ""}
</svg>`;
}
