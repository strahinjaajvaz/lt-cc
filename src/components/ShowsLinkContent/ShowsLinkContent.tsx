import styled from "styled-components";

import { ShowsLinkItem } from "./ShowsLinkItem";

export function ShowsLinkContent() {
  return (
    <Container>
      <ShowsLinkItem
        soldOut
        title="Apr 01 2019"
        location="The Forum, Melbourne"
        url="https://www.songkick.com/"
      />
      <ShowsLinkItem
        title="Apr 01 2019"
        location="The Forum, Melbourne"
        url="https://www.songkick.com/"
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 1rem;
`;
