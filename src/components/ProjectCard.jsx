/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Badge, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Link, LinkBox, LinkOverlay, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import Carousel from 'nuka-carousel/lib/carousel'
import { getTechnologyColor } from '../helpers/getColor'

export const ProjectCard = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
        <Card
            bg={useColorModeValue('white', 'secondary.500')}
            maxW='sm'
            zIndex={1}
            boxShadow={useColorModeValue('lg', 'dark-lg')}
        >
            <CardBody>
                <LinkBox>
                    <LinkOverlay
                        href={ project.web !== '' ? project.web : project.github }
                        target='_blank'
                        _hover={{ opacity: 0.8 }}
                    >
                        <Image
                            src={ project.thumbnail }
                            alt={ project.name }
                            objectFit='cover'
                            borderRadius='lg'
                        />
                    </LinkOverlay>
                </LinkBox>
                <Stack
                    gap={1}
                >
                    <Heading
                        as='h4'
                        fontSize='25px'
                        mt={3}
                    >
                        {project.name}
                    </Heading>
                    <Stack
                        direction='row'
                        align='center'
                        wrap={'wrap'}
                    >
                        {
                            project.technologies.map((technology, index) => (
                                <Badge
                                    key={index}
                                    variant='outline'
                                    colorScheme={ getTechnologyColor(technology) }
                                    borderRadius={4}
                                    px='5px'
                                    py='2px'
                                >
                                    {technology}
                                </Badge>
                            ))
                        }
                    </Stack>
                    <Link
                        color='primary.100'
                        fontWeight='bold'
                        onClick={onOpen}
                        width='fit-content'
                    >
                        Mas información...
                    </Link>
                    <Modal isOpen={isOpen} onClose={onClose} size='md'>
                        <ModalOverlay />
                        <ModalContent bg={useColorModeValue('white', 'secondary.500')}>
                        <ModalHeader>{ project.name }</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Carousel
                                defaultControlsConfig={{
                                  nextButtonText: '>',
                                  nextButtonStyle: {
                                    fontWeight: 'bold'
                                  },
                                  prevButtonText: '<',
                                  prevButtonStyle: {
                                    fontWeight: 'bold'
                                  },
                                  pagingDotsStyle: {
                                    fill: 'white',
                                    margin: '0 5px'
                                  }
                                }}
                            >
                                {
                                    project.carousel_images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`carousel image ${index}`}
                                            height='300px'
                                        />
                                    ))
                                }
                            </Carousel>
                            <Text
                                mt={5}
                            >
                                {project.description}
                            </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                bg='primary.500'
                                _hover={{ bg: 'primary.100' }}
                                mr={3}
                                onClick={onClose}
                                color='white'
                            >
                                Cerrar
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    </Stack>
                    <CardFooter
                        px={0}
                    >
                        <ButtonGroup
                            flex={1}
                            color='white'
                        >
                            <Button
                                href={ project.github }
                                target={'_blank'}
                                as={Link}
                                bg='primary.500'
                                _hover={{ bg: 'primary.100' }}
                                w='50%'
                            >
                                <Image
                                    src='/images/icons/github_w.svg'
                                    boxSize='20px'
                                    mr={2}
                                />
                                Repositorio
                            </Button>
                            <Button
                                _hover={{ bg: 'primary.100' }}
                                as={Link}
                                bg='primary.500'
                                href={ project.web }
                                isDisabled={ project.web === null }
                                target={'_blank'}
                                w='50%'
                            >
                                <Image
                                    src='/images/icons/internet.svg'
                                    boxSize='20px'
                                    mr={2}
                                />
                                Sitio web
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </CardBody>
            </Card>
  )
}
