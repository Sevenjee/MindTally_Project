# MindTally

A minimalist mindfulness counter built with vanilla JavaScript, HTML, and CSS.

## What it does

MindTally lets you track and release your overthinking moments in real time. Each time an intrusive thought hits, you increment the counter. When you're ready to let it go, you save it logging it to your session history and resetting back to zero. At the end, reset clears everything, giving you a clean slate.

The flow mirrors a real mental habit: **acknowledge → log → release.**

## Why I built it

I built MindTally to put into practice what I was learning about **JavaScript event listeners and DOM manipulation** but I wanted to build something that actually meant something, not just a todo list. Connecting a technical exercise to a real-world use case (mental awareness) made the learning stick differently.

## What's under the hood

- **Vanilla JavaScript** — no frameworks, no libraries. Every interaction is wired manually with `addEventListener`, giving full visibility into how the browser event model works.
- **DOM manipulation** — the counter display, previous entries list, and card background color all update dynamically in response to user actions.
- **Visual state feedback** — the card background transitions color on each action (increment, save, reset), making state changes feel alive without a single line of animation library code.
- **Responsive design** — fluid layout using CSS `min()`, `dvh` units, and three media query breakpoints (mobile, tablet, desktop) so it looks right on any screen.
- **CSS variables** — the entire color theme is managed through `:root` custom properties, making the design easy to retheme from one place.

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, media queries)
- JavaScript (ES6, DOM API)

## Run it

No installation needed. Clone the repo and open `index.html` in any browser.

```bash

## Live Demo
[View Live Site] https://sevenjee.github.io/MindTally_Project/
```

---

\_Built as part of my JavaScript fundamentals practice proof that the best way to learn is to build something you'd actually use.
