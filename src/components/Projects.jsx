/* eslint-disable react/react-in-jsx-scope */
import { Heading, Stack } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <Stack
        id='projects'
        minHeight={'100vh'}
        bg={'secondary.900'}
        align='center'
        justify='center'
        gap={20}
        px={10}
    >
        <Heading
            as='h3'
            color={'primary.500'}
        >
            Proyectos
        </Heading>
        <Stack
            gap={5}
            direction={{ base: 'column', md: 'row' }}
        >
            <ProjectCard />
        </Stack>
    </Stack>
  )
}
