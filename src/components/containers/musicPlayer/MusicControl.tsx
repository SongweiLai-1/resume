import React from "react";
import {Button, HStack} from '@chakra-ui/react';
import { TbPlayerSkipBackFilled,TbPlayerSkipForwardFilled,TbPlayerPauseFilled,TbPlayerPlayFilled } from "react-icons/tb";

// 修正后的接口定义
interface Action {
    isPlaying: boolean; // 假设 isPlaying 是一个布尔值，表示播放状态
    onPlayPauseClick: () => void;

}

const MusicControl: React.FC<Action> = ({isPlaying,onPlayPauseClick}) => {

    return (
        <HStack>
        <Button><TbPlayerSkipBackFilled/></Button>

            <Button onClick={onPlayPauseClick}>
                {isPlaying ? <TbPlayerPauseFilled/> : <TbPlayerPlayFilled/>}
            </Button>

        <Button><TbPlayerSkipForwardFilled/></Button>
    </HStack>);
};

export default MusicControl;