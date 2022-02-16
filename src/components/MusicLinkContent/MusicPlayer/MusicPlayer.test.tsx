import { MusicPlayer } from "./MusicPlayer";
import { renderWithTheme, screen } from "../../../test/utils/render";

describe("Music Player Component", () => {
  it("should reader the Music Player component", () => {
    renderWithTheme(<MusicPlayer service="Spotify" />);

    expect(screen.getByText(/Spotify/i)).toBeInTheDocument();
  });
});
