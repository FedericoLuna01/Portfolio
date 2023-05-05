import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: {
    primary: {
      100: '#CC62F9',
      500: '#8E44AD',
      900: '#642F7A'
    },
    secondary: {
      100: '#525252',
      500: '#373737',
      900: '#252525'
    },
    fontColor: {
      100: '#ffffff'
    }
  }
})

export default theme
