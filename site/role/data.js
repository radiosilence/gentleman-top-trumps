import { CARDS, FACTIONS } from "../shared/cards.js";
import { portrait } from "../shared/portraits.js";
import { insignia } from "../shared/insignia.js";
import { AXES } from "../shared/axes.js";

const card = Object.fromEntries(CARDS.map((c) => [c.id, c]));

// crew: deck characters shown as cameos; also: people outside the deck, named in text.
export const ROLES = [
  {
    id: "boss", name: "Head of the Family", sub: "The empire, and everyone in it", emblem: "king", tint: "#6b1d22", motto: "THE FAMILY",
    text: "You would sit at the top. Bobby Glass runs a cannabis empire from an open prison and still knows everything that moves through it; he once announced his retirement only to see which heir deserved the business. The job is less about giving orders than knowing which ones will be obeyed.",
    crew: ["bobby", "susie", "dixon", "marco"],
  },
  {
    id: "front", name: "The Landed Front", sub: "A title, a house and acres nobody looks under", emblem: "antlers", tint: "#1f4a37", motto: "THE ESTATE",
    text: "The business rests on old families with large estates and few questions. You would supply the name, the land and the respectability, and a farm would run quietly beneath your lawns. Eddie Horniman inherited Halstead and the farm under it together, took the role reluctantly, and turned out to be very good at it.",
    crew: ["eddie", "max"], also: "and the twelve landowners hosting Glass farms",
  },
  {
    id: "fixer", name: "The Fixer", sub: "Introductions, arrangements and a cut of both", emblem: "key", tint: "#432a5a", motto: "THE FIXER",
    text: "You know who needs what and who can supply it, and you take a percentage for making the call. Cico Maldini smoothed the firm's way into Italy until it emerged he was stealing from them; Bella Soranza took over as the go-between with Marco Moretti. Lord Whitecroft, known as Tibsy, knew which stately homes were hiding a farm.",
    crew: ["cico", "bella", "tibsy"],
  },
  {
    id: "grower", name: "Head Grower", sub: "The farm beneath the estate", emblem: "leaf", tint: "#2c4a1f", motto: "THE FARM",
    text: "Nothing else happens without the crop. You would run the farm itself: the lamps, the strains, the harvest and the people who work it. Jimmy Chang is a brilliant grower, if far too trusting of a pretty stranger. When the workers struck in series two, it was Ned who led them, and Eddie and Susie who ended it.",
    crew: ["jimmy", "ned"],
  },
  {
    id: "road", name: "Distribution", sub: "From the farm gate to the street", emblem: "container", tint: "#5b3b1c", motto: "THE ROAD",
    text: "A farm is worthless if nothing leaves it. You would run the lorries, the routes and the people who drive them. Florian de Groot held the job until he demanded more money and stole a shipment; Eddie replaced him with JP Ward's traveller family, who had recently stolen the farm's generators.",
    crew: ["jp", "florian"],
  },
  {
    id: "books", name: "The Books", sub: "Ledgers, laundering and clean money", emblem: "ledger", tint: "#3f4a52", motto: "THE BOOKS",
    text: "Cannabis produces cash in quantities that are hard to explain. You would make them explicable. Chucky Kubra launders for the Glass family; Henry Collins offered to do it through his boxing promotions, with designs on the whole empire. Jethro kept the Dixons' books and was framed for a murder he did not commit. It is quiet work, and the people who do it tend to know too much.",
    crew: ["jethro", "henry", "richard"], also: "and Chucky Kubra",
  },
  {
    id: "cleaner", name: "The Cleaner", sub: "Bleach, plastic sheeting and silence", emblem: "shovel", tint: "#14110d", motto: "THE CLEANER",
    text: "When something goes badly wrong, you arrive afterwards and make sure it never happened. Felix disposes of bodies for Susie with complete calm, and will deal with a witness if asked. In Italy, Moretti's consigliere Angelica Marino cleaned a hotel room for Eddie, then kept the favour as leverage. Discretion is the whole job.",
    crew: ["felix"], also: "and Angelica Marino",
  },
  {
    id: "muscle", name: "The Muscle", sub: "Collections, warnings and worse", emblem: "knuckles", tint: "#5a0c10", motto: "THE MUSCLE",
    text: "Some problems are solved by conversation and the rest by you. You would collect debts, deliver messages and stand behind whoever is talking. Tommy Dixon came to Halstead to collect Freddy's debt. Takashi was sent after an accountant and meant to kill the man's family too. Zero led the mercenaries who stormed the estate.",
    crew: ["tommy", "takashi", "zero"],
  },
  {
    id: "keeper", name: "The Gamekeeper", sub: "The woods, the house and the family", emblem: "shotgun", tint: "#33402a", motto: "THE KEEPER",
    text: "You would keep the estate: its land, its staff and, when it comes to it, its family. Geoff Seacombe has kept Halstead's woods for decades. When mercenaries came for the house, he held the woods with Nanny Asante, Charly and a neighbouring gamekeeper. Here, loyalty to the house comes before loyalty to the business.",
    crew: ["geoff", "nanny", "charly"], also: "and Mr Lawrence, the butler",
  },
  {
    id: "lords", name: "The Seat in the Lords", sub: "Votes, bishops and legislation", emblem: "portcullis", tint: "#1d2c4d", motto: "THE LORDS",
    text: "The long game is legal cannabis, and someone has to steer it through Parliament. You would buy the votes, court the bishops and keep the purchased peers quiet. Lord Hawthorne took Eddie's money and could not keep a secret; the Bishop of Sussex wanted her son's debts settled first. Eddie won a hereditary peer's seat to do the job himself.",
    crew: ["hawthorne", "thorne", "eddie"],
  },
  {
    id: "con", name: "The Con", sub: "Rigged games and borrowed names", emblem: "cards", tint: "#4d2f45", motto: "THE CON",
    text: "Why take something by force when its owner will hand it over? Sticky Pete took Freddy's money for a bet he never placed. Gabrielle seduced Jimmy for the distribution details while working for Stanley Johnston all along. Cico sold Eddie and Susie a Botticelli he already owned. You would be charming, patient and gone before anyone checks.",
    crew: ["pete", "gabrielle", "cico"],
  },
];

