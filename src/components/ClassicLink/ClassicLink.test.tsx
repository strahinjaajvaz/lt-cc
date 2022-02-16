import { ClassicLink } from "./ClassicLink";
import { renderWithTheme, screen } from "../../test/utils/render";

describe("Classic Link Component", () => {
  it("should reader the Classic Link component", () => {
    const url = "https://linktr.ee";

    renderWithTheme(<ClassicLink url={url} title="Link tree!" />);
    const linkEl = screen.getByRole("link");
    const titleEl = screen.getByText("Link tree!");

    expect(linkEl).toHaveAttribute("href", url);
    expect(titleEl).toBeInTheDocument();
  });
});
