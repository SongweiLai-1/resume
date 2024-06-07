import {useEffect, useState} from "react";
import {animated, useTrail} from "@react-spring/web";
import JobExperienceBox from "../JobExperienceBox";

interface Props {
    speed: number;
}
const ExperienceBox = ({speed} : Props) => {
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFinish(true);
        }, speed);
        return () => clearTimeout(timeout);
    }, []);

    const trails = useTrail(1, {
        config: { mass: 20, tension: 1000, friction: 200 },
        opacity: finish ? 1 : 0,
        x: finish ? 0 : 40  ,
        height: finish ? 0 : 0,
    });

    return (
        <div>
            {trails.map((props, index) => (
                <animated.div key={index} style={props}>
                    <JobExperienceBox/>
                </animated.div>
            ))}
        </div>
    );
};

export default ExperienceBox;