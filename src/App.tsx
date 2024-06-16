import React from 'react';
import NavBar from './components/NavBar';
import { Box, Grid, GridItem, Stack, useBreakpointValue } from '@chakra-ui/react';
import SendEmail from './components/SendEmail';
import PhotoGrid from './components/photoGrid/PhotoGrid';
import ShowIntro from './components/Introduction/ShowIntro';
import Background1 from './assets/IntroBackGround.jpg';
import Edu from './components/EduBox';
import { Element, scroller } from 'react-scroll';

function App() {
    const introHeight = useBreakpointValue({ base: '800px', sm: '1200px', md: '1100px', lg: '800px' });

    const handleSectionClick = (section: string) => {
        if (section === 'Education') {
            // 获取窗口高度
            const windowHeight = window.innerHeight;

            // 设定目标组件的高度，你可以根据实际情况调整
            const componentHeight = 600; // 假设组件高度为 100 像素

            // 计算偏移量，使组件滚动到页面中间
            const offset = (windowHeight - componentHeight) / 2;

            scroller.scrollTo(section, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -offset  // 使用负值来调整偏移方向
            });
        } else {
            // 对于其他部分（Introduction, Experience, Others），使用默认的滚动行为
            scroller.scrollTo(section, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

    return (
        <>
            <Grid
                templateRows="auto 1fr"
                templateColumns="1fr"
                h="100vh"
                templateAreas={`
          "nav"
          "Int"
          "Edu"
          "Exp"
          "Others"
        `}
            >
                <Stack>
                    <GridItem h="auto" width="100%" bg="black.300" area="nav">
                        <Box id="NavBar">
                            <NavBar onSectionClick={handleSectionClick} />
                        </Box>
                    </GridItem>

                    <GridItem
                        w="auto"
                        h={introHeight}
                        backgroundImage={Background1}
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="2000px"
                        area="Int"
                    >
                        <Element name="Introduction">
                            <Box id="Introduction">
                                <ShowIntro />
                            </Box>
                        </Element>
                    </GridItem>

                    <GridItem area="Edu" mt={10}>
                        <Element name="Education">
                            <Box id="Education" >
                                <Edu />
                            </Box>
                        </Element>
                    </GridItem>

                    <GridItem p="100px" area="Exp">
                        <Element name="Experience">
                            <Box display="flex" alignItems="center" justifyContent="center">
                                My Photo Grid
                            </Box>
                            <Box id="PhotoGrid">
                                <PhotoGrid />
                            </Box>
                        </Element>
                    </GridItem>

                    <GridItem h="auto" w="100%" bg="#253849" area="Others">
                        <Element name="Others">
                            <Box id="Others" display="flex" alignItems="center" justifyContent="center">
                                <SendEmail />
                            </Box>
                        </Element>
                    </GridItem>
                </Stack>
            </Grid>
        </>
    );
}

export default App;
