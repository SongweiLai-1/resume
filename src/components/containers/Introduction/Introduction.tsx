import React, { useState, useEffect } from 'react';
import { Box, Stack, Wrap, WrapItem, useBreakpointValue, Flex } from '@chakra-ui/react';
import WelcomeTrail from './welcomeTrails/WelcomeTrail';
import ExperienceBox from './experienceTrails/ExperienceBox';
import IntroCardTail from './welcomeTrails/IntroCardTail';
import TypeWriter from '../../function/typeWriter/TypeWriter';

export default function MyComponent() {
    const introduction = ' Welcome to my personal website.';
    const [showWelcomeTrail, setShowWelcomeTrail] = useState(true);
    const [showExperienceBox, setShowExperienceBox] = useState(true);

    const handleWelcomeTrailEnd = () => {
        setShowWelcomeTrail(false);
    };

    // 使用Chakra UI的useBreakpointValue来获取当前断点下的值
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        // 监听isSmallScreen变化，根据变化更新showExperienceBox状态
        setShowExperienceBox(!isSmallScreen);
    }, [isSmallScreen]);

    return (
        <Box h="100vh">
            <Stack>
                <Box ml={30} mt={10}>
                    <TypeWriter text={introduction} timeStart={8000} fontSize="32px" color="white" />
                </Box>

                {showWelcomeTrail && (
                    <Box>
                        <WelcomeTrail onAnimationEnd={handleWelcomeTrailEnd} />
                    </Box>
                )}

                <Box>
                    {isSmallScreen ? (
                        <Stack >
                            <Box >
                                <IntroCardTail speed={11000} />
                            </Box>
                            {showExperienceBox && (
                                <Box w="95%" maxW="600px">
                                    <ExperienceBox speed={11400} />
                                </Box>
                            )}
                        </Stack>
                    ) : (
                        <Flex justify="space-between"  >
                            <Box flex="1" ml="5%">
                                <IntroCardTail speed={11500} />
                            </Box>
                            {showExperienceBox && (
                                <Box w="95%" maxW="700px" mr="5%">
                                    <ExperienceBox speed={12000} />
                                </Box>
                            )}
                        </Flex>
                    )}
                </Box>
            </Stack>
        </Box>
    );
}
