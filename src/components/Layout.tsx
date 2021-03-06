import styled from "styled-components";

/**
 * Design decission:
 *
 * For this challenge I chode to replicate the link design that is currently on `https://linktr.ee/guardian`.
 *
 */

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 40rem;
  height: 100%;

  main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  header,
  footer {
    flex: 0 1 auto;
  }
`;
