import React, { useState } from 'react'
import NavBar from './components/NavBar'
import {Box, Grid, GridItem, HStack, SimpleGrid, Stack} from '@chakra-ui/react'
import IntroCard from './components/containers/IntroCard'
import SendEmail from "./components/SendEmail";
import PhotoGrid from "./components/photoGrid/PhotoGrid";

const skills = [
    'React',
    'HT',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'AWS'
];

const handleEmailClick = (doc:string, action :string) => {
    if(action === "email") {
        console.log("Email clicked");
    }
    if(action === "resume") {
        window.open(doc);
    }
};




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

          <GridItem  width="100%" bg="orange.300" area="nav">
              <NavBar/>
          </GridItem>
          <Stack>

          <GridItem p="100px" bg="green.300" area="Int">
              <HStack>
                  <IntroCard
                      h="550px" w="400px"
                      name="Songwei Lai"
                      avatarUrl="https://bit.ly/dan-abramov"
                      username="Songwei.lai.9"
                      description="Market Trader, Web programmer, Camper and Cafe maker. I like challenge anything news that inspire me. Email me when you interest my experiences"
                      email="songweilai.9@gmail"
                      resume="src/assets/Resume-Songwei.Lai.pdf"
                      skills={skills}
                      onButtonClick={handleEmailClick}
                  />

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
