import React, { useEffect, useState, useRef } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { Flex } from '@chakra-ui/react';

export interface TypeProps {
    text: string;
    speed?: number;
    pauseDuration?: number;
    timeStart?: number;
    onFinish?: () => void; // 添加 onFinish 回调函数
}

const Blink = ({ blink }: { blink: boolean }) => {
    const trails = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: blink ? 0 : 1,
    });

    return <animated.span style={trails[0]}>|</animated.span>;
};

const useTypewriter = ({ text, speed = 50, pauseDuration = 10, timeStart = 100, onFinish }: TypeProps) => {
    const [displayText, setText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [blinking, setBlinking] = useState(false);
    const [start, setStart] = useState(false);
    const typingIndexRef = useRef(0);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStart(true);
        }, timeStart);

        return () => clearTimeout(timeout);
    }, [timeStart]);

    useEffect(() => {
        if (!start) return;

        const interval = setInterval(() => {
            if (isTypingComplete || isPausedRef.current) return;

            if (typingIndexRef.current < text.length) {
                setText((prevText) => prevText + text.charAt(typingIndexRef.current));
                typingIndexRef.current++;
            } else {
                clearInterval(interval);
                setIsTypingComplete(true);
                if (onFinish) onFinish(); // 调用 onFinish 回调函数
            }
        }, speed);

        return () => clearInterval(interval);
    }, [start, text, speed, isTypingComplete, onFinish]);

    useEffect(() => {
        if (isTypingComplete) {
            setBlinking(true);
            return;
        }

        const pauseInterval = setInterval(() => {
            isPausedRef.current = !isPausedRef.current;
        }, pauseDuration);

        return () => clearInterval(pauseInterval);
    }, [isTypingComplete, pauseDuration]);

    useEffect(() => {
        if (isTypingComplete) {
            const blinkInterval = setInterval(() => {
                setBlinking((prevBlink) => !prevBlink);
            }, 500);

            return () => clearInterval(blinkInterval);
        }
    }, [isTypingComplete]);

    return (
        <Flex>
            {displayText}
            {start && <Blink blink={blinking} />}
        </Flex>
    );
};

export default useTypewriter;
