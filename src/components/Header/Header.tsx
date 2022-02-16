import styled from "styled-components";

interface Props {
  iconUrl: string;
  username: string;
}

export function Header({ iconUrl, username }: Props) {
  return (
    <StyledHeader>
      <img
        src={iconUrl}
        alt={`${username}s avatar`}
        data-testid="header-avatar"
      />
      <h1>{username}</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }

  & > h1 {
    color: ${(props) => props.theme.colors.color};
    line-height: 1.75rem;
    font-size: 1rem;
    font-weight: normal;
  }
`;
