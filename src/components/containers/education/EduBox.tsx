import { useScroll, animated, useSpring, useTrail } from '@react-spring/web';
import React, { useState} from 'react';
import { Grid, GridItem, Box,Text } from '@chakra-ui/react';
import EduBox from './SchoolSection';
import educationBG from '../../../assets/photos/education_BI.jpg';

const EduCardTrail: React.FC = () => {

    const trails = useTrail(1, {
        config: { mass: 15, tension: 2000, friction: 500 },
        opacity: 1,
        x: 0,
        from: { opacity: 0, x: -200 },
    });

    const textTrails = useTrail(1, {
        config: { mass: 50, tension: 2000, friction: 500 },
        opacity: 1,
        x: 0,
        from: { opacity: 0, x: -200 },
    });

    return (
        <>
            {textTrails.map((style, index) => (
                <animated.div key={index} style={style}>
                    <Text fontSize='2xl'>My Education</Text>
                </animated.div>
            ))}

            {trails.map((style, index) => (
                <animated.div key={index} style={style}>
                        <EduBox />
                </animated.div>
            ))}
        </>
    );
};




const MyComponent: React.FC = () => {
    const [isOpen, setOpen] = useState(false);


    const { scrollYProgress } = useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            //console.log(scrollYProgress);

            if (scrollYProgress > 0.1) {
                //console.log('Edu page isOpen');
                setOpen(true);
            } else {
                setOpen(false);
            }
        },
    });

    const Spring = useSpring({
        backgroundPositionY: scrollYProgress.to([0, 1], [100, 0]).to((y: number) => `${y}%`),
    });

    return (
        <div style={{overflowY: 'scroll' }}>
            <Grid templateColumns="30% 70%" >
                <GridItem >
                    <Box
                        position="relative"
                        zIndex="2"
                        justifyContent="center"
                        alignItems="flex-start"
                        ml="40px">
                        {isOpen ?  <EduCardTrail /> : null}
                    </Box>
                </GridItem>

                <GridItem
                    h="500px"
                    backgroundImage={`url(${educationBG})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="2000px"
                    as={animated.div}
                    style={Spring as any}
                    position="relative"
                    zIndex="1"  // 背景图片设置较低的 z-index 值
                >
                </GridItem>
            </Grid>

        </div>
    );
};

export default MyComponent;
