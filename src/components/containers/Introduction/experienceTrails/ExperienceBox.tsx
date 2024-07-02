import { useEffect, useState } from "react";
import { animated, useTrail } from "@react-spring/web";
import JobExperienceBox from "../JobExperienceBox";
import { Box } from '@chakra-ui/react';

interface Props {
    speed: number;
}

const ExperienceBox = ({ speed }: Props) => {
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFinish(true);
        }, speed);
        return () => clearTimeout(timeout);
    }, [speed]);

    const trails = useTrail(1, {
        config: { mass: 20, tension: 1000, friction: 200 },
        opacity: finish ? 1 : 0,
        transform: finish ? 'translate3d(0,0,0)' : 'translate3d(0,40px,0)',
    });

    return (
        <Box >
            {trails.map((props, index) => (
                <animated.div
                    key={index}
                    style={props}
                >
                    <JobExperienceBox />
                </animated.div>
            ))}
        </Box>
    );
};

export default ExperienceBox;
