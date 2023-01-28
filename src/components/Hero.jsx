/* eslint-disable react/react-in-jsx-scope */
import { Heading, Image, Stack } from '@chakra-ui/react'
import { Networks } from './Networks'

export const Hero = () => {
  return (
        <Stack
            bg={'secondary.900'}
            minH={'100vh'}
            direction={{ base: 'column', md: 'row' }}
            align='center'
            justify={{ base: 'center', md: 'space-between' }}
            px={{ base: 4, md: 10, lg: 20, xl: 32, '2xl': '72' }}
            gap={{ base: 10, md: 5 }}
            textAlign={{ base: 'center', md: 'left' }}
        >
            <Stack
                gap={5}
                align={{ base: 'center', md: 'flex-start' }}
            >
                <Heading
                    color={'primary.500'}
                    as={'h1'}
                >
                    <span
                        style={{ color: 'white' }}
                    >
                        Hola, soy {' '}
                    </span>
                    Federico Luna
                </Heading>
                <Heading
                    as={'h2'}
                    color={'white'}
                    size={'md'}
                    fontWeight={'normal'}
                >
                    Desarrollador Web - FrontEnd
                </Heading>
                <Stack
                    direction='row'
                    align='center'
                    gap={3}
                >
                    <Networks />
                </Stack>
            </Stack>

                <Image
                    src='/images/hero_img.png'
                    alt="hero_img"
                    boxSize={{ base: '300px', lg: '400px' }}
                />
        </Stack>
  )
}
