/* eslint-disable react/react-in-jsx-scope */
import { Button, Collapse, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import { ProjectCard } from './ProjectCard'
import { projects, moreProjects } from '../data/data'
import { useState } from 'react'

export const Projects = () => {
//   const [showMoreProjects, setShowMoreProjects] = useState(false)
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <Stack
        id='projects'
        minHeight={'100vh'}
        bg={useColorModeValue('white', 'secondary.900')}
        align='center'
        justify='center'
        gap={20}
        px={{ base: 4, md: 10, lg: 20, xl: 32, '2xl': '72' }}
        pt={20}
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
            <Collapse in={show}>
                <Stack
                    gap={6}
                    wrap='wrap'
                    justify='space-evenly'
                    direction={{ base: 'column', md: 'row' }}
                    pb={12}
                >
                    {
                        moreProjects.map(project => <ProjectCard key={project.id} project={project}/>)
                    }
                </Stack>
            </Collapse>
        </Stack>
        <Button
            bg={'primary.500'}
            color={'white'}
            _hover={{ bg: 'primary.100' }}
            onClick={handleToggle}
        >
            Ver {show ? 'menos' : 'más'} proyectos
        </Button>
    </Stack>
  )
}
