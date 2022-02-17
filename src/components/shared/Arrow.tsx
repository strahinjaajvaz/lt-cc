import styled from "styled-components";

import { default as arrowIcon } from "../../assets/svg/arrow.svg";

/**
 * Notes:
 *
 * To make this arrow completely customizable, you could pass in props
 * for the rotation. Right now its just hard coded to point right.
 */

export function Arrow() {
  return <StyledImg src={arrowIcon} alt="arrow icon" />;
}

const StyledImg = styled.img`
  height: 0.75rem;
  width: 0.75rem;
  transform: rotate(-90deg);
`;
