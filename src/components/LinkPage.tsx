import { Footer } from "./Footer";
import { Header } from "./Header";
import { ClassicLink } from "./ClassicLink";

export function LinkPage() {
  return (
    <>
      <Header iconUrl="https://via.placeholder.com/150" username="@yourname" />
      <main>
        <ClassicLink url="www.linktr.ee" title="Classic Link!" />
      </main>
      <Footer />
    </>
  );
}
