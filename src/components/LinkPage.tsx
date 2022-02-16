import { Footer } from "./Footer";
import { Header } from "./Header";
import { ClassicLink } from "./ClassicLink";
import { Accordion } from "./Accordion";
import { MusicLinkContent } from "./MusicLinkContent/MusicLinkContent";

export function LinkPage() {
  return (
    <>
      <Header iconUrl="https://via.placeholder.com/150" username="@yourname" />
      <main>
        <ClassicLink url="www.linktr.ee" title="Classic Link!" />
        <Accordion title="Music">
          <MusicLinkContent />
        </Accordion>
      </main>
      <Footer />
    </>
  );
}
