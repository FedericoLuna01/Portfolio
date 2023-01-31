/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Link } from '@chakra-ui/react'

export const Menu = (props = null) => {
  return (
    <>
        <Link
            color="white"
            href="#about"
            value='asd'
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
