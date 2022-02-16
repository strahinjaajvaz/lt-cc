import { useState } from "react";
import styled from "styled-components";

interface Props {}

export function MusicLink({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleList = () => setIsOpen((prevState) => !prevState);

  return <StyledContainer></StyledContainer>;
}

const StyledContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.listBackgroundColor};
`;
