import styled from "styled-components";

import { ShowsLinkItem } from "./ShowsLinkItem";

import { ShowsLinkDataType } from "../../mock/api/showsLinkData";

import { default as songkick } from "../../assets/svg/songkick.svg";

interface Props {
  data: ShowsLinkDataType[];
}

export function ShowsLinkContent({ data }: Props) {
  return (
    <Container>
      <ContentContainer data-testid="show-link-container">
        {data.map(({ id, ...item }, i) => (
          <ShowsLinkItem key={id} {...item} last={i === data.length - 1} />
        ))}
      </ContentContainer>
      <img src={songkick} alt="Songkick icon" />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 1rem;

  & > img {
    display: block;
    margin: auto;
    padding: 1rem;
  }
`;

const ContentContainer = styled.div`
  max-height: 17.5rem;
  overflow: scroll;
`;
