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
      { t: "On a peg, with a borrowed gun and a good eye.", r: { lords: 2, front: 1 }, a: { breeding: 2 } },
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
      { t: "Sell the land.", r: { keeper: 2, front: 1 }, a: { breeding: 2, loyalty: 1 } },
      { t: "Get caught.", r: { con: 2, road: 1 }, a: { loyalty: -1 } },
      { t: "Forget a favour, given or owed.", r: { fixer: 2, lords: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "A van has broken down in the lane by the estate, and it is not full of cabbages.",
    options: [
      { t: "Tow it into the tithe barn before the vicar drives past.", r: { road: 2, keeper: 1 }, a: { nerve: 1 } },
      { t: "Ring a man with a flatbed and no memory.", r: { cleaner: 2, fixer: 1 }, a: { nerve: 1 } },
      { t: "Stand in the lane and wave the traffic round, smiling.", r: { con: 2, front: 1 }, a: { method: -2 } },
      { t: "Tell the farm to slow the harvest until it is sorted.", r: { grower: 2, road: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "Which room at Halstead would you keep the only key to?",
    options: [
      { t: "The gun room.", r: { keeper: 2, muscle: 1 }, a: { method: 1 } },
      { t: "The muniment room, with the deeds and the old letters.", r: { books: 2, front: 1 }, a: { breeding: 1 } },
      { t: "The cellar, and whatever is under it.", r: { grower: 2, road: 1 }, a: { appetite: -1 } },
      { t: "The study. Nobody else gets one.", r: { boss: 2, lords: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "Bobby Glass would like a word. It will be a prison visit.",
    options: [
      { t: "Bring something from outside that he will like.", r: { fixer: 2, lords: 1 }, a: { method: -2 } },
      { t: "Bring the figures, and know them by heart.", r: { road: 2, books: 1 }, a: { nerve: 1 } },
      { t: "Say as little as possible and agree to nothing.", r: { cleaner: 2, lords: 1 }, a: { nerve: 2 } },
      { t: "Walk in as though you had called the meeting.", r: { boss: 2, muscle: 1 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "The Dowager Duchess asks why there are so many lorries on the estate.",
    options: [
      { t: "Explain the agricultural grants, at length.", r: { books: 2, lords: 1 }, a: { method: -1 } },
      { t: "Tell her a charming story about mushrooms.", r: { grower: 2, con: 1 }, a: { loyalty: -1 } },
      { t: "Send the lorries round through the woods from now on.", r: { road: 2, keeper: 1 }, a: { nerve: 1 } },
      { t: "Tell her the truth. She will have guessed.", r: { front: 2, keeper: 1 }, a: { loyalty: 2 } },
    ],
  },
  {
    q: "A guest at the hunt ball has wandered towards the old stables, where the farm's vents come up.",
    options: [
      { t: "Intercept them with two glasses and a story about the drains.", r: { con: 2, front: 1 }, a: { method: -1 } },
      { t: "Follow at a distance, with a shotgun broken over one arm.", r: { keeper: 2, muscle: 1 }, a: { method: 1 } },
      { t: "Have their car brought round and their coat fetched.", r: { cleaner: 2, front: 1 }, a: { nerve: 2 } },
      { t: "Let them look, and watch their face.", r: { boss: 2, lords: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "The farm workers want more money, and Ned is doing the talking.",
    options: [
      { t: "Hear them out. They know the crop better than anyone.", r: { grower: 2, keeper: 1 }, a: { loyalty: 2 } },
      { t: "Run the numbers before saying a word.", r: { books: 2, road: 1 }, a: { nerve: 1 } },
      { t: "Take Ned somewhere private and explain the offer.", r: { muscle: 2, boss: 1 }, a: { method: 2 } },
      { t: "Give a little, and make sure everyone hears about it.", r: { lords: 2, fixer: 1 }, a: { method: -2 } },
    ],
  },
  {
    q: "The Belgians are asking for a better price.",
    options: [
      { t: "Remind them, warmly, that the Wards have hundreds of cousins.", r: { muscle: 2, road: 1 }, a: { method: 1 } },
      { t: "Agree, and quietly find someone cheaper.", r: { books: 2, fixer: 1 }, a: { loyalty: -1 } },
      { t: "Invite them to dinner and seat them beside the Duke.", r: { lords: 2, front: 1 }, a: { breeding: 1 } },
      { t: "Find out who is paying them to ask.", r: { boss: 2, muscle: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "Something has happened in the drawing room that Felix ought to see.",
    options: [
      { t: "Roll up the Aubusson before anyone treads on it.", r: { cleaner: 2, keeper: 1 }, a: { nerve: 2 } },
      { t: "Lock the door and tell the guests it is dry rot.", r: { con: 2, front: 1 }, a: { method: -1 } },
      { t: "Ring Felix, then ring someone to ring Felix.", r: { fixer: 2, cleaner: 1 }, a: { method: -1 } },
      { t: "Ask who did it, and why it had to be on that rug.", r: { boss: 2, muscle: 1 }, a: { method: 1 } },
    ],
  },
  {
    q: "A coach party arrives for the open day while the harvest is in.",
    options: [
      { t: "Lead the tour personally, and skip the east wing.", r: { front: 2, con: 1 }, a: { breeding: 1 } },
      { t: "Close the back drive and reroute the lorries.", r: { road: 2, keeper: 1 }, a: { nerve: 1 } },
      { t: "Turn the extractor fans up and pray for a westerly.", r: { grower: 2, cleaner: 1 }, a: { nerve: -1 } },
      { t: "Charge them double in the tea room.", r: { road: 2, books: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "Lord Hawthorne has had too much port and is starting to talk.",
    options: [
      { t: "Steer him into the library and lock the door.", r: { cleaner: 2, keeper: 1 }, a: { method: 1 } },
      { t: "Agree loudly with everything, so nobody hears the rest.", r: { con: 2, lords: 1 }, a: { method: -1 } },
      { t: "Make a note of what he says, for later.", r: { lords: 2, books: 1 }, a: { nerve: 1 } },
      { t: "Send for his driver and a bucket.", r: { road: 2, muscle: 1 }, a: { breeding: 1 } },
    ],
  },
  {
    q: "A traveller family has made off with the farm's generators.",
    options: [
      { t: "Go and see them, and take a bottle.", r: { fixer: 2, front: 1 }, a: { method: -2 } },
      { t: "Go and see them, and take the dogs.", r: { muscle: 2, keeper: 1 }, a: { method: 2 } },
      { t: "Buy new generators and send them the invoice.", r: { books: 2, grower: 1 }, a: { breeding: 1 } },
      { t: "Offer them work moving the product instead.", r: { boss: 2, road: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "You are meeting John Dixon, who quotes Scripture. You bring…",
    options: [
      { t: "A Bible of my own, and a better verse.", r: { lords: 2, con: 1 }, a: { method: -1 } },
      { t: "Two men who wait in the car.", r: { muscle: 2, road: 1 }, a: { method: 1 } },
      { t: "The figures, to the penny.", r: { books: 2, cleaner: 1 }, a: { nerve: 1 } },
      { t: "An apology, and a cheque.", r: { front: 2, fixer: 1 }, a: { loyalty: 1 } },
    ],
  },
  {
    q: "The Bishop of Sussex is coming to tea.",
    options: [
      { t: "Hide the decanters.", r: { cleaner: 2, keeper: 1 }, a: { nerve: -1 } },
      { t: "Get out the good silver, and say a quiet word about the bill.", r: { lords: 2, fixer: 1 }, a: { appetite: 1 } },
      { t: "Ask after her son, who owes money to an Irishman.", r: { fixer: 2, con: 1 }, a: { method: -1 } },
      { t: "Have the gamekeeper show her the falcons.", r: { keeper: 2, front: 1 }, a: { breeding: 1 } },
    ],
  },
  {
    q: "The antiques shop is the front. What do you actually sell?",
    options: [
      { t: "Very little. That is rather the point.", r: { books: 2, con: 1 }, a: { nerve: 1 } },
      { t: "Georgian silver, at a fair price, to people who do not ask.", r: { con: 2, fixer: 1 }, a: { method: -1 } },
      { t: "Furniture my family used to own.", r: { front: 2, lords: 1 }, a: { breeding: 2 } },
      { t: "Whatever came in the van last night.", r: { road: 2, muscle: 1 }, a: { breeding: -2 } },
    ],
  },
  {
    q: "An Italian fixer sells you a Botticelli. Something about it is not quite right.",
    options: [
      { t: "Pay, smile, and have it looked at quietly in London.", r: { books: 2, front: 1 }, a: { nerve: 1 } },
      { t: "Ask to see where it hung before.", r: { con: 2, fixer: 1 }, a: { method: -1 } },
      { t: "Introduce him to a man with a tiger.", r: { boss: 2, muscle: 1 }, a: { method: 2 } },
      { t: "Hang it anyway. Nobody here can tell.", r: { grower: 2, front: 1 }, a: { appetite: -1 } },
    ],
  },
  {
    q: "The Lords votes tomorrow, and you are one peer short.",
    options: [
      { t: "Wake an elderly baron and send a car.", r: { lords: 2, road: 1 }, a: { breeding: 1 } },
      { t: "Find out what the waverer wants, and get it by breakfast.", r: { fixer: 2, lords: 1 }, a: { appetite: 1 } },
      { t: "Explain the arithmetic to the waverer's wife.", r: { lords: 2, con: 1 }, a: { method: -1 } },
      { t: "Make sure one of theirs does not turn up either.", r: { cleaner: 2, muscle: 1 }, a: { method: 1 } },
    ],
  },
  {
    q: "Something must be gone by morning, and the pigs are not an option.",
    options: [
      { t: "Quicklime, and the far end of the walled garden.", r: { grower: 2, cleaner: 1 }, a: { nerve: 1 } },
      { t: "A crematorium owner who owes a favour.", r: { fixer: 2, cleaner: 1 }, a: { method: -1 } },
      { t: "A long drive and a deep reservoir.", r: { muscle: 2, road: 1 }, a: { nerve: 1 } },
      { t: "Ring the cleaner, and go to bed.", r: { boss: 2, cleaner: 1 }, a: { nerve: 2 } },
    ],
  },
  {
    q: "What is the correct number of bedrooms?",
    options: [
      { t: "Enough for the family, the guests and the staff, in that order.", r: { keeper: 2, front: 1 }, a: { loyalty: 1 } },
      { t: "Forty-two. I have counted the radiators.", r: { grower: 2, books: 1 }, a: { nerve: 1 } },
      { t: "One more than the neighbours.", r: { boss: 2, con: 1 }, a: { appetite: 2 } },
      { t: "As many as the cellars underneath can carry.", r: { grower: 2, road: 1 }, a: { appetite: 1 } },
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
