import React, {useState} from "react";
import MusicControl from "./MusicControl";
import { HStack } from "@chakra-ui/react";

// 定义播放列表条目的类型
interface Track {
  title: string;
  artist: string;
  color: string;
  image: string;
  audioSrc: string;
}

// 定义组件属性的类型
interface MusicPlayerProps {
  track: Track[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, color, image, audioSrc } = track[trackIndex];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };


  return (
      <HStack>
        <MusicControl
            isPlaying={isPlaying}
            onPlayPauseClick={togglePlayPause}
        />
      </HStack>
  );
};

export default MusicPlayer;
