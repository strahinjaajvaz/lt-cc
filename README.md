# Link tree coding challenge

This is the coding challenge presented to me by Link Tree.

## Install

- make sure you have `node` installed and any package manager (I used pnpm).
- to install run `pnpm i`.

## Design decisions

- I've left comments throughout the code to describe anything i thought would be worth discussing.
- Normally for each feature, I'd create a new branch, pull request and merge. I didn't take that approach here as there wasn't a need, as it was only a simple task.

## Optimisations

- Minified all the svgs using this [tool](https://jakearchibald.github.io/svgomg/). Average reduction in size was around ~25%.

## TODO:

- If this was a larger application, I'd have used Cypress for E2E testing.
- Normalizing the css with something like [Normalize.css](https://necolas.github.io/normalize.css/).
- If this was an application for production, I'd go with Next.js for SEO optimization.

## Tests

To run the tests, use `pnpm test`

## Deployed

[https://lt-cc.vercel.app/](https://lt-cc.vercel.app/)
