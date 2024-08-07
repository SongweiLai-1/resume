import React, {useEffect, useState} from 'react';
import NavBar from './components/containers/NavBar';
import { Box, Grid, GridItem, Stack, useBreakpointValue } from '@chakra-ui/react';
import Email from './components/containers/emailBox/Email';
import PhotoGrid from './components/containers/photoGrid/PhotoGrid';
import ShowIntro from './components/containers/Introduction/Introduction';
import Background1 from './assets/IntroBackGround.jpg';
import Edu from './components/containers/education/EduBox';
import { Element, scroller } from 'react-scroll';
import hideNav from './components/function/hideNav';
import './App.css';
function App() {
    const introHeight = useBreakpointValue({ base: '800px', sm: '1400px', md: '1400px', lg: '800px' });
    const [hide,setHide] = useState(false)

    const scrollDirection = hideNav();

    useEffect(() => {
        console.log(`Scroll direction: ${scrollDirection}`);
        if (scrollDirection === 'down'){
            setHide(true)
        } else {
            setHide(false)
        }
    }, [scrollDirection]);

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
          "Exp"          
          "Edu"
          "grid"
          "Others"
        `}
            >
                <Stack>

                    <GridItem h="auto"
                              width="100%"
                              zIndex="10"
                              area="nav"
                              position="fixed"
                              className={`navbar ${hide ?  'hidden' :'visible' }`}
                    >
                            <NavBar onSectionClick={handleSectionClick} />
                    </GridItem>


                    <GridItem
                        w="auto"
                        h="auto"
                        backgroundImage={Background1}
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="2000px"
                        area="Int"
                    >
                        <Element name="Introduction">
                            <Box h="100%" id="Introduction">
                                <ShowIntro />
                            </Box>
                        </Element>
                    </GridItem>

                    <GridItem>
                        <Element name="Experience">
                            <Box  id="Experience" display="flex" alignItems="center" justifyContent="center">
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

                    <GridItem p="100px" area="grid">
                        <Element name="PhotoGrid">

                            <Box id="PhotoGrid">
                                <PhotoGrid />
                            </Box>
                        </Element>
                    </GridItem>

                    <GridItem h="auto" w="100%" bg="#253849" area="Others">
                        <Element name="Others">
                            <Box id="Others" display="flex" alignItems="center" justifyContent="center">
                                <Email />
                            </Box>
                        </Element>
                    </GridItem>
                </Stack>
            </Grid>
        </>
    );
}

export default App;
