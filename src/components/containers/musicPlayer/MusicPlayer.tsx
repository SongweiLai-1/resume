import React, { useEffect, useRef, useState } from "react";
import MusicControl from "./MusicControl";
import { HStack, Image, Box, Text } from "@chakra-ui/react";
import './MusicPlayer.css';

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
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toPrevTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  const toNextTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  useEffect(() => {
    if (isPlaying && hasUserInteracted) {
      audioRef.current.play().catch(error => {
        console.error('Error attempting to play', error);
        setIsPlaying(false); // Set isPlaying to false if playback fails
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasUserInteracted]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    if (isPlaying && hasUserInteracted) {
      audioRef.current.play().catch(error => {
        console.error('Error attempting to play', error);
        setIsPlaying(false); // Set isPlaying to false if playback fails
      });
    }
  }, [trackIndex, audioSrc, isPlaying, hasUserInteracted]);

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

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
                boxSize='55px'
                className={isPlaying ? "rotate" : ""}
            />
          </Box>
        </HStack>
      </Box>
  );
};

export default MusicPlayer;
