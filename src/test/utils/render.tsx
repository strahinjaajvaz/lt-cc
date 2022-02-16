import { ThemeProvider } from "styled-components";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { theme } from "../../theme/theme";

function renderWithTheme(component: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export { renderWithTheme, screen, fireEvent, waitFor };
