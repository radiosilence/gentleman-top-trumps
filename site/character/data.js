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
    q: "You inherit a stately home, and a problem underneath it. Your first reaction?",
    options: [
      { t: "Find out exactly what is going on before saying a word.", r: { eddie: 2, susie: 1, nanny: 2 }, a: { nerve: 2 } },
      { t: "Open a bottle of something. It will sort itself out.", r: { freddy: 2 }, a: { nerve: -1, appetite: -1 } },
      { t: "Ask Mother. She will know what to do.", r: { charly: 2, sabrina: 1 }, a: { loyalty: 2 } },
      { t: "Work out what it is worth.", r: { stanley: 3, bobby: 1, marco: 1, gabrielle: 1 }, a: { appetite: 2 } },
    ],
  },
  {
    q: "Your weapon of choice?",
    options: [
      { t: "A shotgun, well oiled and properly licensed.", r: { geoff: 3, nanny: 1 }, a: { method: 1, breeding: 1 } },
      { t: "My fists.", r: { jack: 3 }, a: { method: 2, breeding: -2 } },
      { t: "Information.", r: { susie: 2, gabrielle: 3 }, a: { method: -2 } },
      { t: "A tiger, if one is available.", r: { marco: 3 }, a: { method: 2, appetite: 1 } },
    ],
  },
  {
    q: "A dinner party. Where are you?",
    options: [
      { t: "At the head of the table, having decided who sits where.", r: { sabrina: 3, bella: 2 }, a: { breeding: 2 } },
      { t: "Out in the kitchen with the staff, where the conversation is better.", r: { geoff: 1, jimmy: 1, nanny: 1 }, a: { breeding: -1, loyalty: 1 } },
      { t: "Beside the richest guest, laughing at their jokes.", r: { gabrielle: 3 }, a: { method: -2, loyalty: -1 } },
      { t: "Saying grace. At length.", r: { dixon: 3 }, a: { breeding: -1 } },
    ],
  },
  {
    q: "How do you deal with a betrayal?",
    options: [
      { t: "Patiently. Revenge is better planned.", r: { bobby: 3, susie: 1 }, a: { nerve: 2 } },
      { t: "Immediately, and in person.", r: { eddie: 2, marco: 1 }, a: { method: 2, nerve: -1 } },
      { t: "I forgive. Mostly.", r: { charly: 1, jimmy: 1 }, a: { loyalty: 1, method: -2 } },
      { t: "I make it go away.", r: { felix: 3 }, a: { nerve: 2 } },
    ],
  },
  {
    q: "Pick a weekend.",
    options: [
      { t: "On the grouse moor.", r: { geoff: 1, sabrina: 1 }, a: { breeding: 2 } },
      { t: "At a vineyard I have just bought.", r: { stanley: 3, bella: 2 }, a: { appetite: 2, breeding: 1 } },
      { t: "In a grow room, with good music.", r: { jimmy: 3 }, a: { appetite: -2 } },
      { t: "In a boxing gym.", r: { jack: 3 }, a: { breeding: -2 } },
    ],
  },
  {
    q: "What do people underestimate about you?",
    options: [
      { t: "My temper.", r: { freddy: 2, jack: 1, dixon: 1 }, a: { nerve: -2 } },
      { t: "My patience.", r: { bobby: 3, stanley: 1, felix: 2 }, a: { nerve: 2 } },
      { t: "My nerve.", r: { charly: 2, susie: 1 }, a: { nerve: 1 } },
      { t: "How much I already know.", r: { sabrina: 2, gabrielle: 2, bella: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "And your father?",
    options: [
      { t: "Complicated. He left everything to me, not my brother.", r: { eddie: 3 }, a: { breeding: 2 } },
      { t: "I run his business, and he still second-guesses me.", r: { susie: 3 }, a: { loyalty: 1 } },
      { t: "Not quite who I was told he was.", r: { charly: 3 }, a: { loyalty: 1 } },
      { t: "I am the father. Everyone else is a disappointment.", r: { bobby: 2, dixon: 1, marco: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "Something has gone badly wrong. There is a body.",
    options: [
      { t: "I know a man.", r: { susie: 2 }, a: { nerve: 1 } },
      { t: "I am the man.", r: { felix: 3 }, a: { nerve: 2, method: 1 } },
      { t: "Oh God. Is he dead? Is he definitely dead?", r: { freddy: 3, jimmy: 1 }, a: { nerve: -2 } },
      { t: "Pray for him, then bury him.", r: { dixon: 3 }, a: { method: 1 } },
    ],
  },
  {
    q: "What do you want most?",
    options: [
      { t: "To keep the family together.", r: { sabrina: 1, charly: 1, geoff: 1, nanny: 1 }, a: { loyalty: 2, appetite: -1 } },
      { t: "Everything.", r: { eddie: 2, stanley: 1, marco: 1 }, a: { appetite: 2 } },
      { t: "Respect.", r: { jack: 2, dixon: 1, freddy: 1 }, a: { appetite: 1 } },
      { t: "To be left alone to do my work.", r: { jimmy: 3, felix: 1 }, a: { appetite: -2 } },
    ],
  },
  {
    q: "Choose a drink.",
    options: [
      { t: "Something rare from my own cellar.", r: { stanley: 2, sabrina: 2 }, a: { breeding: 2 } },
      { t: "Whatever is going, as long as there is plenty of it.", r: { freddy: 2, jack: 1 }, a: { breeding: -1, nerve: -1 } },
      { t: "An espresso on a terrace in Italy.", r: { bella: 3, marco: 1 }, a: { breeding: 1 } },
      { t: "Tea, strong, from a flask.", r: { geoff: 2, nanny: 2 }, a: { breeding: -1, loyalty: 1 } },
    ],
  },
  {
    q: "Your style in a negotiation?",
    options: [
      { t: "Be the most charming person in the room.", r: { bella: 3, gabrielle: 2 }, a: { method: -2 } },
      { t: "Make them an offer they will understand.", r: { marco: 3, bobby: 1 }, a: { method: 2 } },
      { t: "Say nothing, and let them talk themselves into it.", r: { nanny: 3, felix: 1 }, a: { nerve: 2 } },
      { t: "Quote scripture until they give in.", r: { dixon: 2, freddy: 1 }, a: { loyalty: -1 } },
    ],
  },
  {
    q: "Armed men are in the woods around the house. You…",
    options: [
      { t: "Get the children out.", r: { nanny: 2, charly: 2 }, a: { loyalty: 2 } },
      { t: "Hold the woods.", r: { geoff: 3 }, a: { method: 1, loyalty: 1 } },
      { t: "Take control now, and take revenge later.", r: { eddie: 2, susie: 1 }, a: { appetite: 1, method: 1 } },
      { t: "Hide in the cellar with the good wine.", r: { jimmy: 2, stanley: 2 }, a: { nerve: -1 } },
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
