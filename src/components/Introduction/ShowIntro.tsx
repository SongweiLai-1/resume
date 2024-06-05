import { useTrail, animated } from '@react-spring/web';
import { ReactNode, useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

// @ts-ignore
import TypeWriter from '../typeWriter/TypeWriter'

interface TrailProps {
    children: ReactNode[];
}

const Trail: React.FC<TrailProps> = ({ children }) => {

    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setReverse(true);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    const trails = useTrail(children.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: reverse ? 0 : 1,
        x: reverse ? 20 : 0,
        height: reverse ? 0 : 3,
        from: { opacity: 0, x: 0, height: 0 },
        to: { opacity: 1, x: 30, height: 0 },
        reverse: reverse,
    });

    return (
        <>
            {trails.map((props, index) => (
                <Box key={index} mb="130px" fontSize="200px"> {/* Adjust the fontSize as needed */}
                    <animated.div style={props}>
                        {children[index]}
                    </animated.div>
                </Box>
            ))}
        </>
    );
};


const TypeWriterBox = () => {

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFinish(true);
        }, 8000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {finish ? <TypeWriter text='  This is my personal websit, 100% coding myself. It you interest my skills, please contact me by Email and phone.' /> : null }
        </div>
    );
};

export default function MyComponent() {



    return (
        <div>
            <TypeWriterBox/>
            <Trail>
                <span>Welcome</span>
                <span>The</span>
                <span>Resume</span>
            </Trail>
        </div>
    );
}
