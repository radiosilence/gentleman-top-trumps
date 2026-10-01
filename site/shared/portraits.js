// Profile silhouettes in the manner of Georgian cut-paper portraits, facing right.
// Composed from parts on a 200×250 canvas; everything in INK unions into one shape.

const INK = "#15110d";
const GREY = "#3b352e";
const GOLD = "#c9a45c";
const CREAM = "#f3ead6";

const NOSE = {
  straight: "L163 121 L152 125",
  aquiline: "C158 104 166 114 163 122 L152 126",
  snub: "C155 112 160 118 159 121 L151 124",
};
const CHIN = {
  strong: "C155 148 153 157 141 159",
  soft: "C151 150 146 156 137 157",
  jowl: "C155 152 149 164 132 165",
};
const BUST = {
  m: "M127 198 C150 206 182 216 194 250 L200 320 L0 320 L6 250 C14 222 44 206 72 198 Z",
  f: "M126 198 C146 208 172 220 184 250 L196 320 L4 320 L16 250 C22 226 50 210 76 198 Z",
  big: "M129 196 C160 202 194 214 200 250 L206 320 L-6 320 L0 250 C6 220 40 200 70 196 Z",
};

const head = (nose, chin) =>
  `M88 206 C88 188 86 174 82 164 C66 152 58 134 59 108 C62 68 92 46 122 50 C142 53 152 70 151 88 L150 96 ${NOSE[nose]} L154 129 L150 132 L153 136 L150 140 ${CHIN[chin]} L130 162 C126 176 125 192 127 206 Z`;

const HAIR = {
  bald: "",
  buzz: `<path d="M58 112 C54 72 86 44 124 47 C144 50 154 66 152 84 C140 74 124 70 110 72 C90 78 76 96 72 118 Z"/>`,
  short: `<path d="M57 118 C50 72 84 38 124 42 C146 45 158 60 154 82 C146 72 132 68 118 70 C96 74 80 92 74 122 Z"/>`,
  slick: `<path d="M56 130 C46 76 86 34 130 42 C152 46 162 62 156 80 C142 64 120 60 100 68 C82 76 72 100 70 134 Z"/>`,
  quiff: `<path d="M57 118 C50 72 80 40 112 40 C126 26 156 28 166 50 C164 60 156 70 153 82 C144 70 128 66 116 70 C96 74 80 92 74 122 Z"/>`,
  receding: `<path d="M57 122 C52 86 70 58 98 50 C92 64 84 86 78 124 Z"/>`,
  curly: [[60, 112, 12], [60, 90, 14], [74, 68, 15], [94, 52, 16], [116, 44, 15], [136, 46, 13], [150, 60, 11], [70, 128, 10]]
    .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join(""),
  long: `<path d="M60 96 C58 60 92 38 126 42 C150 46 160 64 154 86 C146 74 132 70 120 72 C112 92 108 122 106 160 C102 192 94 214 86 232 C70 228 54 216 46 198 C52 170 50 130 60 96 Z"/>`,
  wavy: `<path d="M60 96 C58 60 92 38 126 42 C150 46 162 64 156 88 C146 76 132 70 120 72 C108 92 116 112 106 132 C98 150 112 168 100 188 C92 204 100 220 88 236 C76 230 62 238 50 222 C38 208 52 196 44 180 C36 160 52 146 46 128 C42 114 54 104 60 96 Z"/>`,
  bob: `<path d="M56 120 C50 70 86 38 126 42 C150 46 162 64 156 88 C150 82 146 78 140 76 C128 74 114 78 108 92 C104 110 104 130 106 150 C92 156 74 156 58 150 C52 140 54 130 56 120 Z"/>`,
  bun: `<path d="M57 118 C50 72 84 38 124 42 C146 45 158 60 154 82 C146 72 132 68 118 70 C96 74 80 92 74 122 Z"/><circle cx="58" cy="78" r="16"/>`,
  ponytail: `<path d="M57 118 C50 72 84 38 124 42 C146 45 158 60 154 82 C146 72 132 68 118 70 C96 74 80 92 74 122 Z"/><path d="M62 88 C36 96 28 136 38 172 C46 160 50 132 66 112 Z"/>`,
};

