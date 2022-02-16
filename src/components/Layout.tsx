import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}

/**
 * Design decission:
 *
 * For this challenge I chode to replicate the link design that is currently on `https://linktr.ee/guardian`.
 *
 */
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 40rem;
  height: 100%;

  main {
    flex: 1 1 auto;
  }

  header,
  footer {
    flex: 0 1 auto;
  }
`;
