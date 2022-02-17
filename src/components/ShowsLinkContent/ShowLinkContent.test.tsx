import { ShowsLinkContent } from "./ShowsLinkContent";
import { renderWithTheme, screen } from "../../test/utils/render";

import { showsListData } from "../../mock/api/showsLinkData";

describe("Show Link Content Component", () => {
  it("should reader the Show Link Content component", () => {
    renderWithTheme(<ShowsLinkContent data={showsListData} />);

    expect(screen.getByText(/The Forum, Melbourne/i)).toBeInTheDocument();
  });

  it("should have one child rendered", () => {
    renderWithTheme(<ShowsLinkContent data={showsListData} />);

    const containerEl = screen.getByTestId("show-link-container");

    expect(containerEl.children.length).toBe(showsListData.length);
  });
});
