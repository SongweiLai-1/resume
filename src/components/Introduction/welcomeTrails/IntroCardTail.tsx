import React, {useEffect, useState} from "react";
import {animated, useTrail} from "@react-spring/web";
import IntroCard from "../IntroCard";

const handleEmailClick = (doc: string, action: string) => {
    if (action === "email") {
        console.log("Email clicked");
    }
    if (action === "resume") {
        window.open(doc);
    }
};

const skills = [
    'React',
    'HT',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'AWS'
];

interface Props {
    speed: number;
}
const IntroCardTail = ({speed}: Props) => {
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
        x: finish ? 40 : 0   ,
        height: finish ? 0 : 0,
    });

    return (
        <div>
            {trails.map((props, index) => (
                <animated.div key={index} style={props}>
                    <IntroCard
                        h="500px"
                        w="400px"
                        name="Songwei Lai"
                        avatarUrl="https://bit.ly/dan-abramov"
                        username="Songwei.lai.9"
                        description="Market Trader, Web programmer, Camper and Cafe maker. I like challenge anything news that inspire me. Email me when you interest my experiences"
                        email="songweilai.9@gmail"
                        resume="src/assets/Resume-Songwei.Lai.pdf"
                        skills={skills}
                        onButtonClick={handleEmailClick}
                    />
                </animated.div>
            ))}
        </div>
    );
};

export default IntroCardTail;