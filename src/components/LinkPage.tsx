import { Header } from "./Header/Header";
import { Link } from "./Link";

export function LinkPage() {
  return (
    <div>
      <Header iconUrl="https://via.placeholder.com/150" username="@yourname" />
      <main>
        <Link url="www.linktr.ee" title="Classic Link!" />
      </main>
    </div>
  );
}
