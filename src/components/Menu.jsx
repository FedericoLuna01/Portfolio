/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Link } from '@chakra-ui/react'

export const Menu = (props = null) => {
  const { onClose } = props
  return (
    <>
        <Link
            color="white"
            href="#about"
            onClick={onClose}
        >
            Sobre mi
        </Link>
        <Link
            color="white"
            href="#technologies"
            onClick={onClose}
        >
            Tecnologías
        </Link>
        <Link
            color="white"
            href="#projects"
            onClick={onClose}
        >
            Proyectos
        </Link>
        <Link
            color="white"
            href="#contact"
            onClick={onClose}
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
