import { ThemeProvider } from "styled-components";

import { Layout } from "./components/Layout";
import { LinkPage } from "./components/LinkPage";
import { GlobalStyle } from "./theme/GlobalStyle";
import { theme } from "./theme/theme";

export function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <LinkPage />
        </Layout>
      </ThemeProvider>
    </>
  );
}
