# Link tree coding challenge

# Design decisions

- You could potentionally use CSS Variables. Since we are giving the user some customization, I went with the CSS-in-JS approach.
- The arrow image for the list items could have been a seperate component and reused. I chose to leave it inline in each component as in the future it could be different for each component.

# Optimisations

- Minified all the svgs using this [tool](https://jakearchibald.github.io/svgomg/). Average reduction in size was around ~25%.

# Nice to haves

- If this was a larger application, I'd have used Cypress for E2E testing.
- Normalizing the css with something like [Normalize.css](https://necolas.github.io/normalize.css/).
