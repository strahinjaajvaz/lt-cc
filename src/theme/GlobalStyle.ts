import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        font-family: Karla;
        height: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;
