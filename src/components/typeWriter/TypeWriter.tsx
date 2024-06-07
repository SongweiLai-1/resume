import React from 'react';
import useTypewriter from './useTypeWriter';
import { TypeProps } from './useTypeWriter';

// Extended TypeProps to include style
interface ExtendedTypeProps extends TypeProps {
    fontSize?: string;
    color?: string;
}

// TypeWriter component
const TypeWriter = ({ text, speed, timeStart, fontSize = '16px', color = 'black' }: ExtendedTypeProps) => {
    const displayText = useTypewriter({ text, speed, timeStart });

    return (
        <div style={{ width: 'auto', height: 'auto' }}>
            <p style={{ fontSize, color }}>{displayText}</p>
        </div>
    );
};

export default TypeWriter;
