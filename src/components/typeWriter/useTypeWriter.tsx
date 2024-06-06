import React, { useEffect, useState, useRef } from 'react';
import { useTrail, animated } from '@react-spring/web';

interface Props {
    text: string;
    speed?: number;
    pauseDuration?: number;
}

const Blink = () => {
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setBlink(prevBlink => !prevBlink);
            i++;
            if (i > 2) {
                clearInterval(interval);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const trails = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: blink ? 0 : 1,
    });

    return <animated.div style={trails[0]}>|</animated.div>;
}

const UseTypeWriter = ({ text, speed = 50, pauseDuration = 10 }: Props) => {
    const [displayText, setText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const isPausedRef = useRef(isPaused);
    const totalElapsedTimeRef = useRef(0);

    useEffect(() => {
        isPausedRef.current = isPaused;
    }, []);

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            if (isTypingComplete || isPausedRef.current) return;

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
    }, [text, speed, pauseDuration, isTypingComplete]);

    return <>
        {displayText}{!isTypingComplete && <Blink />}
    </>;
};

export default UseTypeWriter;
