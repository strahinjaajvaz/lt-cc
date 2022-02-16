import { Header } from "./Header";
import { renderWithTheme, screen } from "../../test/utils/render";

describe("Header Component", () => {
  it("should reader the Header component", () => {
    const iconUrl = "https://via.placeholder.com/150";

    renderWithTheme(<Header iconUrl={iconUrl} username="@test-username" />);
    const h1El = screen.getByText(/@test-username/i);
    const imgEl = screen.getByTestId("header-avatar");

    expect(h1El).toBeInTheDocument();
    expect(imgEl).toHaveAttribute("src", iconUrl);
  });
});
