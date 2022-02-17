import styled from "styled-components";

import { ShowsLinkItem } from "./ShowsLinkItem";

import { ShowsLinkDataType } from "../../mock/api/showsLinkData";

import { default as songkick } from "../../assets/svg/songkick.svg";

/**
 * Notes:
 *
 * When the user scrolls there scroll bar goes over the arrows.
 * This can be hidden with css:
 *
 *  https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
 *
 *  Hide scrollbar for Chrome, Safari and Opera
 *  .example::-webkit-scrollbar {
 *    display: none;
 *  }
 *
 *  Hide scrollbar for IE, Edge and Firefox
 * .example {
 *   -ms-overflow-style: none;   IE and Edge
 *   scrollbar-width: none;   Firefox
 * }
 *
 * I decided to leave it in as its a visual indicator to the user
 * that there is still some content
 */

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
