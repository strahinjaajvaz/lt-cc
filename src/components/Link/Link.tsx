import styled from "styled-components";

interface Props {
  url: string;
  title: string;
}

/**
 * Notes:
 *
 * If we were going to use analytics for monitoring when urls are clickect,
 * then there are a couple of ways to handle this.
 *
 * 1. We could have the url hit our server with some analytics data and then
 * have the server redirect to the url that was desired.
 * e.g. www.analytics.linktr.ee?redirect_url=${url}
 *
 * 2. We could have an onClick event that will trigger the analytics to be run.
 */

export function Link({ url, title }: Props) {
  return (
    <StyledLink href={url} target="_blank">
      <div>
        <p>{title}</p>
      </div>
    </StyledLink>
  );
}

const StyledLink = styled.a`
  text-decoration: none;

  div {
    padding: 8px 0;
    text-align: center;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.color};
    border-radius: ${(props) => props.theme.borderRadius};
    border: 2px solid ${(props) => props.theme.colors.backgroundColor};

    &:hover {
      background-color: ${(props) => props.theme.colors.color};
      color: ${(props) => props.theme.colors.backgroundColor};
    }
  }

  p {
    line-height: 1.5rem;
    font-size: 0.875rem;
    margin: 0;
  }
`;
