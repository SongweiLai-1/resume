import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
  </React.StrictMode>,
)
