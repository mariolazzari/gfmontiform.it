"use client";

import { InstagramEmbed } from "react-social-media-embed";
import { VideoPlayerProps } from "./VideoPlayerProps";
import { useEffect, useState } from "react";

export function VideoPlayer({ url, width = 350 }: VideoPlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <InstagramEmbed url={url} width={width} aria-label={url} />;
}
