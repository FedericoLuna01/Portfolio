/* eslint-disable react/react-in-jsx-scope */
import { Heading, Stack, Image, Text } from '@chakra-ui/react'

export const AboutMe = () => {
  return (
        <Stack
            minHeight={'100vh'}
            bg={'secondary.900'}
            align='center'
            justify='center'
            gap={20}
            id='about'
            px={{ base: 4, md: 10, lg: 20, xl: 32, '2xl': '72' }}
            textAlign={{ base: 'center', md: 'left' }}
        >
            <Heading
                as={'h3'}
                color={'primary.500'}
            >
                Sobre mi
            </Heading>
            <Stack
                direction={{ base: 'column-reverse', md: 'row' }}
                align="center"
                justify="space-between"
            >
                    <Image
                        src='/images/about_me.gif'
                        boxSize={{ base: '300px', lg: '400px' }}
                    />
                <Text
                    color="white"
                    maxW={{ base: '100%', md: '50%' }}
                    fontSize={{ base: 'md', md: 'lg' }}
                >
                    Soy un desarrollador web FullStack aunque el FrontEnd es mi fuerte, tengo 20 años y vivo en Argentina. Actualmente estoy cursando la carrera de ingeniería en sistemas en la Universidad Tecnologia Nacional. Descubri que me apasiona programar poco antes de entrar a la facultad pero esta me la reforzó. Además de la carrera empecé a hacer cursos de programacion por mi cuenta ya sea gratuitos o en Udemy.
                </Text>
            </Stack>
        </Stack>
  )
}
