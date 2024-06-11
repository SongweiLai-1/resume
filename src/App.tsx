import React from 'react'
import NavBar from './components/NavBar'
import {Box, Grid, GridItem, HStack, Stack, } from '@chakra-ui/react'
import SendEmail from "./components/SendEmail";
import PhotoGrid from "./components/photoGrid/PhotoGrid";
import ShowIntro from "./components/Introduction/ShowIntro";
import Background1 from "./assets/IntroBackGround.jpg";



import Edu from "./components/EduBox"


function App() {

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

          <GridItem  width="100%" bg="black.300" area="nav">
              <NavBar/>
          </GridItem>
          <Stack>

          <GridItem p="100px"
                    backgroundImage={Background1}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="2000px"
                    area="Int">
              <HStack >
                  <ShowIntro/>
              </HStack>
          </GridItem>
              <GridItem  area="Edu">
                  <Grid  gap={4} mt={2}>
                      <Edu/>
                  </Grid>
              </GridItem>
              <GridItem p="100px" area="Exp">
                  <Box display="flex" alignItems="center" justifyContent="center" >
                      My Photo Grid
                  </Box>
                  <PhotoGrid />
          </GridItem>

          <GridItem p="40px" bg="#345574" area="Others">
              <Box display="flex" alignItems="center" justifyContent="center" height="50vh">
                  <SendEmail />
              </Box>
          </GridItem>
          </Stack>
        </Grid>
      </>
  );

}

export default App
