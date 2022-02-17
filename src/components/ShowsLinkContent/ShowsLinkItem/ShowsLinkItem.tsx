import styled from "styled-components";

import { Arrow } from "../../shared/Arrow";

/**
 * Nice to haves:
 *
 * It would be nice if there was a visial indicator for hovering over
 * each item. The deisngs didnt have anything for this case.
 */

interface Props {
  title: string;
  location: string;
  soldOut?: boolean;
  url: string;
  last: boolean;
}

export function ShowsLinkItem({
  title,
  location,
  soldOut = false,
  last = false,
  url,
}: Props) {
  return (
    <StyledAnchor href={url} target="_blank" rel="noreferrer">
      <StyledShowsLinkItem last={last}>
        <div>
          <p>{title}</p>
          <p>{location}</p>
        </div>
        {soldOut && <p className="sold-out">Sold out</p>}
        {!soldOut && <Arrow />}
      </StyledShowsLinkItem>
    </StyledAnchor>
  );
}

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledShowsLinkItem = styled.div<{ last?: boolean }>`
  color: ${(props) => props.theme.colors.blueGrey["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${(props) =>
      !props.last ? props.theme.colors.blueGrey["3"] : "transparent"};
  padding: 0.5rem;
  margin-right: -1rem;
  padding-right: 1rem;

  & > div > p {
    font-size: 1rem;
    line-height: 1.75rem;
    margin: 0;

    & + p {
      line-height: 1.5rem;
      font-size: 0.75rem;
    }
  }

  p.sold-out {
    line-height: 1.5rem;
    font-size: 0.75rem;
  }

  img.arrow {
    height: 0.75rem;
    width: 0.75rem;
    transform: rotate(-90deg);
  }
`;
