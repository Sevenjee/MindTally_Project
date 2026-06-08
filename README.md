# MindTally

A minimalist mindfulness counter built with vanilla JavaScript, HTML, and CSS.

## What it does

MindTally lets you track and release your overthinking moments in real time. Each time an intrusive thought hits, you increment the counter — or decrement if you overcounted. You can also set a custom step value to count by more than one at a time. When you're ready to let it go, you save it — logging the count and an exact timestamp to your entry history and resetting back to zero. Individual entries can be deleted on their own, or Reset clears everything at once and gives you a clean slate.

Entries survive a page refresh. Your history is saved to `localStorage`, so closing or reloading the tab never loses your data.

The flow mirrors a real mental habit: **acknowledge → log → release.**

## Why I built it

I built MindTally to put into practice what I was learning about **JavaScript event listeners and DOM manipulation** — but I wanted to build something that actually meant something, not just a todo list. Connecting a technical exercise to a real-world use case (mental awareness) made the learning stick differently.

## What's under the hood

- **Vanilla JavaScript** — no frameworks, no libraries. Every interaction is wired manually with `addEventListener`, giving full visibility into how the browser event model works.
- **localStorage persistence** — entries are saved as JSON under the key `mindtally-entries` on every save, delete, and reset. On page load, `loadFromStorage()` restores them instantly so no data is ever lost on refresh.
- **Timestamps** — each saved entry captures the exact time and date using `toLocaleDateString()` and `toLocaleTimeString()`, displayed alongside the count value in the entry list.
- **Step input** — a number input lets the user increment or decrement by any value, not just 1. Defaults to 1 if left blank or set below 1.
- **Dynamic entry rendering** — `renderEntries()` rebuilds the full entry list from scratch on every change. Each row shows a numbered badge, the saved count, the timestamp, and a ✕ delete button. A live save count and running total update automatically.
- **DOM manipulation** — the counter display, entry list, metadata bar, and card background color all update dynamically in response to user actions.
- **Visual state feedback** — the card background transitions color on each action (increment → dark green, decrement → dark blue, save → dark pink, reset → default), making state changes feel alive without a single line of animation library code.
- **Scrollable card** — the card grows with content and scrolls internally when entries fill up, so the Reset button is always reachable. A custom thin scrollbar blends into the dark theme.
- **Responsive design** — fluid layout using CSS `min()`, `dvh` units, and three media query breakpoints (mobile, tablet, desktop) so it looks right on any screen.
- **CSS variables** — the entire color theme is managed through `:root` custom properties, making the design easy to retheme from one place.

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, media queries, CSS scroll styling)
- JavaScript (ES6+, DOM API, localStorage API, Date API)

## Run it

No installation needed. Clone the repo and open `index.html` in any browser.

## Live Demo

[View Live Site](https://sevenjee.github.io/MindTally_Project/)

---

_Built as part of my JavaScript fundamentals practice — proof that the best way to learn is to build something you'd actually use._
