import React from 'react';
import { Box, Container} from '@chakra-ui/react';
import WelcomeTrail from './welcomeTrails/WelcomeTrail';
import ExperienceBox from './experienceTrails/ExperienceBox';
import IntroCardTail from './welcomeTrails/IntroCardTail';

// @ts-ignore
import TypeWriter from '../typeWriter/TypeWriter';




export default function MyComponent() {
    const introduction = ' Welcome to my personal website.';

    return (
        <>
            <Container   p={{ sm: 30, md: 50, lg: 80 }}>

                    <Box  p={{ sm: 8, md: 12, lg: 18 }} >
                        <TypeWriter text={introduction} timeStart={8000} fontSize="32px" color="white" />
                    </Box>

                    <Box w="100%">
                        <IntroCardTail speed={11500}/>
                    </Box>

                    <Box position="absolute" width="auto" height="100%">
                         <WelcomeTrail />
                    </Box>

                    <Box position="absolute"  width="100%" height="100%">
                         <ExperienceBox speed={12000}/>
                    </Box>
            </Container>

        </>
    );
}
