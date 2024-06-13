import React from 'react';
import { Box, Stack, Wrap, WrapItem, useBreakpointValue } from '@chakra-ui/react';
import WelcomeTrail from './welcomeTrails/WelcomeTrail';
import ExperienceBox from './experienceTrails/ExperienceBox';
import IntroCardTail from './welcomeTrails/IntroCardTail';

// @ts-ignore
import TypeWriter from '../typeWriter/TypeWriter';

export default function MyComponent() {
    const introduction = ' Welcome to my personal website.';


    return (

            <Box  >
                <Stack >

                    <Box ml={30}>
                        <TypeWriter text={introduction} timeStart={8000} fontSize="32px" color="white" />
                    </Box>

                    <Wrap spacing="100px" justify="center" align="center">
                            <WrapItem>
                                <IntroCardTail speed={11500} />
                            </WrapItem>
                            <WrapItem mt={{base: 500, sm: 500,   md: 500, lg: 100}}>
                                <ExperienceBox speed={12000} />
                            </WrapItem>
                    </Wrap>

                    <Box>
                        <WelcomeTrail />
                    </Box>
                </Stack>
            </Box>

    );
}
