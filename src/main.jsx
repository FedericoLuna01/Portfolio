import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './assets/theme'

import { Portfolio } from './Portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Portfolio />
    </ChakraProvider>
  </React.StrictMode>
)
