# The Gentlemen: Fan Games

Unofficial browser games for the Netflix series *The Gentlemen*.

https://radiosilence.github.io/gentleman-top-trumps/

| Path | Game |
|---|---|
| `/` | Hub linking the games, with the spoiler cut-off and disclaimer |
| `/trumps/` | Gentlemen's Trumps, a Top Trumps-style card game against the computer |
| `/role/` | Your Place in the Firm: which part of the operation would you run? |
| `/character/` | Which Gentleman Are You? Sixteen characters from the deck |

Everything is safe up to the end of series 2.

## Gentlemen's Trumps

Forty characters from series one and two, each rated out of 100 on Pedigree, Fortune, Menace, Cunning, Composure and Bloodshed. Play follows the standard rules: the leader calls a category, the higher number takes both cards, and a tie sends both to a pot that the next hand's winner collects.

**Ratings, not invented numbers.** The show gives almost no hard figures (fortunes, kill counts), so each stat is a judgement out of 100 grounded in what happens on screen. The card blurbs record the events the numbers rest on. Expect arguments.

**Three opponents.** Freddy picks at random. Susie picks her highest raw number. Bobby ranks each of his stats against the whole deck and calls the one least likely to be beaten, so a 60 in a category where most cards score 10 beats a 70 where most score 80.

## The quizzes

Both quizzes run on one engine (`site/shared/quiz.js`); each quiz folder holds only its data. Every answer adds weights to the results and to five temperament axes (`site/shared/axes.js`), and the result screen shows the winner, the runner-up and where the player sits on each axis. The result is encoded in the URL hash, so a shared link opens that result directly.

**Roles are parts of the business the show depicts**, from the farm under Halstead to the seat in the Lords, and each lists the characters who fill it on screen. Weights are tuned so that, over every possible combination of answers, each role wins between about 6% and 13% of the time; ties go to the role listed first.

**Characters come from the deck.** The character quiz uses sixteen of the Trumps cards, with their silhouettes and names taken from `cards.js`, so the result portrait matches the card. Over every combination of answers each character wins between about 4.5% and 9% of the time.

## Why it is built this way

**No build step.** ES modules, three Google Fonts and nothing else; `site/` is deployed to GitHub Pages as-is.

**Shared parts in `site/shared/`.** The character data (`cards.js`), the silhouette renderer (`portraits.js`) and the theme tokens (`theme.css`) are used by every game, so a character added to the deck is available to the quizzes and looks the same everywhere.

**Silhouettes rather than photographs.** Cast photos belong to Netflix and the photographers, and would make the project look official. Each portrait is a cut-paper profile assembled in `portraits.js` from parts (nose, chin, hair, hat, beard, attire), with an emblem on the frame naming the character's signature object. Adding a character means choosing parts, not drawing.

## Run locally

```
mise run serve   # http://localhost:8766
```

## Disclaimer

A non-commercial fan project, not affiliated with or endorsed by Netflix, Moonage Pictures, Guy Ritchie or Winning Moves (Top Trumps). Character names belong to their owners. Contains spoilers up to the end of series 2.

Sister sites: [Silo](https://radiosilence.github.io/silo-quiz/) · [Slow Horses](https://radiosilence.github.io/slow-horses/)
