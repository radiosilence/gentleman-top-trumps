import { CARDS, FACTIONS } from "../shared/cards.js";
import { portrait } from "../shared/portraits.js";
import { AXES } from "../shared/axes.js";

const card = Object.fromEntries(CARDS.map((c) => [c.id, c]));

// Names and silhouettes come from the deck in shared/cards.js; only the copy lives here.
const COPY = {
  eddie: {
    sub: "The reluctant duke",
    text: "Former soldier, second son, and the one his father trusted with Halstead. You prefer to settle a problem quietly and politely, and you are entirely capable of settling it the other way. Like Eddie, you may start out wanting no part of the business and end up wanting all of it.",
  },
  susie: {
    sub: "The heir who runs it",
    text: "Clever, controlled and always two moves ahead, you could run an empire from behind an antiques dealership without raising your voice. Susie manages her father's business, his enemies and Eddie, often all at once, and she does not forgive being underestimated.",
  },
  bobby: {
    sub: "The king behind bars",
    text: "You play the long game, and you play it from a comfortable chair. Bobby runs a cannabis empire from prison, staged his own retirement to test his heirs, and takes advice from the spirit world as seriously as loyalty. Disappoint him and you may wake up somewhere off an A-road outside Basingstoke.",
  },
  freddy: {
    sub: "The elder brother",
    text: "Enthusiastic, impulsive and rarely sensible, you lead with your heart and occasionally with a pistol. Freddy was passed over for the title, ran up an £8 million debt and shot the man who came to collect it. In rehab he found God, which did nothing for his judgement.",
  },
  sabrina: {
    sub: "The dowager duchess",
    text: "Gracious, composed and very hard to shock, you believe standards matter even when the family's are slipping. Lady Sabrina holds the Hornimans together with good manners and an old secret of her own, and she knows a great deal more than she lets on.",
  },
  geoff: {
    sub: "The gamekeeper",
    text: "Loyal, practical and handy with a shotgun, you would rather be in the woods than the drawing room. Geoff has kept Halstead for decades and guards the family as his own, with good reason: Charly is his daughter. When mercenaries came for the house, he was ready for them.",
  },
  charly: {
    sub: "The younger sister",
    text: "Warm, stubborn and braver than anyone expects, you would simply like the family to be honest with you. Charly came home from university pregnant and learned who her father really was. By series two she was fighting for her son in the woods of Halstead.",
  },
  nanny: {
    sub: "The equerry",
    text: "Disciplined, decent and calm under fire, you notice everything and say little. A former soldier serving as equerry to the King, Nanny married Charly and found that the family business was not what he had been told. When the house was attacked, he stood his ground.",
  },
  jimmy: {
    sub: "The grower",
    text: "Brilliant at what you do and a little too trusting outside it, you would be happiest left alone with your plants. Jimmy runs the farm under Halstead and grows superb product, but he once told a beautiful stranger far more than he should have.",
  },
  jack: {
    sub: "The boxer",
    text: "Physical, direct and more loyal than people realise, you prefer a straight fight to a clever one. Susie's younger brother boxes for a living, was put in hospital by a bout fixed against him, and later helped get his sister out of Peru.",
  },
  felix: {
    sub: "The cleaner",
    text: "Unflappable, methodical and quietly frightening, you solve problems so that they stay solved. Felix makes bodies disappear for Susie and treats it as a trade like any other. You never raise your voice, because you never need to.",
  },
  dixon: {
    sub: "The Gospel",
    text: "Devout, theatrical and dangerous, you mix scripture with menace. The head of the Liverpool family never stopped looking for whoever killed his brother, and took Freddy under his wing in rehab. Faith is a great comfort to you; to the people who owe you money, it is none at all.",
  },
  stanley: {
    sub: "The billionaire",
    text: "Cultured, patient and expensive, you buy what you want and wait for what you cannot. Stanley wanted Halstead and the Glass empire, and ran crystal meth behind the wine and the philanthropy. In series two he became Eddie's lender and, in his way, his tutor.",
  },
  gabrielle: {
    sub: "The operative",
    text: "Charming, patient and never quite who you appear to be, you get what you want by being liked. Gabrielle seduced Jimmy for the distribution details while working for Stanley Johnston throughout, and later helped Jack rescue Susie in Peru.",
  },
  marco: {
    sub: "The capo",
    text: "Old-fashioned, theatrical and utterly ruthless, you believe in honour, hospitality and making examples. Marco fed a thieving fixer to a tiger and then offered Eddie protection and a partnership. You would be a magnificent host and a terrible enemy.",
  },
  bella: {
    sub: "The countess",
    text: "Elegant, sharp and equally at home in high society and beneath it, you see through people quickly. The Countess of Parma knows falconry, knows Marco Moretti's business and took Cico's place in it. Eddie fell for her and proposed.",
  },
};

const RESULTS = Object.entries(COPY).map(([id, c]) => ({ id, name: card[id].name, ...c }));

