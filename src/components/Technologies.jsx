/* eslint-disable react/react-in-jsx-scope */
import { Heading, Image, Stack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'

const TECHNOLOGIES = [
  {
    name: 'HTML',
    src: '/images/icons/html-5.svg'
  },
  {
    name: 'CSS',
    src: '/images/icons/css3.svg'
  },
  {
    name: 'Javascript',
    src: '/images/icons/javascript.svg'
  },
  {
    name: 'Typescript',
    src: '/images/icons/typescript.svg'
  },
  {
    name: 'React',
    src: '/images/icons/react.svg'
  },
  {
    name: 'Nodejs',
    src: '/images/icons/nodejs.svg'
  },
  {
    name: 'Tailwind',
    src: '/images/icons/tailwind.svg'
  },
  {
    name: 'Chakra UI',
    src: '/images/icons/chakraui.svg'
  },
  {
    name: 'Nextjs',
    src: '/images/icons/next-js.svg'
  }
]

export const Technologies = () => {
  return (
    <Stack
        bg={useColorModeValue('white', 'secondary.900')}
        minHeight={'100vh'}
        justify='center'
        align='center'
        gap={5}
        id='technologies'
        px={{ base: 4, md: 10, lg: 20, xl: 32, '2xl': '72' }}
        textAlign={{ base: 'center', md: 'left' }}
    >
        <Heading
            as='h3'
            color={'primary.500'}
        >
            Stack
        </Heading>
        <Text>
          Estas son las tecnologías con las que más cómodo me siento trabajando.
        </Text>
        <Stack
          bg={useColorModeValue('white', 'secondary.900')}
          p={4}
          px={10}
          borderRadius='lg'
          align='center'
          justify='space-evenly'
          direction='row'
          gap={5}
          wrap='wrap'
          boxShadow='dark-lg'
        >
          {
            TECHNOLOGIES.map((tech, index) => (
              <Tooltip
                key={tech.name}
                label={tech.name}
                placement='top'
                bg='primary.500'
                hasArrow
                arrowSize={10}
              >
                <Image
                  boxSize={index === 0 ? '50px' : '45px'}
                  src={tech.src}
                  alt={tech.name}
                />
              </Tooltip>
            ))
          }
        </Stack>
    </Stack>
  )
}
