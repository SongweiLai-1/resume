import React, {useEffect, useRef, useState} from "react";
import MusicControl from "./MusicControl";
import { HStack, Image, Box, Text } from "@chakra-ui/react";
import './MusicPlayer.css'

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
  tracks: Track[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
      console.log(trackIndex)
      setIsPlaying(true);

    } else {
      setTrackIndex(trackIndex - 1);
      console.log(trackIndex)
      setIsPlaying(true);

    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
      console.log(trackIndex)
      setIsPlaying(true);

    } else {
      setTrackIndex(0);
      console.log(trackIndex)
      setIsPlaying(true);

    }
  };

  useEffect (() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    audioRef.current.play();

  }, [trackIndex]);

  return (
      <Box>
        <HStack>
            <Text fontSize='xl'>{title}</Text>
            <Text>-</Text>
            <Text fontSize='xs'>{artist}</Text>

          <MusicControl
              isPlaying={isPlaying}
              onPlayPauseClick={togglePlayPause}
              onPrevClick={toPrevTrack}
              onNextClick={toNextTrack}
          />
          <Box overflow="hidden">
            <Image
                src={image}
                borderRadius='full'
                boxSize='60px'
                className={isPlaying ? "rotate" : ""}/>
          </Box>
        </HStack>
      </Box>
  );
};

export default MusicPlayer;
