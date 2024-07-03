import React from 'react';
import useTypeWriter, { TypeProps } from './useTypeWriter';

// Extended TypeProps to include style
interface ExtendedTypeProps extends TypeProps {
    fontSize?: string;
    color?: string;
    onFinish?: () => void; // Rename isFinish to onFinish
}

// TypeWriter component
const TypeWriter = ({ text, speed, timeStart, fontSize = '16px', color = 'black', onFinish }: ExtendedTypeProps) => {
    const displayText = useTypeWriter({ text, speed, timeStart, onFinish }); // Pass onFinish to useTypewriter

    return (
        <div style={{ width: 'auto', height: 'auto' }}>
            <span style={{ fontSize, color }}>{displayText}</span>
        </div>
    );
};

export default TypeWriter;
