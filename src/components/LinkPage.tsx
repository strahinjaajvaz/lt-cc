import { Footer } from "./Footer";
import { Header } from "./Header";
import { ClassicLink } from "./ClassicLink";
import { Accordion } from "./Accordion";
import { MusicLinkContent } from "./MusicLinkContent/MusicLinkContent";

import { musicLinkData } from "../mock/api/musicLinkData";
import { ShowsLinkContent } from "./ShowsLinkContent";

export function LinkPage() {
  return (
    <>
      <Header iconUrl="https://via.placeholder.com/150" username="@yourname" />
      <main>
        <ClassicLink url="https://www.linktr.ee" title="Classic Link!" />
        <Accordion title="Music">
          <MusicLinkContent data={musicLinkData} />
        </Accordion>
        <Accordion title="Shows">
          <ShowsLinkContent />
        </Accordion>
      </main>
      <Footer />
    </>
  );
}
