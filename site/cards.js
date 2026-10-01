export const STATS = [
  { key: "pedigree", label: "Pedigree", hint: "Breeding, title and the right school" },
  { key: "fortune", label: "Fortune", hint: "Money they can lay hands on tonight" },
  { key: "menace", label: "Menace", hint: "How frightened you ought to be" },
  { key: "cunning", label: "Cunning", hint: "Schemes, cons and seeing it coming" },
  { key: "composure", label: "Composure", hint: "Grace under fire" },
  { key: "bloodshed", label: "Bloodshed", hint: "Willingness to make a mess" },
];

export const FACTIONS = {
  horniman: { name: "Halstead", color: "#1f4a37" },
  glass: { name: "Glass", color: "#6b1d22" },
  scouse: { name: "Dixon", color: "#1d2c4d" },
  italy: { name: "Moretti", color: "#432a5a" },
  establishment: { name: "Establishment", color: "#3f4a52" },
  rivals: { name: "Rival", color: "#5b3b1c" },
};

// p: [pedigree, fortune, menace, cunning, composure, bloodshed]
// look: silhouette spec, see portraits.js
const RAW = [
  {
    id: "eddie", name: "Eddie Horniman", role: "13th Duke of Halstead", faction: "horniman", series: [1, 2],
    blurb: "A former UN peacekeeper who inherited the dukedom and discovered a cannabis farm under the estate.",
    p: [97, 78, 84, 93, 96, 74],
    look: { build: "m", nose: "straight", chin: "strong", hair: "short", attire: "suit", tie: "#6b1d22", prop: "antlers" },
  },
  {
    id: "susie", name: "Susie Glass", role: "Heir to the Glass empire", faction: "glass", series: [1, 2],
    blurb: "Runs her imprisoned father's cannabis business from behind an antiques dealership.",
    p: [28, 88, 86, 95, 95, 58],
    look: { build: "f", nose: "snub", chin: "soft", hair: "long", attire: "blazer", prop: "leaf" },
  },
  {
    id: "freddy", name: "Freddy Horniman", role: "The elder brother", faction: "horniman", series: [1, 2],
    blurb: "Passed over for the title, owed £8 million to Liverpool dealers, and shot one of them. Later found God.",
    p: [90, 12, 38, 14, 6, 55],
    look: { build: "m", nose: "aquiline", chin: "soft", hair: "quiff", attire: "jumper", prop: "champagne" },
  },
  {
    id: "sabrina", name: "Lady Sabrina", role: "Dowager Duchess", faction: "horniman", series: [1, 2],
    blurb: "Mother of Eddie, Freddy and Charly. Still believes her family are gentlemen.",
    p: [94, 55, 32, 62, 88, 4],
    look: { build: "f", nose: "aquiline", chin: "soft", hair: "bun", hairTone: "grey", attire: "gown", prop: "teacup" },
  },
  {
    id: "geoff", name: "Geoff Seacombe", role: "Gamekeeper", faction: "horniman", series: [1, 2],
    blurb: "Has kept Halstead's woods for decades. Charly's real father, and handy with a shotgun when mercenaries call.",
    p: [14, 18, 80, 56, 90, 72],
    look: { build: "big", nose: "straight", chin: "jowl", hat: "flatcap", attire: "wax", prop: "shotgun" },
  },
  {
    id: "charly", name: "Charly Horniman", role: "The younger sister", faction: "horniman", series: [1, 2],
    blurb: "Came home from university pregnant. Mother of Tarquin.",
    p: [88, 42, 18, 44, 48, 2],
    look: { build: "f", nose: "snub", chin: "soft", hair: "ponytail", attire: "jumper", prop: "pram" },
  },
  {
    id: "nanny", name: "Nanny Asante", role: "Royal equerry", faction: "horniman", series: [2],
    blurb: "Former soldier and equerry to the King. Married Charly, and held the house when the mercenaries came.",
    p: [48, 40, 72, 74, 94, 66],
    look: { build: "m", nose: "straight", chin: "strong", hair: "buzz", attire: "military", prop: "medal" },
  },
  {
    id: "archibald", name: "The 12th Duke", role: "Archibald Horniman", faction: "horniman", series: [1],
    blurb: "Eddie's father. Dies in the first scene and leaves everything to his second son.",
    p: [100, 40, 28, 64, 74, 3],
    look: { build: "m", nose: "aquiline", chin: "jowl", hair: "receding", hairTone: "grey", beard: "moustache", attire: "tweed", prop: "crown" },
  },
  {
    id: "tammy", name: "Tammy Horniman", role: "Freddy's wife", faction: "horniman", series: [1],
    blurb: "Married to Freddy, which tells you most of what you need to know about her patience.",
    p: [62, 36, 20, 42, 40, 0],
    look: { build: "f", nose: "snub", chin: "soft", hair: "bob", attire: "gown", prop: "ring" },
  },
  {
    id: "bobby", name: "Bobby Glass", role: "Head of the Glass empire", faction: "glass", series: [1, 2],
    blurb: "Runs a cannabis empire from a prison cell, and tested his heirs by pretending to sell it.",
    p: [22, 95, 97, 94, 92, 84],
    look: { build: "big", nose: "aquiline", chin: "jowl", hair: "receding", hairTone: "grey", attire: "prison", prop: "bars" },
  },
  {
    id: "jimmy", name: "Jimmy Chang", role: "Chief grower", faction: "glass", series: [1, 2],
    blurb: "Runs the farm under Halstead. A brilliant grower and an easy mark for a pretty stranger.",
    p: [12, 30, 10, 34, 28, 0],
    look: { build: "m", nose: "snub", chin: "soft", hair: "short", glasses: true, attire: "hoodie", prop: "leaf" },
  },
  {
    id: "jack", name: "Jack Glass", role: "Professional boxer", faction: "glass", series: [1, 2],
    blurb: "Susie's younger brother. Put in hospital by a bout that was fixed against him.",
    p: [20, 38, 70, 28, 52, 24],
    look: { build: "m", nose: "straight", chin: "strong", hair: "buzz", attire: "vest", prop: "glove" },
  },
  {
    id: "felix", name: "Felix", role: "Crime scene cleaner", faction: "glass", series: [1],
    blurb: "Makes bodies disappear for Susie, and was quietly told to add Jethro to the list.",
    p: [8, 52, 86, 72, 99, 82],
    look: { build: "m", nose: "straight", chin: "strong", hair: "buzz", beard: "full", attire: "turtleneck", prop: "shovel" },
  },
  {
    id: "joe", name: "Joe Green", role: "Cocaine dealer", faction: "glass", series: [2],
    blurb: "Susie's childhood friend. Took her to Peru to meet a supplier and was less than honest about it.",
    p: [10, 50, 52, 38, 40, 22],
    look: { build: "m", nose: "snub", chin: "strong", hair: "curly", attire: "hoodie", prop: "pistol" },
  },
  {
    id: "tibsy", name: "Lord Whitecroft", role: "'Tibsy'", faction: "glass", series: [1],
    blurb: "An old associate of Bobby Glass who knows which stately homes are hiding a farm.",
    p: [89, 58, 14, 46, 56, 0],
    look: { build: "m", nose: "aquiline", chin: "jowl", hair: "receding", hairTone: "grey", glasses: true, attire: "tweed", prop: "map" },
  },
  {
    id: "dixon", name: "John Dixon", role: "'The Gospel'", faction: "scouse", series: [1, 2],
    blurb: "Head of the Liverpool family. Quotes scripture, never stopped looking for his missing brother, and later took Freddy under his wing.",
    p: [6, 62, 86, 82, 82, 74],
    look: { build: "big", nose: "straight", chin: "jowl", hair: "receding", glasses: true, attire: "suit", tie: "#14110d", prop: "bible" },
  },
  {
    id: "tommy", name: "Tommy Dixon", role: "The Gospel's brother", faction: "scouse", series: [1],
    blurb: "Came to Halstead to collect Freddy's debt and never left.",
    p: [5, 40, 76, 30, 34, 42],
    look: { build: "big", nose: "straight", chin: "jowl", hair: "short", beard: "moustache", attire: "suit", tie: "#c9a45c", prop: "dice" },
  },
  {
    id: "jethro", name: "Jethro", role: "Scouse accountant", faction: "scouse", series: [1],
    blurb: "The Dixons' meticulous bookkeeper. Framed for Tommy's murder by the people who did it.",
    p: [6, 16, 8, 70, 14, 0],
    look: { build: "m", nose: "snub", chin: "soft", hair: "short", glasses: true, attire: "suit", tie: "#3f4a52", prop: "ledger" },
  },
  {
    id: "stanley", name: "Stanley Johnston", role: "'Uncle Stan'", faction: "rivals", series: [1, 2],
    blurb: "A wine-loving American billionaire who wanted to buy Halstead. Also a crystal meth kingpin.",
    p: [20, 99, 88, 91, 86, 52],
    look: { build: "m", nose: "straight", chin: "strong", hair: "bald", beard: "full", hairTone: "grey", glasses: true, attire: "suit", tie: "#432a5a", prop: "flask" },
  },
  {
    id: "gabrielle", name: "Gabrielle", role: "Stanley's operative", faction: "rivals", series: [1, 2],
    blurb: "Seduced Jimmy for the distribution details and walked off with a shipment.",
    p: [32, 46, 44, 90, 86, 10],
    look: { build: "f", nose: "snub", chin: "soft", hair: "wavy", attire: "gown", prop: "mask" },
  },
  {
    id: "henry", name: "Henry Collins", role: "Boxing promoter", faction: "rivals", series: [1],
    blurb: "Ex-army. Offered to launder the Glass money and planned to take the whole empire. Eddie dealt with him.",
    p: [42, 70, 80, 76, 70, 54],
    look: { build: "m", nose: "straight", chin: "strong", hair: "slick", attire: "suit", tie: "#1d2c4d", prop: "briefcase" },
  },
  {
    id: "florian", name: "Florian de Groot", role: "Belgian distributor", faction: "rivals", series: [1],
    blurb: "Cut out of the supply chain, he stole £4 million of product to get his place back.",
    p: [16, 70, 76, 64, 58, 50],
    look: { build: "big", nose: "straight", chin: "strong", hair: "long", beard: "full", attire: "suit", prop: "container" },
  },
  {
    id: "jp", name: "JP Ward", role: "Traveller chief", faction: "rivals", series: [1],
    blurb: "Head of a traveller family. Stole the farm's generators and ended up as Susie's distributor.",
    p: [10, 55, 82, 66, 72, 56],
    look: { build: "m", nose: "straight", chin: "strong", hair: "short", attire: "polo", prop: "bolt" },
  },
  {
    id: "pete", name: "Sticky Pete", role: "Con artist", faction: "rivals", series: [1],
    blurb: "Peter Spencer-Forbes. Took Freddy for a fortune at the tables with a rigged game.",
    p: [62, 34, 18, 78, 52, 0],
    look: { build: "m", nose: "aquiline", chin: "soft", hair: "quiff", attire: "tux", prop: "cards" },
  },
  {
    id: "max", name: "Max Bassington", role: "Heir and aspiring actor", faction: "establishment", series: [1],
    blurb: "Heir to Lord Bassington-Smythe, with Nazi sympathies and an heirloom that could ruin the family.",
    p: [86, 52, 40, 30, 18, 8],
    look: { build: "m", nose: "aquiline", chin: "soft", hair: "slick", attire: "tux", prop: "masks" },
  },
  {
    id: "frank", name: "Frank", role: "Disgraced journalist", faction: "establishment", series: [1],
    blurb: "Tried to blackmail the Bassingtons with what he knew. Picked the wrong week.",
    p: [18, 10, 20, 58, 26, 0],
    look: { build: "m", nose: "snub", chin: "jowl", hair: "receding", beard: "full", attire: "wax", prop: "ledger" },
  },
  {
    id: "rosie", name: "Princess Rosie", role: "Countess of Tournai", faction: "establishment", series: [1],
    blurb: "Eddie's childhood friend and eleventh in line to the Belgian throne.",
    p: [99, 84, 16, 58, 76, 4],
    look: { build: "f", nose: "straight", chin: "soft", hair: "bob", hat: "tiara", attire: "gown", prop: "crown" },
  },
  {
    id: "hawthorne", name: "Lord Hawthorne", role: "Corrupt peer", faction: "establishment", series: [2],
    blurb: "Eddie's bought man in Westminster on cannabis legalisation, until he let the plan slip to the wrong person.",
    p: [86, 56, 18, 58, 30, 6],
    look: { build: "big", nose: "snub", chin: "jowl", hair: "receding", hairTone: "grey", attire: "suit", tie: "#1f4a37", prop: "portcullis" },
  },
  {
    id: "thorne", name: "Bishop Thorne", role: "Bishop of Sussex", faction: "establishment", series: [2],
    blurb: "An anti-drugs campaigner whose support Eddie needs for legalisation.",
    p: [64, 38, 36, 66, 72, 0],
    look: { build: "f", nose: "aquiline", chin: "soft", hair: "bob", hairTone: "grey", hat: "mitre", attire: "clerical", prop: "cross" },
  },
  {
    id: "oscar", name: "Oscar Thorne", role: "The bishop's son", faction: "establishment", series: [2],
    blurb: "Keen falconer, deep in debt to an Irish fight promoter. Eddie helps him get his bird back.",
    p: [58, 6, 12, 22, 24, 2],
    look: { build: "m", nose: "snub", chin: "soft", hair: "wavy", attire: "wax", prop: "falcon" },
  },
  {
    id: "richard", name: "Richard", role: "The accountant", faction: "establishment", series: [2],
    blurb: "Knew too much about the money. A mafia hitman was sent for him.",
    p: [24, 20, 6, 52, 12, 0],
    look: { build: "m", nose: "straight", chin: "soft", hair: "receding", glasses: true, attire: "suit", tie: "#6b1d22", prop: "ledger" },
  },
  {
    id: "marco", name: "Marco Moretti", role: "Head of the Moretti family", faction: "italy", series: [2],
    blurb: "An old-school mafia boss who fed a thieving fixer to a tiger, then offered Eddie protection.",
    p: [56, 92, 96, 86, 90, 90],
    look: { build: "big", nose: "aquiline", chin: "jowl", hair: "slick", hairTone: "grey", beard: "full", attire: "suit", tie: "#14110d", prop: "claws" },
  },
  {
    id: "bella", name: "Bella Soranza", role: "Countess of Parma", faction: "italy", series: [2],
    blurb: "Italian aristocrat and Marco Moretti's goddaughter. Eddie proposed.",
    p: [92, 76, 24, 70, 82, 0],
    look: { build: "f", nose: "snub", chin: "soft", hair: "wavy", attire: "gown", prop: "ring" },
  },
  {
    id: "cico", name: "Cico Maldini", role: "Fixer", faction: "italy", series: [2],
    blurb: "Smoothed the way into Italy, sold Eddie a fake painting, and met Marco's tiger.",
    p: [50, 58, 54, 72, 60, 28],
    look: { build: "m", nose: "straight", chin: "strong", hair: "slick", attire: "blazer", prop: "frame" },
  },
  {
    id: "takashi", name: "Takashi", role: "Marco's hitman", faction: "italy", series: [2],
    blurb: "A psychopathic assassin sent to kill an accountant. Proved more useful dead, as blackmail material.",
    p: [6, 34, 96, 52, 84, 94],
    look: { build: "m", nose: "straight", chin: "strong", hair: "slick", attire: "suit", tie: "#14110d", prop: "knife" },
  },
  {
    id: "zero", name: "Zero", role: "Mercenary captain", faction: "rivals", series: [2],
    blurb: "Led the mercenaries who stormed Halstead and took Charly's son.",
    p: [4, 42, 93, 62, 80, 92],
    look: { build: "big", nose: "straight", chin: "strong", hat: "balaclava", attire: "tactical", prop: "crosshair" },
  },
  {
    id: "vargas", name: "Carlos Vargas", role: "Cocaine baron", faction: "rivals", series: [2],
    blurb: "Runs a smuggling operation out of Peru. Took Susie and Joe hostage when they came to deal.",
    p: [12, 90, 90, 72, 76, 80],
    look: { build: "big", nose: "aquiline", chin: "jowl", hair: "slick", hairTone: "grey", beard: "moustache", attire: "blazer", prop: "mountain" },
  },
  {
    id: "gallagher", name: "Pat Gallagher", role: "Irish fight promoter", faction: "rivals", series: [2],
    blurb: "An Irish gangster who holds Oscar's debts, and his falcon.",
    p: [8, 60, 80, 56, 62, 58],
    look: { build: "big", nose: "straight", chin: "jowl", hat: "fedora", attire: "suit", tie: "#1f4a37", prop: "glove" },
  },
  {
    id: "aisha", name: "Aisha", role: "Gulf business contact", faction: "glass", series: [2],
    blurb: "Susie's acquaintance in the Middle East, married to a prince and well placed to open doors.",
    p: [70, 94, 30, 76, 88, 0],
    look: { build: "f", nose: "straight", chin: "soft", hair: "long", attire: "gown", prop: "champagne" },
  },
  {
    id: "ned", name: "Red Ned", role: "Farmhand", faction: "horniman", series: [2],
    blurb: "A disgruntled worker who stole a container of weed. It did not end well for him.",
    p: [3, 4, 22, 12, 10, 6],
    look: { build: "m", nose: "snub", chin: "soft", hat: "beanie", attire: "jumper", prop: "pitchfork" },
  },
];

export const CARDS = RAW.map((c, i) => ({
  ...c,
  no: String(i + 1).padStart(2, "0"),
  stats: Object.fromEntries(STATS.map((s, j) => [s.key, c.p[j]])),
}));
