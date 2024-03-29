/* eslint-disable react/react-in-jsx-scope */
import { useColorMode, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      onClick={toggleColorMode}
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleColorMode
