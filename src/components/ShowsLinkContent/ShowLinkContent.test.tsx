import { ShowsLinkContent } from "./ShowsLinkContent";
import { renderWithTheme, screen } from "../../test/utils/render";

import { showsListData } from "../../mock/api/showsLinkData";

describe("The Forum, Melbourne Component", () => {
  it("should reader the The Forum, Melbourne component", () => {
    renderWithTheme(<ShowsLinkContent data={showsListData} />);

    expect(screen.getByText(/The Forum, Melbourne/i)).toBeInTheDocument();
  });

  it("should have one child rendered", () => {
    renderWithTheme(<ShowsLinkContent data={showsListData} />);

    const containerEl = screen.getByTestId("show-link-container");

    expect(containerEl.children.length).toBe(showsListData.length);
  });
});
