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
// About a third are set in the show's world; the rest are oblique, so the link to a role shows only in hindsight.
const QUESTIONS = [
  {
    q: "A shooting weekend at Halstead. Where are you when the first drive starts?",
    options: [
      { t: "On a peg, with a borrowed gun and a good eye.", r: { front: 2, lords: 1 }, a: { breeding: 2 } },
      { t: "Out with the beaters, who hear everything.", r: { keeper: 2, grower: 1 }, a: { breeding: -1 } },
      { t: "Back at the house, going through the guests' coats.", r: { con: 2, cleaner: 1 }, a: { loyalty: -1 } },
      { t: "Standing behind the guns, keeping count.", r: { muscle: 2, boss: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "The butler says something faintly insolent.",
    options: [
      { t: "Say nothing, and remember it at Christmas.", r: { boss: 2, books: 1 }, a: { nerve: 2 } },
      { t: "Laugh. He has earned it, and he knows where everything is.", r: { keeper: 2, front: 1 }, a: { loyalty: 1 } },
      { t: "Find out what he knows that makes him so confident.", r: { fixer: 2, cleaner: 1 }, a: { method: -1 } },
      { t: "Answer in kind, only sharper.", r: { muscle: 2, con: 1 }, a: { breeding: -1 } },
    ],
  },
  {
    q: "Your father's will leaves you the estate, and its debts with it.",
    options: [
      { t: "Sell the wine and the paintings, and keep every acre.", r: { front: 2, grower: 1 }, a: { breeding: 1, loyalty: 1 } },
      { t: "Let the cellars to someone who asks no questions.", r: { grower: 2, road: 1 }, a: { appetite: 1 } },
      { t: "Sit with the ledgers until the numbers behave.", r: { books: 2, grower: 1 }, a: { nerve: 1 } },
      { t: "Find out who holds the debt, and what they would take instead.", r: { fixer: 2, road: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "What should a gentleman never do?",
    options: [
      { t: "Raise his voice.", r: { cleaner: 2, boss: 1 }, a: { nerve: 2 } },
      { t: "Sell the land.", r: { front: 2, keeper: 1 }, a: { breeding: 2, loyalty: 1 } },
      { t: "Get caught.", r: { con: 2, road: 1 }, a: { loyalty: -1 } },
      { t: "Forget a favour, given or owed.", r: { fixer: 2, lords: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "A van has broken down in a lane by the estate, and it is not full of cabbages.",
    options: [
      { t: "Tow it into the barn before the vicar drives past.", r: { road: 2, keeper: 1 }, a: { nerve: 1 } },
      { t: "Ring a man with a flatbed and no memory.", r: { fixer: 2, cleaner: 1 }, a: { nerve: 1 } },
      { t: "Stand in the lane and wave the traffic round, smiling.", r: { con: 2, front: 1 }, a: { method: -2 } },
      { t: "Tell the farm to slow the harvest until it is sorted.", r: { grower: 2, road: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "Which room in a country house would you keep the key to?",
    options: [
      { t: "The gun room.", r: { keeper: 2, muscle: 1 }, a: { method: 1 } },
      { t: "The muniment room, with the deeds and the old letters.", r: { books: 2, front: 1 }, a: { breeding: 1 } },
      { t: "The cellar.", r: { grower: 2, road: 1 }, a: { appetite: -1 } },
      { t: "The study. Nobody else gets one.", r: { boss: 2, lords: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "A neighbour moves the boundary fence two yards onto your land.",
    options: [
      { t: "Move it back at night, and two yards further.", r: { con: 2, muscle: 1 }, a: { method: 1, loyalty: -1 } },
      { t: "Write to them, then their solicitor, then their bishop.", r: { lords: 2, books: 1 }, a: { method: -1 } },
      { t: "Walk over with a dog and a shotgun to discuss it.", r: { keeper: 2, muscle: 1 }, a: { method: 2 } },
      { t: "Buy their land.", r: { boss: 2, fixer: 1 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "Bobby Glass would like a word. It will be a prison visit.",
    options: [
      { t: "Bring something from outside that he will like.", r: { fixer: 2, front: 1 }, a: { method: -2 } },
      { t: "Bring the figures, and know them by heart.", r: { road: 2, books: 1 }, a: { nerve: 1 } },
      { t: "Say as little as possible and agree to nothing.", r: { cleaner: 2, lords: 1 }, a: { nerve: 2 } },
      { t: "Walk in as though you had called the meeting.", r: { boss: 2, con: 1 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "Someone you love is in trouble with dangerous people.",
    options: [
      { t: "Go and fetch them myself.", r: { muscle: 2, keeper: 1 }, a: { loyalty: 2, method: 2 } },
      { t: "Pay what is owed, and worry about the rest later.", r: { front: 2, books: 1 }, a: { loyalty: 2 } },
      { t: "Find out who those people answer to.", r: { fixer: 2, road: 1 }, a: { method: -1 } },
      { t: "Make the whole thing quietly go away.", r: { cleaner: 2, con: 1 }, a: { nerve: 2 } },
    ],
  },
  {
    q: "Good manners, to you, means…",
    options: [
      { t: "Making a guest feel they are the only one in the room.", r: { front: 2, con: 1 }, a: { method: -2 } },
      { t: "Never making anyone ask twice.", r: { road: 2, cleaner: 1 }, a: { nerve: 1 } },
      { t: "Telling someone exactly once before doing something about it.", r: { muscle: 2, keeper: 1 }, a: { method: 2 } },
      { t: "A proper thank-you letter, by return of post.", r: { lords: 2, keeper: 1 }, a: { breeding: 1 } },
    ],
  },
  {
    q: "The Dowager Duchess asks why there are so many lorries on the estate.",
    options: [
      { t: "Explain the agricultural grants, at length.", r: { books: 2, lords: 1 }, a: { method: -1 } },
      { t: "Tell her a charming story about mushrooms.", r: { grower: 2, con: 1 }, a: { loyalty: -1 } },
      { t: "Tell her nothing, and send the lorries round through the woods.", r: { road: 2, keeper: 1 }, a: { nerve: 1 } },
      { t: "Tell her the truth. She will have guessed.", r: { front: 2, keeper: 1 }, a: { loyalty: 2 } },
    ],
  },
  {
    q: "A neighbour's dog keeps digging up your garden.",
    options: [
      { t: "Return the dog, with a firm word and a bag of what it dug up.", r: { keeper: 2, muscle: 1 }, a: { method: 1 } },
      { t: "Befriend the dog. Now it digs up their garden.", r: { con: 2, grower: 1 }, a: { loyalty: -1 } },
      { t: "Write a polite letter, then a less polite one, then copy in the council.", r: { lords: 2, books: 1 }, a: { method: -1 } },
      { t: "Plant something it cannot stand.", r: { grower: 2, cleaner: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "You are asked to look after a large sum of cash for a week.",
    options: [
      { t: "Count it, note the serial numbers, and sleep with it under the bed.", r: { books: 2, keeper: 1 }, a: { nerve: -1 } },
      { t: "Put it somewhere nobody would think to look.", r: { cleaner: 2, con: 1 }, a: { nerve: 1 } },
      { t: "Put it to work for the week, and keep what it earns.", r: { boss: 2, fixer: 1 }, a: { appetite: 2 } },
      { t: "Keep it moving. Money that sits still gets noticed.", r: { road: 2, cleaner: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "What did your family leave you that nobody can sell?",
    options: [
      { t: "A name that opens doors.", r: { front: 2, lords: 1 }, a: { breeding: 2 } },
      { t: "A temper.", r: { muscle: 2, con: 1 }, a: { nerve: -2 } },
      { t: "Green fingers.", r: { grower: 2, keeper: 1 }, a: { appetite: -1 } },
      { t: "A long memory.", r: { boss: 2, cleaner: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "You are stuck in a lift with a well-known politician.",
    options: [
      { t: "Pitch them an idea.", r: { lords: 2, fixer: 1 }, a: { appetite: 1 } },
      { t: "Make them laugh, and leave with their number.", r: { con: 2, front: 1 }, a: { method: -2 } },
      { t: "Prise the doors open.", r: { muscle: 2, road: 1 }, a: { method: 1, nerve: -1 } },
      { t: "Say nothing. They will remember the one person who didn't ask for anything.", r: { boss: 2, cleaner: 1 }, a: { nerve: 2 } },
    ],
  },
  {
    q: "How do you feel about risk?",
    options: [
      { t: "Measured, written down and reviewed every quarter.", r: { books: 2, lords: 1 }, a: { nerve: 1, appetite: -1 } },
      { t: "I am the risk.", r: { muscle: 2, con: 1 }, a: { nerve: -2 } },
      { t: "Other people take risks. I take a percentage.", r: { boss: 2, fixer: 1 }, a: { appetite: 2 } },
      { t: "Weather, pests and bad luck. Plan for all three.", r: { grower: 2, keeper: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "Which would you hate to lose?",
    options: [
      { t: "My name.", r: { front: 2, lords: 1 }, a: { breeding: 1, loyalty: 1 } },
      { t: "My nerve.", r: { cleaner: 2, muscle: 1 }, a: { nerve: 1 } },
      { t: "My address book.", r: { fixer: 2, road: 1 }, a: { method: -1 } },
      { t: "My patience.", r: { grower: 2, boss: 1 }, a: { nerve: 1, appetite: -1 } },
    ],
  },
  {
    q: "At a wedding, you are…",
    options: [
      { t: "Giving the speech.", r: { lords: 2, front: 1 }, a: { breeding: 1 } },
      { t: "Working the room.", r: { fixer: 2, con: 1 }, a: { method: -1 } },
      { t: "Keeping an eye on the uncle who has had too much.", r: { keeper: 2, muscle: 1 }, a: { loyalty: 1 } },
      { t: "Making sure the cars, the cake and the band all turn up.", r: { road: 2, books: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "A shipment is late, and the buyer is getting nervous.",
    options: [
      { t: "Buy time on the phone, with charm.", r: { fixer: 2, con: 1 }, a: { method: -2 } },
      { t: "Get in the van and finish the job myself.", r: { road: 2, muscle: 1 }, a: { method: 1 } },
      { t: "Remind the buyer, gently, who they are dealing with.", r: { boss: 2, muscle: 1 }, a: { method: 1, nerve: 1 } },
      { t: "Go through the paperwork to see whose fault it is.", r: { books: 2, lords: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "A guest at the estate wanders somewhere they should not.",
    options: [
      { t: "Steer them back with a long story about the drains.", r: { front: 2, con: 1 }, a: { breeding: 1, method: -1 } },
      { t: "Follow them quietly, with a shotgun under one arm.", r: { keeper: 2, muscle: 1 }, a: { method: 1 } },
      { t: "Have their car brought round and their coat fetched.", r: { cleaner: 2, front: 1 }, a: { nerve: 2 } },
      { t: "Let them look, and watch how they react.", r: { boss: 2, lords: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "The farm workers want more money.",
    options: [
      { t: "Hear them out. They know the crop better than anyone.", r: { grower: 2, keeper: 1 }, a: { loyalty: 2 } },
      { t: "Run the numbers before saying a word.", r: { books: 2, grower: 1 }, a: { nerve: 1 } },
      { t: "Find the ringleader, and have a private conversation.", r: { muscle: 2, boss: 1 }, a: { method: 2 } },
      { t: "Give a little, and make sure everyone hears about it.", r: { lords: 2, fixer: 1 }, a: { method: -2 } },
    ],
  },
  {
    q: "Something has happened that cannot be explained to the police.",
    options: [
      { t: "A quiet hour, and a lot of bleach.", r: { cleaner: 2, road: 1 }, a: { nerve: 2 } },
      { t: "A story so dull nobody asks twice.", r: { cleaner: 2, con: 1 }, a: { method: -1 } },
      { t: "A call to someone senior who owes me.", r: { lords: 2, fixer: 1 }, a: { appetite: 1 } },
      { t: "It goes in the books as something else entirely.", r: { books: 2, cleaner: 1 }, a: { nerve: 1 } },
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
