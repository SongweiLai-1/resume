import React from 'react'
import NavBar from './components/NavBar'
import {Box, Grid, GridItem, Stack, useBreakpointValue,} from '@chakra-ui/react'
import SendEmail from "./components/SendEmail";
import PhotoGrid from "./components/photoGrid/PhotoGrid";
import ShowIntro from "./components/Introduction/ShowIntro";
import Background1 from "./assets/IntroBackGround.jpg";
import Edu from "./components/EduBox"


function App() {

    const introHeight = useBreakpointValue({ base: '800px', sm: '1200px', md: '1100px', lg: '900px' });

    return (
        <>
            <Grid
                templateRows="auto 1fr"
                templateColumns="1fr"
                h="100vh"
                templateAreas={
                    `"nav nav" 
          "Int Int"
          "Edu Edu"
          "Exp Exp"
          "Others Others"`}>

                <GridItem  h="auto" width="100%" bg="black.300" area="nav">
                    <NavBar/>
                </GridItem>
                <Stack>
                    <GridItem
                        w="auto"
                        h={introHeight}
                        backgroundImage={Background1}
                        bgPosition="center"
                        bgRepeat="no-repeat"
                        bgSize="2000px"
                        area="Int">
                        <Box>
                            <ShowIntro/>
                        </Box>

                    </GridItem>
                    <GridItem  area="Edu">
                            <Edu/>
                    </GridItem>
                    <GridItem p="100px" area="Exp">
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            My Photo Grid
                        </Box>
                        <PhotoGrid />
                    </GridItem>

                    <GridItem
                        h="auto"
                        w="100%"
                        bg="#253849"
                        area="Others">
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <SendEmail />
                        </Box>
                    </GridItem>
                </Stack>
            </Grid>
        </>
    );

}


export default App