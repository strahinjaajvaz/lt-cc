import { Footer } from "./Footer";
import { Header } from "./Header";
import { ClassicLink } from "./ClassicLink";
import { Accordion } from "./Accordion";
import { MusicLinkContent } from "./MusicLinkContent/MusicLinkContent";
import { ShowsLinkContent } from "./ShowsLinkContent";

import { musicLinkData } from "../mock/api/musicLinkData";
import { showsListData } from "../mock/api/showsLinkData";

import profilePicture from "../assets/images/profile-picture.png";

export function LinkPage() {
  return (
    <>
      <Header iconUrl={profilePicture} username="@yourname" />
      <main>
        <ClassicLink url="https://www.linktr.ee" title="Classic Link!" />
        <Accordion title="Music">
          <MusicLinkContent data={musicLinkData} />
        </Accordion>
        <Accordion title="Shows">
          <ShowsLinkContent data={showsListData} />
        </Accordion>
      </main>
      <Footer />
    </>
  );
}
