import styled from "styled-components";

import { ReactComponent as Play } from "../../../assets/svg/play.svg";
import albumArt from "../../../assets/images/albumArt.png";

interface Props {
  service: string;
}

export function MusicPlayer({ service }: Props) {
  return (
    <StyledContainer>
      <div className="container">
        <img className="album-art" src={albumArt} alt="album art" />
        <Play />
        <p data-testid="service-player">{service}</p>
      </div>
      <div className="progress-bar" />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-bottom: 1rem;
  div.progress-bar {
    margin-top: 0.875rem;
    height: 4px;
    border-bottom: 4px solid ${(props) => props.theme.colors.blueGrey["3"]};
    border-radius: ${(props) => props.theme.borderRadius};

    &::before {
      content: "";
      height: 0.25rem;
      width: 35%;
      display: block;
      border-bottom: 4px solid ${(props) => props.theme.colors.backgroundColor};
      border-radius: ${(props) => props.theme.borderRadius};
    }
  }

  div.container {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 1rem;
    & > circle {
      fill: ${(props) => props.theme.colors.backgroundColor};
    }
    & > path {
      fill: white;
    }
  }
`;
