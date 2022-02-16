import { MusicLinkContent } from "./MusicLinkContent";
import { renderWithTheme, screen, fireEvent } from "../../test/utils/render";
import { MusicLinkContentType } from "./types";

const mockData: MusicLinkContentType[] = [
  {
    url: "https://linktr.ee",
    icon: () => <i></i>,
    title: "LinkTree",
  },
];

describe("Music Link Content Component", () => {
  it("should reader the Music Link Content component", () => {
    renderWithTheme(<MusicLinkContent data={mockData} />);

    expect(screen.getByText(/LinkTree/i)).toBeInTheDocument();
  });

  it("should have one child rendered", () => {
    renderWithTheme(<MusicLinkContent data={mockData} />);

    const containerEl = screen.getByTestId("music-link-container");

    expect(containerEl.children.length).toBe(1);
  });

  it("should update the service when selected", async () => {
    renderWithTheme(<MusicLinkContent data={mockData} />);

    const containerEl = screen.queryAllByTestId("service-player");
    expect(containerEl.length).toBe(0);

    fireEvent.click(screen.getByText(/LinkTree/i));

    await screen.findByTestId(/service-player/i);

    expect(screen.getByTestId("service-player")).toBeInTheDocument();
    expect(screen.getByTestId("service-player")).toHaveTextContent("LinkTree");
  });
});
