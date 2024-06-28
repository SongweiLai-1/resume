import React from "react";
import {Box, Button, HStack} from '@chakra-ui/react';
import { TbPlayerSkipBackFilled,TbPlayerSkipForwardFilled,TbPlayerPauseFilled,TbPlayerPlayFilled } from "react-icons/tb";
import './MusicPlayer.css'

// 修正后的接口定义
interface Action {
    isPlaying: boolean; // 假设 isPlaying 是一个布尔值，表示播放状态
    onPlayPauseClick: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;}

const MusicControl: React.FC<Action> = ({isPlaying,onPlayPauseClick, onPrevClick, onNextClick}) => {

    return (
        <Box>
            <HStack>
                <Button className="button_1" onClick={onPrevClick}><TbPlayerSkipBackFilled/></Button>
                <Button className="button_1" onClick={onPlayPauseClick}>
                    {isPlaying ? <TbPlayerPauseFilled/> : <TbPlayerPlayFilled/>}
                </Button>
                <Button className="button_1" onClick={onNextClick}><TbPlayerSkipForwardFilled/></Button>
            </HStack>
        </Box>);
};

export default MusicControl;