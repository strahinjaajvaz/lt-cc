import styled from "styled-components";

import logo from "../../assets/images/logo.png";

export function Footer() {
  return (
    <StyledFooter>
      <img src={logo} alt="Footer logo" />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin: auto;
`;
