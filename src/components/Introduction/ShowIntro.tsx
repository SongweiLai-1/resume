import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import WelcomeTrail from './welcomeTrails/WelcomeTrail';
import ExperienceBox from './experienceTrails/ExperienceBox';
import IntroCardTail from './welcomeTrails/IntroCardTail';

// @ts-ignore
import TypeWriter from '../typeWriter/TypeWriter';




export default function MyComponent() {
    const introduction = ' Welcome to my personal website.';

    return (
        <>
            <Grid
                templateRows="auto 1fr"
                templateColumns="1fr"
                gap={4}
                h="590px"
            >
                <GridItem w="100%"  h="80px" ml="40px">
                    <Box  w="100%">
                        <TypeWriter text={introduction} timeStart={8000} fontSize="32px" color="white" />
                    </Box>
                </GridItem>

                <Grid
                    templateColumns="repeat(2, 1fr)">

                    <GridItem w="100%">
                        <IntroCardTail speed={11500}/>
                    </GridItem>

                    <GridItem w="100%" position="relative"  >
                        <Box position="absolute" width="auto" height="100%">
                            <WelcomeTrail />
                        </Box>

                        <Box position="absolute" top={-2} left={20} width="100%" height="100%">
                            <ExperienceBox speed={12000}/>
                        </Box>
                    </GridItem>
                </Grid>
            </Grid>
        </>
    );
}