const HAT = {
  flatcap: `<path d="M54 96 C56 58 90 36 124 38 C148 40 160 54 160 68 C172 70 180 74 182 80 C168 84 150 82 136 80 C112 78 84 84 58 102 Z"/>`,
  fedora: `<path d="M64 76 C62 44 82 24 112 24 C140 24 156 40 156 74 Z"/><path d="M38 80 C70 68 150 62 184 72 C180 79 150 79 120 78 C90 78 60 84 38 88 Z"/><path d="M64 70 C94 64 128 62 156 66" stroke="${GOLD}" stroke-width="4" fill="none"/>`,
  mitre: `<path d="M66 82 C66 52 78 22 106 4 C134 22 152 52 152 80 C126 70 94 70 66 82 Z"/><path d="M108 14 V66 M90 40 H126" stroke="${GOLD}" stroke-width="4" fill="none"/>`,
  beanie: `<path d="M54 108 C46 62 82 28 122 32 C154 36 166 60 158 90 C140 80 110 78 80 90 Z"/><path d="M58 104 C88 86 132 82 158 88" stroke="${GREY}" stroke-width="5" fill="none"/>`,
  balaclava: `<path d="M128 90 H154 V102 H128 Z" fill="${CREAM}" opacity=".9"/>`,
  tiara: `<path d="M84 52 L92 34 L100 48 L110 28 L120 46 L130 32 L134 50" stroke="${GOLD}" stroke-width="4" fill="none" stroke-linejoin="round"/>`,
};

const BEARD = {
  full: `<path d="M100 118 C100 150 112 176 138 176 C154 174 161 160 157 140 L150 138 C144 150 128 156 112 146 C106 138 104 128 100 118 Z"/>`,
  goatee: `<path d="M138 150 C140 168 152 170 158 156 L154 140 Z"/>`,
  moustache: `<path d="M147 126 C157 125 163 130 160 135 C156 132 151 132 146 131 Z"/>`,
};

