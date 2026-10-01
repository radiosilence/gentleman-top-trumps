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
    q: "A stranger at a party is plainly lying about who they are.",
    options: [
      { t: "Play along, and find out why.", r: { gabrielle: 2, felix: 1 }, a: { method: -2 } },
      { t: "Say so. Loudly.", r: { freddy: 2, jack: 1 }, a: { nerve: -2 } },
      { t: "Mention it later to someone who can check.", r: { nanny: 2, felix: 1 }, a: { nerve: 1, loyalty: 1 } },
      { t: "Admire the effort. One recognises a professional.", r: { bella: 2, stanley: 1 }, a: { breeding: 1, nerve: 1 } },
    ],
  },
  {
    q: "Your favourite hour of the day?",
    options: [
      { t: "Dawn, outside, with the dogs.", r: { geoff: 2, charly: 1 }, a: { appetite: -1 } },
      { t: "Three in the morning, while the music is still on.", r: { jimmy: 2, freddy: 1 }, a: { nerve: -1, breeding: -1 } },
      { t: "Dinner, which ought to last at least three hours.", r: { marco: 2, sabrina: 1 }, a: { breeding: 1 } },
      { t: "Early evening, alone, with something good in the glass.", r: { stanley: 2, felix: 1 }, a: { nerve: 1 } },
    ],
  },
  {
    q: "You find something you were not meant to see.",
    options: [
      { t: "Pretend I didn't, and use it later.", r: { susie: 2, gabrielle: 1 }, a: { appetite: 1, nerve: 1 } },
      { t: "Put it back exactly as it was.", r: { felix: 2, nanny: 1 }, a: { nerve: 2 } },
      { t: "Ask about it at dinner, in front of everyone.", r: { charly: 2, freddy: 1 }, a: { nerve: -1, loyalty: 1 } },
      { t: "Pray on it.", r: { dixon: 2, sabrina: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "The house is on fire. You save…",
    options: [
      { t: "The children, then the dogs, then the shotgun.", r: { geoff: 2, nanny: 1 }, a: { loyalty: 2 } },
      { t: "The painting. It is worth more than the house.", r: { stanley: 2, marco: 1 }, a: { appetite: 1, breeding: 1 } },
      { t: "The plants. They took years.", r: { jimmy: 2, charly: 1 }, a: { appetite: -2 } },
      { t: "The passports, the cash and the ledger, in that order.", r: { susie: 2, felix: 1 }, a: { nerve: 2 } },
    ],
  },
  {
    q: "A friend lets you down badly.",
    options: [
      { t: "I forgive them, eventually, and remind them often.", r: { sabrina: 2, charly: 1 }, a: { loyalty: 1, breeding: 1 } },
      { t: "I never mention it again. Nor, wisely, do they.", r: { bobby: 2, felix: 1 }, a: { nerve: 2 } },
      { t: "I take it personally, and so, in time, does the friend.", r: { eddie: 2, bobby: 1 }, a: { method: 1 } },
      { t: "I sulk, then buy them a drink.", r: { freddy: 2, marco: 1 }, a: { nerve: -1, loyalty: 1 } },
    ],
  },
  {
    q: "Pick a sport.",
    options: [
      { t: "Boxing.", r: { jack: 2, nanny: 1 }, a: { method: 2, breeding: -2 } },
      { t: "Shooting, properly, on someone's estate.", r: { eddie: 2, geoff: 1 }, a: { breeding: 2 } },
      { t: "Falconry.", r: { bella: 2, sabrina: 1 }, a: { breeding: 2 } },
      { t: "Cards, for money.", r: { gabrielle: 1, stanley: 1, jack: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "What annoys you most in other people?",
    options: [
      { t: "Bad manners.", r: { sabrina: 2, marco: 1 }, a: { breeding: 2 } },
      { t: "Disloyalty.", r: { bobby: 2, dixon: 1 }, a: { loyalty: 2 } },
      { t: "Mess.", r: { felix: 2, sabrina: 1 }, a: { nerve: 1 } },
      { t: "Being told what to do.", r: { charly: 2, jack: 1 }, a: { nerve: -1 } },
    ],
  },
  {
    q: "A free afternoon in a strange city.",
    options: [
      { t: "Find the best restaurant, and charm the owner.", r: { marco: 2, bella: 1 }, a: { method: -1, breeding: 1 } },
      { t: "Find a gym.", r: { jack: 2, nanny: 1 }, a: { breeding: -1 } },
      { t: "Find a church, then a pub.", r: { dixon: 2, geoff: 1 }, a: { breeding: -1 } },
      { t: "Find the people worth knowing.", r: { gabrielle: 2, stanley: 1 }, a: { appetite: 1, method: -1 } },
    ],
  },
  {
    q: "Which compliment would mean the most?",
    options: [
      { t: "“You were born for this.”", r: { eddie: 2, susie: 1 }, a: { appetite: 1 } },
      { t: "“You're the only one I trust.”", r: { nanny: 2, geoff: 1 }, a: { loyalty: 2 } },
      { t: "“You have a gift.”", r: { jimmy: 2, bella: 1 }, a: { appetite: -1 } },
      { t: "“You're wonderful company.”", r: { freddy: 2, marco: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "How do you take bad news?",
    options: [
      { t: "Very calmly, which frightens people.", r: { felix: 2, bobby: 1 }, a: { nerve: 2 } },
      { t: "Badly, for an hour, and then I fix it.", r: { susie: 2, bella: 1 }, a: { nerve: -1, appetite: 1 } },
      { t: "Out on the heavy bag.", r: { jack: 2, charly: 1 }, a: { nerve: -2, method: 1 } },
      { t: "As a sign.", r: { dixon: 2, bobby: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "Your ideal house?",
    options: [
      { t: "Old, cold and full of ancestors.", r: { sabrina: 2, eddie: 1 }, a: { breeding: 2 } },
      { t: "A cottage at the edge of the woods.", r: { geoff: 2, nanny: 1 }, a: { appetite: -1 } },
      { t: "A villa with a terrace above the sea.", r: { bella: 2, marco: 1 }, a: { breeding: 1, appetite: 1 } },
      { t: "Anywhere with good light and a lot of lamps.", r: { jimmy: 2, jack: 1 }, a: { breeding: -1, appetite: -1 } },
    ],
  },
  {
    q: "You are asked to keep a secret that could hurt someone you love.",
    options: [
      { t: "Keep it. Some truths do more harm than good.", r: { sabrina: 2, geoff: 1 }, a: { loyalty: 1, nerve: 1 } },
      { t: "Tell them, gently, at once.", r: { charly: 2, nanny: 1 }, a: { loyalty: 2, method: -1 } },
      { t: "Keep it, and make sure it never comes out.", r: { bobby: 2, dixon: 1 }, a: { nerve: 1, method: 1 } },
      { t: "Tell them by accident, in the worst possible way.", r: { freddy: 2, jimmy: 1 }, a: { nerve: -2 } },
    ],
  },
  {
    q: "What is money for?",
    options: [
      { t: "Keeping the roof on.", r: { eddie: 2, geoff: 1 }, a: { loyalty: 1 } },
      { t: "Beautiful things.", r: { stanley: 2, bella: 1 }, a: { breeding: 1, appetite: 1 } },
      { t: "Proving a point.", r: { susie: 2, jack: 1 }, a: { appetite: 2 } },
      { t: "Buying silence.", r: { marco: 2, gabrielle: 1 }, a: { method: 1, nerve: 1 } },
    ],
  },
  {
    q: "Pick a party trick.",
    options: [
      { t: "Remembering everyone's name.", r: { nanny: 2, gabrielle: 1 }, a: { method: -1 } },
      { t: "Doing impressions of the host.", r: { gabrielle: 2, bella: 1 }, a: { loyalty: -1 } },
      { t: "Arm-wrestling all comers.", r: { jack: 2, geoff: 1 }, a: { method: 2 } },
      { t: "A dramatic reading, unrequested.", r: { dixon: 2, stanley: 1 }, a: { method: -1 } },
    ],
  },
  {
    q: "The Dowager Duchess invites you to lunch at Halstead.",
    options: [
      { t: "Arrive early, with flowers from my own garden.", r: { bella: 2, charly: 1 }, a: { breeding: 1 } },
      { t: "Arrive late, with excuses.", r: { freddy: 2, jimmy: 1 }, a: { nerve: -1 } },
      { t: "Arrive exactly on time, and watch everyone.", r: { gabrielle: 2, susie: 1 }, a: { nerve: 2 } },
      { t: "Ask who else is coming before I accept.", r: { stanley: 2, sabrina: 1 }, a: { appetite: 1 } },
    ],
  },
  {
    q: "Armed men are in the woods around the house.",
    options: [
      { t: "Get the children out.", r: { nanny: 2, charly: 1 }, a: { loyalty: 2 } },
      { t: "Hold the woods.", r: { geoff: 2, jack: 1 }, a: { method: 1, loyalty: 1 } },
      { t: "Find out who sent them, and pay that person a visit.", r: { eddie: 2, bobby: 1 }, a: { method: 2, appetite: 1 } },
      { t: "Hide in the cellar with the good wine.", r: { jimmy: 2, stanley: 1 }, a: { nerve: -1 } },
    ],
  },
  {
    q: "There is a body in the boot of the car.",
    options: [
      { t: "I know a man.", r: { susie: 2, eddie: 1 }, a: { nerve: 1 } },
      { t: "I am the man.", r: { felix: 2, bobby: 1 }, a: { nerve: 2, method: 1 } },
      { t: "Oh God. Is he dead? Is he definitely dead?", r: { freddy: 2, jimmy: 1 }, a: { nerve: -2 } },
      { t: "Feed it to something large.", r: { marco: 2, dixon: 1 }, a: { method: 2 } },
    ],
  },
  {
    q: "Someone offers you a fortune to betray your family.",
    options: [
      { t: "Laugh, then have them followed.", r: { bobby: 2, eddie: 1 }, a: { nerve: 1, loyalty: 1 } },
      { t: "Ask exactly how large a fortune.", r: { gabrielle: 2, stanley: 1 }, a: { loyalty: -2, appetite: 1 } },
      { t: "Tell my mother.", r: { charly: 2, jimmy: 1 }, a: { loyalty: 2 } },
      { t: "Quote Proverbs at them until they leave.", r: { dixon: 2, sabrina: 1 }, a: { method: -1, loyalty: 1 } },
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
