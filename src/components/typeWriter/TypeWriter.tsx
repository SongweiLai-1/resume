import React from 'react';
import useTypewriter from './useTypeWriter';
import {TypeProps} from './useTypeWriter';



// TypeWriter component
const TypeWriter = ({ text, speed , timeStart }: TypeProps) => {


    const displayText = useTypewriter({text, speed, timeStart});

    return <p>{displayText}</p>;

};
export default TypeWriter;