const ATTIRE = {
  suit: (tie) => `<path d="M122 199 L136 205 L127 216 Z" fill="${CREAM}"/><path d="M131 206 L168 300" stroke="${tie}" stroke-width="8"/><path d="M118 204 C136 214 156 250 168 300" stroke="${GOLD}" stroke-width="1.5" fill="none" opacity=".7"/>`,
  blazer: () => `<path d="M122 199 L140 207 L132 226 Z" fill="${CREAM}"/><path d="M118 204 C136 214 156 250 168 300" stroke="${GOLD}" stroke-width="1.5" fill="none" opacity=".7"/>`,
  tux: () => `<path d="M122 199 L146 206 L174 300 L146 300 Z" fill="${CREAM}"/><path d="M128 205 L140 201 L140 211 Z M128 205 L118 201 L118 211 Z" fill="${INK}"/><path d="M118 204 C136 214 156 250 168 300" stroke="${GOLD}" stroke-width="2.5" fill="none"/>`,
  tweed: () => `<path d="M122 199 L136 205 L127 216 Z" fill="${CREAM}"/><path d="M131 206 L168 300" stroke="#7a5a2a" stroke-width="8"/><g stroke="${GOLD}" stroke-width=".8" opacity=".35">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${10 + i * 24} 250 L${40 + i * 24} 205"/><path d="M0 ${214 + i * 6} H200"/>`).join("")}</g>`,
  wax: () => `<path d="M114 196 C124 206 140 210 152 208 C150 216 140 222 128 222 C120 214 116 206 114 196 Z" fill="#4b3a22"/>`,
  jumper: () => `<path d="M116 200 C126 210 138 212 146 208" stroke="${GREY}" stroke-width="7" fill="none"/>`,
  turtleneck: () => `<g stroke="${GREY}" stroke-width="2.5">${[0, 1, 2, 3, 4].map((i) => `<path d="M${72 + i * 0} ${180 + i * 6} L${128} ${178 + i * 6}"/>`).join("")}</g>`,
  hoodie: () => `<path d="M74 200 C56 180 60 150 78 150 C80 172 92 190 112 200 Z"/><path d="M134 206 L138 232 M142 205 L146 230" stroke="${CREAM}" stroke-width="2"/>`,
  polo: () => `<path d="M120 196 L140 204 L130 214 Z M118 196 L108 210 L124 206 Z" fill="${CREAM}"/>`,
  clerical: () => `<path d="M121 186 L130 186 L128 202 L119 202 Z" fill="${CREAM}"/><path d="M130 206 C132 222 132 236 130 250" stroke="#6a2a5a" stroke-width="10"/>`,
  prison: () => `<path d="M10 250 C16 226 44 210 72 200 L127 200 C150 206 180 216 190 250 Z" fill="${GREY}"/><path d="M116 200 C126 210 138 212 146 208" stroke="${INK}" stroke-width="4" fill="none"/>`,
  military: () => `<path d="M50 212 L84 204 L86 212 L52 220 Z" fill="${GOLD}"/><path d="M118 196 L134 204 L132 214" stroke="${GOLD}" stroke-width="3" fill="none"/><g fill="${GOLD}"><circle cx="156" cy="234" r="4"/><circle cx="168" cy="236" r="4"/></g><path d="M152 222 h8 v8 h-8z M164 224 h8 v8 h-8z" fill="#6b1d22"/>`,
  gown: () => `<g fill="${CREAM}">${[0, 1, 2, 3, 4, 5, 6].map((i) => `<circle cx="${84 + i * 8}" cy="${206 + Math.sin((i / 6) * Math.PI) * 8}" r="2.6"/>`).join("")}</g>`,
  vest: () => `<path d="M82 200 L94 250 M120 200 L140 250" stroke="${GREY}" stroke-width="6"/>`,
  tactical: () => `<path d="M70 196 L130 196 L132 214 L70 214 Z" fill="${GREY}"/><path d="M60 214 L170 250 M110 210 L80 250" stroke="${GREY}" stroke-width="7"/>`,
};

// 48×48 emblems drawn in gold line, set in front of the face.
const leaf = [[-75, 12], [-45, 18], [-20, 22], [0, 24], [20, 22], [45, 18], [75, 12]]
  .map(([a, l]) => `<ellipse cx="24" cy="${40 - l / 2}" rx="3.2" ry="${l / 2}" transform="rotate(${a} 24 40)"/>`).join("") + `<path d="M24 40 V47"/>`;

export const PROPS = {
  antlers: `<path d="M24 46 V28 M24 28 C16 24 12 16 12 4 M12 15 L4 8 M12 22 L5 22 M24 28 C32 24 36 16 36 4 M36 15 L44 8 M36 22 L43 22"/>`,
  leaf,
  champagne: `<path d="M8 10 C8 22 40 22 40 10 Z M24 20 V40 M14 42 H34"/>`,
  teacup: `<path d="M8 18 H34 C34 32 28 38 21 38 C14 38 8 32 8 18 Z M34 22 C42 22 42 30 33 31 M4 43 H40"/>`,
  shotgun: `<path d="M4 40 L40 6 M9 43 L44 10 M4 40 L1 47 L10 45 M15 33 L19 37"/>`,
  flask: `<path d="M18 5 H30 M20 5 V18 L7 42 H41 L28 18 V5 M13 32 H35"/>`,
  bars: `<path d="M6 6 H42 V42 H6 Z M15 6 V42 M24 6 V42 M33 6 V42"/>`,
  portcullis: `<path d="M8 10 H40 M11 10 V38 M19 10 V44 M29 10 V44 M37 10 V38 M8 20 H40 M8 30 H40 M14 10 L10 3 M34 10 L38 3"/>`,
  ring: `<circle cx="24" cy="31" r="12"/><path d="M18 16 L24 6 L30 16 L24 20 Z"/>`,
  claws: `<path d="M10 6 C18 18 18 32 12 44 M22 4 C30 18 30 32 24 46 M34 6 C42 18 42 32 36 44"/>`,
  pram: `<path d="M8 22 H36 C36 32 30 36 22 36 C14 36 8 32 8 22 Z M8 22 C8 12 15 6 24 6 V22 M36 22 L42 14"/><circle cx="14" cy="42" r="4"/><circle cx="30" cy="42" r="4"/>`,
  bible: `<path d="M9 6 H38 V43 H9 Z M14 6 V43 M26 14 V34 M20 20 H32"/>`,
  glove: `<path d="M13 22 C12 8 36 4 38 18 C40 30 36 36 30 38 V44 H16 V38 C10 36 10 28 13 22 Z M13 26 C20 22 23 29 18 33"/>`,
  crown: `<path d="M6 38 L8 14 L17 26 L24 8 L31 26 L40 14 L42 38 Z M8 44 H40"/>`,
  ledger: `<path d="M9 5 H39 V44 H9 Z M14 5 V44"/><text x="27" y="33" font-size="22" text-anchor="middle" fill="${GOLD}" stroke="none" font-family="Cinzel, serif">£</text>`,
  briefcase: `<path d="M5 16 H43 V41 H5 Z M18 16 V10 H30 V16 M5 26 H43 M22 26 V30 H26 V26"/>`,
  medal: `<path d="M16 3 L24 17 L32 3"/><circle cx="24" cy="31" r="11"/><path d="M24 24 L26 29 L31 29 L27 32 L29 37 L24 34 L19 37 L21 32 L17 29 L22 29 Z"/>`,
  pistol: `<path d="M4 13 H42 V21 H19 L15 40 H6 L10 21 H4 Z M19 21 C19 28 25 28 25 21"/>`,
  cards: `<rect x="7" y="10" width="20" height="28" rx="2" transform="rotate(-14 17 24)"/><rect x="21" y="10" width="20" height="28" rx="2" transform="rotate(12 31 24)"/><path d="M31 18 C27 22 27 26 31 26 C35 26 35 22 31 18 Z M31 26 V30"/>`,
  masks: `<circle cx="17" cy="20" r="11"/><circle cx="31" cy="28" r="11"/><path d="M12 23 C15 27 19 27 22 23 M26 34 C29 30 33 30 36 34"/>`,
  container: `<path d="M4 16 L24 8 L44 16 V36 L24 44 L4 36 Z M4 16 L24 24 L44 16 M24 24 V44 M11 22 V36 M17 24 V39"/>`,
  bolt: `<path d="M28 3 L9 26 H22 L18 45 L39 20 H26 Z"/>`,
  dice: `<rect x="5" y="16" width="20" height="20" rx="3"/><rect x="23" y="8" width="20" height="20" rx="3" transform="rotate(14 33 18)"/><circle cx="10" cy="21" r="1.5"/><circle cx="15" cy="26" r="1.5"/><circle cx="20" cy="31" r="1.5"/>`,
  shovel: `<path d="M24 3 V29 M17 3 H31 M15 29 H33 L31 41 C29 46 19 46 17 41 Z"/>`,
  map: `<path d="M24 44 C14 30 10 24 10 18 C10 10 16 4 24 4 C32 4 38 10 38 18 C38 24 34 30 24 44 Z"/><circle cx="24" cy="18" r="5"/>`,
  frame: `<path d="M5 7 H43 V41 H5 Z M11 13 H37 V35 H11 Z M13 33 L21 23 L27 29 L31 25 L36 31"/>`,
  crosshair: `<circle cx="24" cy="24" r="15"/><circle cx="24" cy="24" r="3"/><path d="M24 2 V14 M24 34 V46 M2 24 H14 M34 24 H46"/>`,
  knife: `<path d="M6 42 L30 18 C36 12 42 7 45 4 C43 11 38 18 33 22 Z M10 33 L17 40 M3 45 L9 39"/>`,
  cross: `<path d="M24 3 V45 M12 15 H36"/>`,
  mountain: `<path d="M2 42 L18 14 L26 27 L32 19 L46 42 Z M13 23 L18 14 L23 23 L18 21 Z"/>`,
  mask: `<path d="M4 20 C10 13 18 15 24 21 C30 15 38 13 44 20 C42 31 34 33 28 29 L24 27 L20 29 C14 33 6 31 4 20 Z"/><ellipse cx="15" cy="23" rx="4" ry="2.5"/><ellipse cx="33" cy="23" rx="4" ry="2.5"/>`,
  pitchfork: `<path d="M24 46 V18 M12 3 V13 C12 21 36 21 36 13 V3 M24 3 V18"/>`,
  falcon: `<path d="M24 20 C18 10 8 8 2 12 C10 14 16 20 18 26 C14 28 12 34 14 40 L20 34 L24 44 L28 34 L34 40 C36 34 34 28 30 26 C32 20 38 14 46 12 C40 8 30 10 24 20 Z"/>`,
};

export function portrait(card, tint) {
  const l = card.look;
  const id = `p-${card.id}`;
  const hairFill = l.hairTone === "grey" ? GREY : INK;
  const attire = ATTIRE[l.attire]?.(l.tie ?? "#6b1d22") ?? "";
  return `<svg viewBox="0 0 200 250" class="portrait-svg" overflow="visible" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-bg" cx="45%" cy="38%" r="75%">
      <stop offset="0" stop-color="#fbf5e6"/>
      <stop offset=".7" stop-color="#ece0c2"/>
      <stop offset="1" stop-color="${tint}"/>
    </radialGradient>
    <clipPath id="${id}-clip"><ellipse cx="100" cy="125" rx="96" ry="121"/></clipPath>
  </defs>
  <ellipse cx="100" cy="125" rx="96" ry="121" fill="url(#${id}-bg)"/>
  <g clip-path="url(#${id}-clip)"><g transform="translate(22 40) scale(.8)">
    <g fill="${INK}">
      <path d="${BUST[l.build]}"/>
      <path d="${head(l.nose, l.chin)}"/>
      ${BEARD[l.beard] ?? ""}
    </g>
    <g fill="${hairFill}">${HAIR[l.hair ?? "bald"] ?? ""}</g>
    <g fill="${INK}">${l.hat && l.hat !== "tiara" && l.hat !== "balaclava" ? HAT[l.hat] : ""}</g>
    ${l.hat === "tiara" || l.hat === "balaclava" ? HAT[l.hat] : ""}
    ${attire}
    ${l.glasses ? `<path d="M142 92 C150 90 157 92 157 96 C157 102 152 104 147 103 C142 102 141 97 142 92 Z M142 96 L100 100" stroke="${GOLD}" stroke-width="2" fill="none"/>` : ""}
  </g></g>
  <ellipse cx="100" cy="125" rx="96" ry="121" fill="none" stroke="${GOLD}" stroke-width="3"/>
  <ellipse cx="100" cy="125" rx="90" ry="115" fill="none" stroke="${GOLD}" stroke-width="1" opacity=".6"/>
  <g transform="translate(170 214)">
    <circle r="27" fill="${tint}" stroke="${GOLD}" stroke-width="3"/>
    <circle r="22" fill="none" stroke="${GOLD}" stroke-width=".8" opacity=".6"/>
    <g transform="translate(-14.4 -14.4) scale(.6)" fill="none" stroke="${GOLD}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">${PROPS[l.prop] ?? ""}</g>
  </g>
