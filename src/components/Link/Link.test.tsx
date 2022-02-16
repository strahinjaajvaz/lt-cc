import { Link } from "./Link";
import { renderWithTheme, screen } from "../../test/utils/render";

describe("Link Component", () => {
  it("should reader the Link component", () => {
    const url = "https://linktr.ee";

    renderWithTheme(<Link url={url} title="Link tree!" />);
    const linkEl = screen.getByRole("link");
    const titleEl = screen.getByText("Link tree!");

    expect(linkEl).toHaveAttribute("href", url);
    expect(titleEl).toBeInTheDocument();
  });
});
