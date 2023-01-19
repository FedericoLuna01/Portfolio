/* eslint-disable react/react-in-jsx-scope */
import { Heading, Stack, Image, Box, Text } from '@chakra-ui/react'

export const AboutMe = () => {
  return (
        <Stack
            minHeight={'100vh'}
            bg={'secondary.900'}
            align='center'
            justify='center'
            gap={20}
            id='about'
        >
            <Heading
                as={'h3'}
                color={'primary.500'}
            >
                Sobre mi
            </Heading>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="space-between"
            >
                <Box
                    boxSize={'sm'}
                >
                    <Image
                        src='/images/about_me.gif'
                    />
                </Box>
                <Text
                    color="white"
                    maxW={{ base: '100%', md: '50%' }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sapiente consequatur dolor blanditiis ea magnam ipsa distinctio alias ad reprehenderit optio vero, eos officia atque cupiditate eius delectus. Consequatur, deserunt incidunt error cupiditate mollitia libero minus aliquid officia asperiores dolorem debitis facere aut dignissimos nihil culpa nostrum! Ipsa, sint beatae.
                </Text>
            </Stack>
        </Stack>
  )
}
