import { ShowsLinkItem } from "./ShowsLinkItem";
import { renderWithTheme, screen } from "../../../test/utils/render";

const URL = "https://www.songkick.com/";

describe("Shows Link Item Component", () => {
  it("should reader the Shows Link Item component", () => {
    const title = "Apr 01 2019";
    renderWithTheme(
      <ShowsLinkItem
        title={title}
        location="The Forum, Melbourne"
        url="https://www.songkick.com/"
        last={false}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", URL);
  });
  it("should render the arrow icon if soldout is false", () => {
    renderWithTheme(
      <ShowsLinkItem
        title="Apr 01 2019"
        location="The Forum, Melbourne"
        url="https://www.songkick.com/"
        last={false}
      />
    );

    expect(screen.queryByText(/sold out/i)).toBeNull();
  });
  it("should render the soldout text when soldout is true", () => {
    renderWithTheme(
      <ShowsLinkItem
        title="Apr 01 2019"
        location="The Forum, Melbourne"
        url="https://www.songkick.com/"
        last={false}
        soldOut
      />
    );

    expect(screen.getByText(/sold out/i)).toBeInTheDocument();
  });
});
