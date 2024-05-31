import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Grid, GridItem, SimpleGrid} from '@chakra-ui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Grid templateAreas={
          `"nav nav" 
          "main main"`}>

          <GridItem bg="orange.300" area="nav">
            <p>Hello World</p>
          </GridItem>

          <GridItem bg="green.300" area="main">
            <p>Hello World</p>

          </GridItem>
        </Grid>
      </div>
  );

}

export default App
