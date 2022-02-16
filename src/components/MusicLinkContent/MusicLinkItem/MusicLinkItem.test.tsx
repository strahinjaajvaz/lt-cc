import { MusicLinkItem } from "./MusicLinkItem";
import { renderWithTheme, screen, fireEvent } from "../../../test/utils/render";

describe("Music Link Item Component", () => {
  it("should reader the Music Link Item component", () => {
    const url = "https://spotify.com";
    renderWithTheme(
      <MusicLinkItem
        icon={() => <i></i>}
        title="Spotify"
        url={url}
        onClick={() => {}}
      />
    );

    expect(screen.getByText(/Spotify/i)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
  });

  it("should check that the element was clicked once", () => {
    const mockOnClick = jest.fn();
    renderWithTheme(
      <MusicLinkItem
        icon={() => <i></i>}
        title="Spotify"
        url="https://spotify.com"
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByText(/Spotify/i));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
