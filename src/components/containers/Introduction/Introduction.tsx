import React, { useState, useEffect } from 'react';
import { Box, Stack, useBreakpointValue, Flex } from '@chakra-ui/react';
import WelcomeTrail from './welcomeTrails/WelcomeTrail';
import ExperienceBox from './welcomeTrails/ExperienceBox';
import IntroCardTail from './welcomeTrails/IntroCardTail';
import TypeWriter from '../../function/typeWriter/TypeWriter';

export default function MyComponent() {
    const introduction = ' Welcome to my personal website.';
    const [showWelcomeTrail, setShowWelcomeTrail] = useState(true);
    const [showExperienceBox, setShowExperienceBox] = useState(true);
    const [typeFinish, setTypeFinish] = useState(false);

    const isFinish = () => {
        setTypeFinish(true);
        console.log('Typing animation complete!');
    };

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
                    <TypeWriter text={introduction} timeStart={8000} onFinish={isFinish} fontSize="32px" color="white" />
                </Box>

                {showWelcomeTrail && (
                    <Box>
                        <WelcomeTrail onAnimationEnd={handleWelcomeTrailEnd} />
                    </Box>
                )}

                <Box>
                    {isSmallScreen ? (
                        <Stack>
                            {typeFinish && (
                                <>
                                    <Box>
                                        <IntroCardTail speed={1000} />
                                    </Box>
                                    {showExperienceBox && (
                                        <Box w="95%" maxW="600px">
                                            <ExperienceBox speed={1500} />
                                        </Box>
                                    )}
                                </>
                            )}
                        </Stack>
                    ) : (
                        <Flex justify="space-between">
                            {typeFinish && (
                                <>
                                    <Box flex="1" ml="10%">
                                        <IntroCardTail speed={1000} />
                                    </Box>
                                    {showExperienceBox && (
                                        <Box w="95%" maxW="700px" mr="10%">
                                            <ExperienceBox speed={1500} />
                                        </Box>
                                    )}
                                </>
                            )}
                        </Flex>
                    )}
                </Box>
            </Stack>
        </Box>
    );
}
