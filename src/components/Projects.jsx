/* eslint-disable react/react-in-jsx-scope */
import { Button, Heading, Stack } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'
import { projects, moreProjects } from '../data/data'
import { useState } from 'react'

export const Projects = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const handleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects)
  }
  return (
    <Stack
        id='projects'
        minHeight={'100vh'}
        bg={'secondary.900'}
        align='center'
        justify='center'
        gap={20}
        px={{ base: 4, md: 10, lg: 20, xl: 32, '2xl': '72' }}
    >
        <Heading
            as='h3'
            color={'primary.500'}
        >
            Proyectos
        </Heading>
        <Stack
            gap={6}
            wrap='wrap'
            justify='space-evenly'
            direction={{ base: 'column', md: 'row' }}
        >
            {
                projects.map(project => <ProjectCard key={project.id} project={project}/>)
            }
            {
                showMoreProjects && (
                  moreProjects.map(project => <ProjectCard key={project.id} animation='animate__animated animate__fadeOut' project={project}/>)
                )
            }
        </Stack>
        <Button
            bg={'primary.500'}
            color={'white'}
            _hover={{ bg: 'primary.100' }}
            onClick={handleMoreProjects}
        >
            Ver {showMoreProjects ? 'menos' : 'más'} proyectos
        </Button>
    </Stack>
  )
}
