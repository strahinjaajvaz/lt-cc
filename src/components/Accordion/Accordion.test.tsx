import { Accordion } from "./Accordion";
import { renderWithTheme, screen, fireEvent } from "../../test/utils/render";

describe("Accordian Component", () => {
  it("should reader the Accordion component", () => {
    const content = "content";
    renderWithTheme(
      <Accordion title="Music">
        <p>content</p>
      </Accordion>
    );

    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();

    const textEl = screen.queryAllByText(content);
    expect(textEl).toHaveLength(0);
  });

  it("should toggle the content when you click the Accordion title", async () => {
    const content = "content";
    renderWithTheme(
      <Accordion title="Music">
        <p>content</p>
      </Accordion>
    );

    const btnEl = screen.getByRole("button");
    fireEvent.click(btnEl);

    await screen.findByText(content);

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
