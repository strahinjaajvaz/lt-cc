import { ThemeProvider } from "styled-components";

import { Container } from "./components/Container";
import { LinkPage } from "./components/LinkPage";
import { GlobalStyle } from "./theme/GlobalStyle";
import { theme } from "./theme/theme";

export function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <LinkPage />
        </Container>
      </ThemeProvider>
    </div>
  );
}
