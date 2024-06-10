import { useScroll, animated, useSpring } from '@react-spring/web';
import React from 'react';
import { Grid, GridItem,Box } from '@chakra-ui/react';
import EduBox from './components/containers/EducationBox';
import educationBG from './assets/photos/education_BI.jpg'

export default function MyComponent() {
    const { scrollYProgress } = useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            console.log(scrollYProgress);
        },
    });

    const Spring = useSpring({
        backgroundPositionY: scrollYProgress.to([0, 1], [100, 0]).to(y => `${y}%`),
    });

    return (
        <div style={{ height: 'auto', overflowY: 'scroll' }}>
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <GridItem>
                </GridItem>
                <GridItem
                    w="900px"
                    h="500px"
                    backgroundImage={`url(${educationBG})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="2000px"
                    as={animated.div}
                    style={Spring as any}
                ><Box mt="100px" ml="-200px" >
                    <EduBox />
                </Box></GridItem>
            </Grid>
        </div>
    );
}
