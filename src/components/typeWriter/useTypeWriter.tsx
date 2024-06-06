import React, { useEffect, useState, useRef } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { Flex } from '@chakra-ui/react';

export interface TypeProps {
    text: string;
    speed?: number;
    pauseDuration?: number;
    timeStart?: number;
}

const Blink = ({ blink }: { blink: boolean }) => {
    const trails = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: blink ? 0 : 1,
    });

    return <animated.span style={trails[0]}>|</animated.span>;
}

const UseTypeWriter = ({ text, speed = 50, pauseDuration = 10, timeStart = 100 }: TypeProps) => {

    const [displayText, setText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [blinking, setBlinking] = useState(false);
    const [start, setStart] = useState(false);

    const isPausedRef = useRef(isPaused);
    const totalElapsedTimeRef = useRef(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStart(true);
        }, timeStart);

        return () => clearTimeout(timeout);
    }, [timeStart]);

    useEffect(() => {
        isPausedRef.current = isPaused;
    }, [isPaused]);

    useEffect(() => {
        if (!start) return;

        let i = 0;
        const interval = setInterval(() => {
            if (isTypingComplete) {
                clearInterval(interval);
                return;
            }

            if (isPausedRef.current) return;

            if (totalElapsedTimeRef.current >= pauseDuration) {
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    totalElapsedTimeRef.current = 0;
                }, pauseDuration);
            } else {
                if (i < text.length) {
                    setText(prevText => prevText + text.charAt(i));
                    i++;
                    totalElapsedTimeRef.current += speed;
                } else {
                    clearInterval(interval);
                    setIsTypingComplete(true);
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [start, text, speed, pauseDuration, isTypingComplete]);

    useEffect(() => {
        if (isTypingComplete) {
            setBlinking(false);
            return;
        }

        const blinkInterval = setInterval(() => {
            setBlinking(prevBlink => !prevBlink);
        }, 500);

        return () => clearInterval(blinkInterval);
    }, [isTypingComplete]);

    return (
        <Flex>
            <span>
                {displayText}
                {start ? (!isTypingComplete && <Blink blink={blinking} />) : null}
            </span>
        </Flex>
    );
};

export default UseTypeWriter;
