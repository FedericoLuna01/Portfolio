/* eslint-disable react/react-in-jsx-scope */
import { Box, Heading, Image, Stack } from '@chakra-ui/react'

export const Hero = () => {
  return (
        <Stack
            bg={'secondary.900'}
            minH={'100vh'}
            direction={'row'}
            align='center'
            justify={'space-between'}
            px={5}
        >
            <Stack
                gap={5}
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
            </Stack>
            <Stack>
                <Box
                    boxSize={'sm'}
                >
                    <Image
                        src='/images/hero_img.png'
                        alt="keyboard"
                    />
                </Box>
            </Stack>
        </Stack>
  )
}
