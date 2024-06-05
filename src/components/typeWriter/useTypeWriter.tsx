import React, { useEffect } from 'react';

interface Props {
    text: string;
    speed?: number;
}

const UseTypeWriter = ({ text, speed = 50 }: Props ) => {
    const [displayText, setText] = React.useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setText(prevText => prevText + text.charAt(i) );
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [text, speed]);

    return(

        <>{displayText}｜</>

    )

};

export default UseTypeWriter;
