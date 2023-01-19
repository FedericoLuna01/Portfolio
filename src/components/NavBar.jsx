/* eslint-disable react/react-in-jsx-scope */
import { Button, Heading, Link, Stack } from '@chakra-ui/react'

export const NavBar = () => {
  return (
    <Stack
      as='nav'
      pos={'fixed'}
      w={'100%'}
      bg={'secondary.900'}
      h={'70px'}
      justify={'space-between'}
      align={'center'}
      direction={'row'}
      px={5}
    >
      <Heading
        as={'h1'}
        size={'lg'}
        color='primary.500'
      >
        Portfolio
      </Heading>
      <Stack
        as='ul'
        direction={'row'}
        justify={'space-between'}
        align={'center'}
        gap={5}
      >
        <Link
          color="white"
          href="#about"
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
      </Stack>
    </Stack>
  )
}