// r: weights towards roles; a: pull on the shared temperament axes.
const QUESTIONS = [
  {
    q: "A body turns up in the drawing room an hour before the shooting party arrives. What do you do?",
    options: [
      { t: "Ring someone discreet, and have the carpet replaced by lunch.", r: { cleaner: 3, fixer: 1 }, a: { nerve: 2 } },
      { t: "Find out who did it, and make an example of them.", r: { muscle: 2, boss: 2 }, a: { method: 2, nerve: -1 } },
      { t: "Greet the guests at the door and keep them in the orangery.", r: { front: 3, keeper: 1 }, a: { breeding: 2, method: -1 } },
      { t: "Check the pockets first. Waste not.", r: { con: 3 }, a: { loyalty: -2, breeding: -1 } },
    ],
  },
  {
    q: "Your ideal Saturday?",
    options: [
      { t: "Out on the estate at dawn with a dog and a shotgun.", r: { keeper: 3 }, a: { breeding: 1, appetite: -1 } },
      { t: "In the glasshouse, nursing something rare.", r: { grower: 3 }, a: { method: -1, appetite: -1 } },
      { t: "Ringside, with money on the outcome.", r: { muscle: 1, con: 1, road: 1 }, a: { breeding: -2 } },
      { t: "Lunch at the club, being introduced to the right people.", r: { fixer: 2, lords: 2 }, a: { breeding: 2, method: -2 } },
    ],
  },
  {
    q: "Your brother owes £8 million to some very unpleasant people from Liverpool. Your move.",
    options: [
      { t: "Negotiate it down. Everything has a price.", r: { fixer: 1, boss: 1 }, a: { method: -2, nerve: 1 } },
      { t: "Raise the money: sell the wine, call in old debts.", r: { front: 2, books: 1 }, a: { loyalty: 2, breeding: 1 } },
      { t: "Let them have him. He made his bed.", r: { muscle: 2, con: 1 }, a: { loyalty: -2, method: 1 } },
      { t: "Move the numbers about until the debt looks smaller.", r: { books: 3 }, a: { method: -1 } },
    ],
  },
  {
    q: "Which would you rather be trusted with?",
    options: [
      { t: "The keys to every lorry leaving the farm.", r: { road: 3 }, a: { breeding: -1, appetite: 1 } },
      { t: "The ledger nobody else is allowed to read.", r: { books: 3 }, a: { nerve: 1 } },
      { t: "A seat in the House of Lords.", r: { lords: 3 }, a: { breeding: 2, appetite: 1 } },
      { t: "The family's secrets.", r: { keeper: 3, cleaner: 1 }, a: { loyalty: 2 } },
    ],
  },
  {
    q: "A rival crew has made off with a shipment.",
    options: [
      { t: "Trace the van and have a word with the driver.", r: { road: 3, muscle: 1 }, a: { method: 1 } },
      { t: "Send people. Make it loud.", r: { muscle: 3 }, a: { method: 2, nerve: -2 } },
      { t: "Learn who sold them the route, and repay the favour quietly.", r: { boss: 2, con: 1 }, a: { nerve: 2, appetite: 1 } },
      { t: "Grow more. A setback is just a short season.", r: { grower: 3 }, a: { nerve: 1, appetite: -1 } },
    ],
  },
  {
    q: "What is in the boot of your car?",
    options: [
      { t: "Plastic sheeting, bleach and a spare set of overalls.", r: { cleaner: 3 }, a: { nerve: 2 } },
      { t: "Wellies, a waxed jacket and a brace of pheasants.", r: { keeper: 3 }, a: { breeding: 1 } },
      { t: "Several boxes of something that is not tomatoes.", r: { road: 2, grower: 1 }, a: { breeding: -1 } },
      { t: "No idea. The driver deals with the boot.", r: { front: 2, boss: 1 }, a: { breeding: 2, appetite: 1 } },
    ],
  },
  {
    q: "You are seated next to a bishop at dinner. You…",
    options: [
      { t: "Agree with everything she says, and note what she needs.", r: { lords: 3, fixer: 1 }, a: { method: -2, appetite: 1 } },
      { t: "Ask after her son, and offer to help with his little problem.", r: { fixer: 2, keeper: 1 }, a: { loyalty: 1, method: -1 } },
      { t: "Pocket a fork or two.", r: { con: 3 }, a: { loyalty: -2, breeding: -1 } },
      { t: "Tell her the history of the house. All of it.", r: { front: 3 }, a: { breeding: 2 } },
    ],
  },
  {
    q: "The farm workers have gone on strike.",
    options: [
      { t: "Hear them out. You know every one of them by name.", r: { grower: 2, keeper: 1 }, a: { loyalty: 2, method: -1 } },
      { t: "Take the ringleader somewhere private and explain the offer.", r: { boss: 2, muscle: 1 }, a: { method: 2, nerve: 1 } },
      { t: "Replace them by Monday. There are always more hands.", r: { road: 1, books: 1, boss: 1 }, a: { appetite: 1, loyalty: -1 } },
      { t: "Start a rumour that ends it without your name on it.", r: { con: 2, fixer: 1 }, a: { method: -2, nerve: 1 } },
    ],
  },
  {
    q: "How do you prefer to be paid?",
    options: [
      { t: "Cash, in a holdall, counted twice.", r: { road: 3, muscle: 1 }, a: { breeding: -2 } },
      { t: "Through an antiques shop, a boxing promotion and three companies abroad.", r: { books: 3 }, a: { nerve: 1 } },
      { t: "In favours. Money is vulgar; leverage lasts.", r: { lords: 2, fixer: 2 }, a: { breeding: 1, appetite: 1 } },
      { t: "With a share of the whole thing.", r: { boss: 3 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "Someone has seen too much.",
    options: [
      { t: "Arrange a new life for them, somewhere far away.", r: { fixer: 2, front: 1 }, a: { loyalty: 1, method: -1 } },
      { t: "Make sure nobody ever finds them.", r: { cleaner: 3 }, a: { nerve: 2, method: 1 } },
      { t: "Find out what they want, and give them slightly less.", r: { lords: 2, con: 1 }, a: { method: -2 } },
      { t: "Pass them to someone who owes you a favour.", r: { boss: 2, muscle: 1 }, a: { loyalty: -1, nerve: 1 } },
    ],
  },
  {
    q: "Which would you be proudest of?",
    options: [
      { t: "A record harvest.", r: { grower: 3 }, a: { appetite: -1 } },
      { t: "A family name that has lasted five hundred years.", r: { front: 2, keeper: 1 }, a: { breeding: 2, loyalty: 1 } },
      { t: "A deal both sides think they won.", r: { fixer: 3 }, a: { method: -2 } },
      { t: "Never once being caught.", r: { con: 2, cleaner: 1 }, a: { nerve: 1, loyalty: -1 } },
    ],
  },
  {
    q: "Under pressure, you…",
    options: [
      { t: "Go very quiet and very polite.", r: { boss: 1, front: 1, cleaner: 1 }, a: { nerve: 2 } },
      { t: "Reach for the nearest weapon.", r: { muscle: 3, keeper: 1 }, a: { nerve: -2, method: 2 } },
      { t: "Make a phone call.", r: { lords: 2, fixer: 1 }, a: { method: -1 } },
      { t: "Check the numbers again.", r: { books: 2, grower: 1 }, a: { nerve: 1, method: -1 } },
    ],
  },
];

const cameo = (id) => {
  const c = card[id];
  return `<li><div class="mini">${portrait(c, FACTIONS[c.faction].color)}</div>${c.name}</li>`;
};

export default {
  kicker: "Halstead &amp; Associates",
  title: "Your Place<br><span>in the Firm</span>",
  tagline: "Which part of the operation would you run?",
  resultKicker: "You would run",
  sharedKicker: "They would run",
  axes: AXES,
  questions: QUESTIONS,
  results: ROLES,
  hero: () => insignia({ emblem: "king", tint: "#6b1d22", motto: "THE FIRM" }),
  art: (r, small) => insignia({ emblem: r.emblem, tint: r.tint, motto: small ? "" : r.motto }),
  seal: () => "G",
  extra: (r) => `<section><h3>Who does it on screen</h3><ul class="members">${r.crew.map(cameo).join("")}${r.also ? `<li class="also">${r.also}</li>` : ""}</ul></section>`,
  shareText: (r) => `My place in the firm: ${r.name}.`,
};
