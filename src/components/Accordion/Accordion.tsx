import { useState } from "react";
import styled from "styled-components";

/**
 * Nice to haves:
 *
 * We can pass in an onClick handler that we can use to send analytics
 *
 */

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleList = () => setIsOpen((prevState) => !prevState);

  return (
    <StyledContainer>
      <StyledButton onClick={handleToggleList}>{title}</StyledButton>
      {isOpen && children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.listBackgroundColor};
`;

const StyledButton = styled.button`
  padding: 0.5rem 0;
  width: 100%;
  text-align: center;
  line-height: 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.color};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.colors.backgroundColor};

  &:hover {
    background-color: ${(props) => props.theme.colors.color};
    color: ${(props) => props.theme.colors.backgroundColor};
  }
`;
