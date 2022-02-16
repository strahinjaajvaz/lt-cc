import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

/**
 * Design decission:
 *
 * For this challenge I chode to replicate the link design that is currently on `https://linktr.ee/guardian`.
 *
 */
const StyledContainer = styled.div`
  max-width: 700px;
  padding: 10px;
  margin: 0 auto;
`;
