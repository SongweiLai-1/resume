import React from 'react';
import useTypewriter from './useTypeWriter';

interface Props {
    text: string;
    speed?: number;
}

// TypeWriter component
const TypeWriter = ({ text, speed }: Props) => {
    const displayText = useTypewriter({text, speed});

    return <p>{displayText}</p>;
};

export default TypeWriter;
