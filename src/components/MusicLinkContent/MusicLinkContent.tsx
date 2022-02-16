import { useState } from "react";
import styled from "styled-components";

import { MusicLinkItem } from "./MusicLinkItem";
import { MusicPlayer } from "./MusicPlayer";

import { MusicLinkContentType } from "./types";

interface Props {
  data: MusicLinkContentType[];
}

export function MusicLinkContent({ data }: Props) {
  const [provider, setProvider] = useState<string | null>(null);

  const onClickHandler = (pro: string) => setProvider(pro);

  return (
    <StyledMusicLinkItem>
      {provider && <MusicPlayer service={provider} />}
      {data.map(({ url, icon, title }, idx) => (
        <MusicLinkItem
          key={title}
          icon={icon}
          title={title}
          url={url}
          onClick={onClickHandler}
          last={idx === data.length - 1}
        />
      ))}
    </StyledMusicLinkItem>
  );
}

const StyledMusicLinkItem = styled.div`
  padding: 0.625rem 1rem 0;
`;
