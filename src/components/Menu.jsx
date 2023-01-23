/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Link } from '@chakra-ui/react'

export const Menu = (props = null) => {
  const { onClose } = props

  const handleClick = () => {
    onClose()
    window.scrollTo(0, 100)
  }

  return (
    <>
        <Link
            color="white"
            href="#about"
            onClick={handleClick}
        >
            Sobre mi
        </Link>
        <Link
            color="white"
            href="#technologies"
        >
            Tecnologías
        </Link>
        <Link
            color="white"
            href="#projects"
        >
            Proyectos
        </Link>
        <Link
            color="white"
            href="#contact"
        >
            Contactáme
        </Link>
        <Button
            bg={'primary.500'}
            color={'white'}
            _hover={{ bg: 'primary.100' }}
        >
            Descargar CV
        </Button>
    </>
  )
}
