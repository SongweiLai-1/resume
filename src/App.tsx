import { useState } from 'react'
import NavBar from './components/NavBar'
import {Grid, GridItem, SimpleGrid, Stack} from '@chakra-ui/react'
import IntroCard from './components/containers/IntroCard'


function App() {
  const [count, setCount] = useState(0)

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
              <IntroCard/>
          </GridItem>
          <GridItem p="100px" bg="blue.300" area="Edu">
                <p>Edu</p>
          </GridItem>
          <GridItem p="100px" bg="pink.300" area="Exp">
                <p>Exp</p>
          </GridItem>
          <GridItem p="100px" bg="black" area="Others">
                <p>Others</p>
          </GridItem>
          </Stack>
        </Grid>
      </>
  );

}

export default App
