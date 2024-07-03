import React, { useState, useEffect } from 'react';



const hideNav = () => {

    const [lastPositionY, setLastPositionY] = useState(window.scrollY);
    const [scrollDirection, setScrollDirection] = useState<string>('');


    useEffect(() => {
        const handlePositionY = () =>{
            const currentPositionY = window.scrollY;

            if (currentPositionY > lastPositionY) {
                console.log('Scrolling down');
                setScrollDirection('down')
            } else {
                console.log('Scrolling up');
                setScrollDirection('up')
            }

            setLastPositionY(currentPositionY)
        }

        window.addEventListener('scroll', handlePositionY);

        return () => {
            window.removeEventListener('scroll', handlePositionY);
        };
    }, [lastPositionY])

    return scrollDirection;
}

export default hideNav