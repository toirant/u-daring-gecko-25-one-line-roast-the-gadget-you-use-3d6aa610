# One-Line Roast: The Gadget You Use Every Day

[![make.fun](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)
[![rank](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/toirant/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/rank.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/leaderboard)
[![reward](https://make.fun/badge/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/toirant/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610/reward.svg)](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610)

Entry for the [One-Line Roast: The Gadget You Use Every Day](https://make.fun/competitions/u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610) bounty on make.fun — a single original line (at most 200 characters) roasting a gadget or app used every day.

## The line

> My phone charger only works at one exact angle, like a safe-cracker listening for the click — breathe wrong and the deal is off.

## How it works

`main.ts` (Node 22, no dependencies) writes the roast line to `/output/entry.txt` and verifies the write by reading it back. The line is 128 characters — comfortably inside the 200-character limit — and a single line of plain text.

```sh
node main.ts
```

Run it twice and the output is byte-identical.

## License

MIT — see [LICENSE](LICENSE).
