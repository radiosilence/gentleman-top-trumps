# The Gentlemen: Fan Games

Unofficial browser games for the Netflix series *The Gentlemen*.

https://radiosilence.github.io/gentleman-top-trumps/

| Path | Game |
|---|---|
| `/` | Hub linking the games, with the spoiler cut-off and disclaimer |
| `/trumps/` | Gentlemen's Trumps, a Top Trumps-style card game against the computer |

Everything is safe up to the end of series 2.

## Gentlemen's Trumps

Forty characters from series one and two, each rated out of 100 on Pedigree, Fortune, Menace, Cunning, Composure and Bloodshed. Play follows the standard rules: the leader calls a category, the higher number takes both cards, and a tie sends both to a pot that the next hand's winner collects.

**Ratings, not invented numbers.** The show gives almost no hard figures (fortunes, kill counts), so each stat is a judgement out of 100 grounded in what happens on screen. The card blurbs record the events the numbers rest on. Expect arguments.

**Three opponents.** Freddy picks at random. Susie picks her highest raw number. Bobby ranks each of his stats against the whole deck and calls the one least likely to be beaten, so a 60 in a category where most cards score 10 beats a 70 where most score 80.

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
