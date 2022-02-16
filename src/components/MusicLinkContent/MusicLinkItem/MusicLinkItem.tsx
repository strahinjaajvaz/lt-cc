import styled from "styled-components";

import { MusicLinkContentType } from "../types";

import { default as arrowIcon } from "../../../assets/svg/arrow.svg";

interface Props extends MusicLinkContentType {
  onClick(pro: string): void;
  last?: boolean;
}

/**
 * Notes:
 *
 * There should be a prop that has a selected item so that we
 * can show the user visually what they have selected.
 *
 * Tab index was added to the div container as it was has a CTA (call to action)
 * and we should allow screen readers to enteract with it.
 *
 * Nice to haves:
 * It would be nice if there was a visial indicator for hovering over
 * each item. The deisngs didnt have anything for this case.
 *
 */

export function MusicLinkItem({
  icon: Icon,
  title,
  url,
  onClick,
  last,
}: Props) {
  return (
    <StyledMusicLinkItem last={!!last}>
      <a href={url}>
        <Icon />
      </a>
      <div tabIndex={0} onClick={() => onClick(title)}>
        <p>{title}</p>
        <img className="arrow" src={arrowIcon} alt="arrow icon" />
      </div>
    </StyledMusicLinkItem>
  );
}

const StyledMusicLinkItem = styled.div<{ last: boolean }>`
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid
      ${(props) =>
        !props.last ? props.theme.colors.blueGrey["3"] : "transparent"};
    margin-right: -1rem;
    margin-left: 1rem;
    align-items: center;
    cursor: pointer;
  }

  img.arrow {
    height: 0.75rem;
    width: 0.75rem;
    transform: rotate(-90deg);
    margin-right: 1rem;
  }

  svg > path {
    fill: ${(props) => props.theme.colors.blueGrey["2"]};
  }
`;