const QUESTIONS = [
  {
    q: "The old Duke has left everything to his second son. Your reaction?",
    options: [
      { t: "Delighted. He was always the sensible one.", r: { sabrina: 2, charly: 1 }, a: { loyalty: 1 } },
      { t: "Furious, and I intend to stay furious.", r: { freddy: 2, jack: 1 }, a: { nerve: -2 } },
      { t: "Interested. A new duke is a new opportunity.", r: { susie: 2, marco: 1 }, a: { appetite: 2 } },
      { t: "Wary. A change at the top brings visitors.", r: { nanny: 2, jimmy: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "The Dowager Duchess invites you to lunch at Halstead.",
    options: [
      { t: "Arrive early, with flowers from my own garden.", r: { bella: 2, susie: 1 }, a: { breeding: 1 } },
      { t: "Arrive late, with excuses.", r: { jimmy: 2, freddy: 1 }, a: { nerve: -1 } },
      { t: "Arrive exactly on time, and watch everyone.", r: { susie: 2, gabrielle: 1 }, a: { nerve: 2 } },
      { t: "Ask who else is coming before I accept.", r: { stanley: 2, sabrina: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "Armed men are in the woods around the house.",
    options: [
      { t: "Get the children out.", r: { nanny: 2, charly: 1 }, a: { loyalty: 2 } },
      { t: "Hold the woods.", r: { geoff: 2, jack: 1 }, a: { method: 1, loyalty: 1 } },
      { t: "Find out who sent them, and pay that person a visit.", r: { eddie: 2, bobby: 1 }, a: { method: 2, appetite: 1 } },
      { t: "Retreat to the cellar with the good claret.", r: { jimmy: 2, stanley: 1 }, a: { nerve: -1 } },
    ],
  },
  {
    q: "An Italian count invites you to his villa for the weekend.",
    options: [
      { t: "Accept, and learn the family tree on the flight.", r: { bella: 2, eddie: 1 }, a: { breeding: 1 } },
      { t: "Accept, and bring my own security.", r: { felix: 2, dixon: 1 }, a: { nerve: 1 } },
      { t: "Decline. I do not trust men who keep tigers.", r: { charly: 2, geoff: 1 }, a: { appetite: -1 } },
      { t: "Accept, and see what might be for sale.", r: { marco: 2, stanley: 1 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "The staff at Halstead would describe you as…",
    options: [
      { t: "Fair, if exacting.", r: { sabrina: 2, eddie: 1 }, a: { breeding: 1 } },
      { t: "One of them, really.", r: { jimmy: 2, felix: 1 }, a: { breeding: -2 } },
      { t: "Generous, and alarming.", r: { marco: 2, bobby: 1 }, a: { method: 1 } },
      { t: "Who?", r: { bella: 2, stanley: 1 }, a: { breeding: 2 } },
    ],
  },
  {
    q: "What is in the pocket of your waxed jacket?",
    options: [
      { t: "Cartridges, and a biscuit for the dog.", r: { geoff: 2, eddie: 1 }, a: { breeding: 1 } },
      { t: "A rosary, or something very like one.", r: { dixon: 2, marco: 1 }, a: { method: -1 } },
      { t: "A clean handkerchief and a spare pair of gloves.", r: { felix: 2, sabrina: 1 }, a: { nerve: 2 } },
      { t: "Someone else's phone.", r: { gabrielle: 2, susie: 1 }, a: { loyalty: -1 } },
    ],
  },
  {
    q: "Tarquin is being christened. What is your contribution?",
    options: [
      { t: "Standing as godparent, and meaning every word.", r: { geoff: 2, nanny: 1 }, a: { loyalty: 2 } },
      { t: "An engraved silver mug, with the wrong date on it.", r: { jack: 2, freddy: 1 }, a: { nerve: -1 } },
      { t: "A quiet word with the vicar about the seating.", r: { sabrina: 2, dixon: 1 }, a: { breeding: 1 } },
      { t: "A trust fund, held somewhere sunny.", r: { stanley: 2, bobby: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "How do you arrive at a stately home?",
    options: [
      { t: "By helicopter, on the croquet lawn.", r: { stanley: 2, marco: 1 }, a: { appetite: 2 } },
      { t: "By the tradesmen's entrance, out of habit.", r: { jimmy: 2, felix: 1 }, a: { breeding: -2 } },
      { t: "In a Land Rover older than I am.", r: { geoff: 2, charly: 1 }, a: { breeding: 1 } },
      { t: "On foot from the station, in good shoes.", r: { nanny: 2, dixon: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "A fight is fixed against someone you love.",
    options: [
      { t: "Get in the ring myself next time.", r: { jack: 2, dixon: 1 }, a: { method: 2, nerve: -1 } },
      { t: "Find the promoter, and have a long talk.", r: { eddie: 2, bobby: 1 }, a: { method: 1 } },
      { t: "Arrange a fix of my own.", r: { gabrielle: 2, susie: 1 }, a: { method: -1 } },
      { t: "Sit by the hospital bed and pray.", r: { dixon: 2, charly: 1 }, a: { loyalty: 2 } },
    ],
  },
  {
    q: "What does a falcon teach you?",
    options: [
      { t: "Patience.", r: { bella: 2, nanny: 1 }, a: { nerve: 1 } },
      { t: "That everything comes back to whoever feeds it.", r: { bobby: 2, marco: 1 }, a: { appetite: 1 } },
      { t: "Never to let something valuable out of your sight.", r: { susie: 2, stanley: 1 }, a: { nerve: 1 } },
      { t: "Nothing. I would lose it on the first day.", r: { charly: 2, freddy: 1 }, a: { nerve: -1 } },
    ],
  },
  {
    q: "You find yourself in rehab. How do you spend it?",
    options: [
      { t: "Finding God, loudly.", r: { freddy: 2, dixon: 1 }, a: { nerve: -1 } },
      { t: "Running a small business from the payphone.", r: { bobby: 2, gabrielle: 1 }, a: { appetite: 2 } },
      { t: "Planning my escape by the second week.", r: { jack: 2, charly: 1 }, a: { nerve: -1 } },
      { t: "Reading the classics and judging the curtains.", r: { sabrina: 2, bella: 1 }, a: { breeding: 2 } },
    ],
  },
  {
    q: "Choose a bottle.",
    options: [
      { t: "A 1961 claret I won at cards.", r: { stanley: 2, eddie: 1 }, a: { breeding: 1 } },
      { t: "A Barolo from my godfather's vineyard.", r: { bella: 2, marco: 1 }, a: { breeding: 1 } },
      { t: "Whatever is in the decanter. All of it.", r: { jack: 2, freddy: 1 }, a: { nerve: -1 } },
      { t: "Tea, from a flask, in a pigeon hide.", r: { geoff: 2, felix: 1 }, a: { appetite: -1 } },
    ],
  },
  {
    q: "The estate needs a new dog.",
    options: [
      { t: "A pair of black Labradors named after battles.", r: { eddie: 2, geoff: 1 }, a: { breeding: 1 } },
      { t: "A Dobermann that only obeys Italian.", r: { marco: 2, bella: 1 }, a: { method: 1 } },
      { t: "A three-legged rescue that bites the postman.", r: { charly: 2, jack: 1 }, a: { loyalty: 1 } },
      { t: "No dog. Dogs bark at the wrong time.", r: { gabrielle: 2, felix: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "The hunt ball. Where will we find you?",
    options: [
      { t: "Dancing with whoever owns the most land.", r: { gabrielle: 2, bella: 1 }, a: { appetite: 1 } },
      { t: "Outside with the drivers and a cigarette.", r: { jimmy: 2, jack: 1 }, a: { breeding: -1 } },
      { t: "Counting the silver.", r: { felix: 2, sabrina: 1 }, a: { nerve: 1 } },
      { t: "Behind the marquee, explaining something to a policeman.", r: { freddy: 2, jimmy: 1 }, a: { nerve: -2 } },
    ],
  },
  {
    q: "Your family motto would be…",
    options: [
      { t: "Nemo me impune lacessit.", r: { bobby: 2, marco: 1 }, a: { method: 1 } },
      { t: "Steady.", r: { nanny: 2, geoff: 1 }, a: { nerve: 2 } },
      { t: "Ask Mother.", r: { charly: 2, freddy: 1 }, a: { loyalty: 1 } },
      { t: "Everything has a price.", r: { susie: 2, stanley: 1 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "Stanley Johnston offers to buy your share of the business.",
    options: [
      { t: "Laugh, then have him followed.", r: { bobby: 2, felix: 1 }, a: { nerve: 1 } },
      { t: "Ask him exactly how much.", r: { gabrielle: 2, marco: 1 }, a: { loyalty: -2 } },
      { t: "Decline. Some things are not for sale.", r: { eddie: 2, sabrina: 1 }, a: { loyalty: 2 } },
      { t: "Quote Proverbs at him until he leaves.", r: { dixon: 2, nanny: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "Tommy Dixon is dead on the drawing-room floor. Your first thought?",
    options: [
      { t: "I know a man.", r: { susie: 2, eddie: 1 }, a: { nerve: 1 } },
      { t: "I am the man.", r: { felix: 2, bobby: 1 }, a: { nerve: 2, method: 1 } },
      { t: "Oh God. Is he definitely dead?", r: { freddy: 2, jimmy: 1 }, a: { nerve: -2 } },
      { t: "His brother will want to know who.", r: { dixon: 2, nanny: 1 }, a: { loyalty: 1 } },
    ],
  },
];

const cameo = (r) => {
  const c = card[r.id];
  return portrait(c, FACTIONS[c.faction].color);
};

export default {
  kicker: "Halstead &amp; Associates",
  title: "Which Gentleman<br><span>Are You?</span>",
  tagline: "Duke, heir, gamekeeper or hired help. A few questions of taste and temperament will settle it.",
  resultKicker: "You are",
  sharedKicker: "They are",
  artClass: "cameo",
  axes: AXES,
  questions: QUESTIONS,
  results: RESULTS,
  hero: () => portrait({ id: "you", look: { build: "m", nose: "straight", chin: "strong", hair: "slick", attire: "tux", prop: "masks" } }, "#6b1d22"),
  art: cameo,
  seal: (r) => r.name[0],
  shareText: (r) => `Which Gentleman am I? ${r.name}.`,
};
