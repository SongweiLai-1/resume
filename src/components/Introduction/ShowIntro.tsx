import React from 'react';
import { Box, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import WelcomeTrail from './welcomeTrails/WelcomeTrail';
import ExperienceBox from './experienceTrails/ExperienceBox';
import IntroCardTail from './welcomeTrails/IntroCardTail';

// @ts-ignore
import TypeWriter from '../function/typeWriter/TypeWriter';

export default function MyComponent() {
    const introduction = ' Welcome to my personal website.';


    return (

            <Box  >
                <Stack >

                    <Box ml={30}>
                        <TypeWriter text={introduction} timeStart={8000} fontSize="32px" color="white" />
                    </Box>
                        <Box mt={10}>
                            <Wrap spacing={20} justify="center" align="center" >
                                    <WrapItem>
                                        <Box>
                                            <IntroCardTail speed={11500} />
                                        </Box>
                                    </WrapItem>
                                    <WrapItem >
                                        <Box w="600px">
                                            <ExperienceBox speed={12000} />
                                        </Box>
                                    </WrapItem>
                            </Wrap>
                        </Box>
                    <Box>
                        <WelcomeTrail />
                    </Box>
                </Stack>
            </Box>

    );
}
