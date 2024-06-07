import React, { useState } from 'react'
import NavBar from './components/NavBar'
import {Box, Grid, GridItem, HStack, SimpleGrid, Stack} from '@chakra-ui/react'
import IntroCard from './components/Introduction/IntroCard'
import SendEmail from "./components/SendEmail";
import PhotoGrid from "./components/photoGrid/PhotoGrid";
import ShowIntro from "./components/Introduction/ShowIntro";

import Background1 from "./assets/IntroBackGround.jpg";

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
              <HStack>
                  <ShowIntro/>
              </HStack>

          </GridItem>
          <GridItem p="100px" bg="blue.300" area="Edu">
                <p>Edu</p>
          </GridItem>
          <GridItem p="100px" bg="pink.300" area="Exp">
              <PhotoGrid />
          </GridItem>
          <GridItem p="100px" bg="black" area="Others">
                <p>Others</p>
              <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
                  <SendEmail />
              </Box>
          </GridItem>
          </Stack>
        </Grid>
      </>
  );

}

export default App