</svg>`;
}

export function crest(label = "TRUMPS") {
  return `<svg viewBox="0 0 200 310" class="crest-svg" aria-hidden="true">
  <defs>
    <pattern id="lattice" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d="M0 0 H16 M0 0 V16" stroke="${GOLD}" stroke-width=".8" opacity=".35"/>
      <circle cx="8" cy="8" r="1.2" fill="${GOLD}" opacity=".45"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="200" height="310" fill="#123224"/>
  <rect x="10" y="10" width="180" height="290" rx="8" fill="url(#lattice)" stroke="${GOLD}" stroke-width="2"/>
  <rect x="16" y="16" width="168" height="278" rx="5" fill="none" stroke="${GOLD}" stroke-width=".8" opacity=".7"/>
  <g transform="translate(100 150)">
    <ellipse rx="64" ry="78" fill="#123224" stroke="${GOLD}" stroke-width="2"/>
    <path d="M-34 -38 H34 V8 C34 34 0 50 0 50 C0 50 -34 34 -34 8 Z" fill="#6b1d22" stroke="${GOLD}" stroke-width="2.5"/>
    <text x="0" y="16" text-anchor="middle" font-family="Cinzel, serif" font-weight="700" font-size="44" fill="${GOLD}">G</text>
    <path d="M-26 -46 L-22 -64 L-12 -52 L0 -70 L12 -52 L22 -64 L26 -46 Z" fill="${GOLD}"/>
    <path d="M-40 -12 C-58 -20 -60 -44 -50 -56 M-44 -36 L-56 -40 M-42 -24 L-54 -24 M40 -12 C58 -20 60 -44 50 -56 M44 -36 L56 -40 M42 -24 L54 -24" stroke="${GOLD}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <text x="0" y="68" text-anchor="middle" font-family="Cinzel, serif" font-size="9" letter-spacing="3" fill="${GOLD}">${label}</text>
  </g>
</svg>`;
}
