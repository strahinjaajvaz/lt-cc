import styled from "styled-components";

import { Arrow } from "../../shared/Arrow";

interface Props {
  title: string;
  location: string;
  soldOut?: boolean;
  url: string;
}

export function ShowsLinkItem({
  title,
  location,
  soldOut = false,
  url,
}: Props) {
  return (
    <StyledAnchor href={url} target="_blank" rel="noreferrer">
      <StyledShowsLinkItem>
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

const StyledShowsLinkItem = styled.div`
  color: ${(props) => props.theme.colors.blueGrey["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.blueGrey["3"]};
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

const StyledAnchor = styled.a`
  text-decoration: none;
`;
