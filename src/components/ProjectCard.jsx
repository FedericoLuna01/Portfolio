import { Badge, Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'

/* eslint-disable react/react-in-jsx-scope */
export const ProjectCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
        <Card
            bg='secondary.500'
            maxW='sm'
        >
            <CardBody>
                <Image
                    src='/images/proyecto1.png'
                    objectFit='cover'
                    borderRadius='lg'
                />
                <Stack>
                    <Heading
                        color='white'
                        as='h4'
                        size='md'
                        mt={3}
                    >
                        Proyecto 1
                    </Heading>
                    <Stack
                        direction='row'
                    >
                        <Badge
                            variant='outline'
                            colorScheme='yellow'
                            borderRadius={4}
                            px='5px'
                            py='2px'
                        >
                            Javascript
                        </Badge>
                        <Badge
                            variant='outline'
                            colorScheme='orange'
                            borderRadius={4}
                            px='5px'
                            py='2px'
                        >
                            HTML
                        </Badge>
                        <Badge
                            variant='outline'
                            colorScheme='cyan'
                            borderRadius={4}
                            px='5px'
                            py='2px'
                        >
                            REACT
                        </Badge>
                    </Stack>
                    {/* modal */}
                    <Button
                        onClick={onOpen}
                    >
                        Mas información...
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose} size='md'>
                        <ModalOverlay />
                        <ModalContent bg='secondary.500' color='white'>
                        <ModalHeader>Proyecto 1</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat a necessitatibus, vel voluptates odio quo? Perspiciatis illum quod beatae quibusdam!
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                bg='primary.500'
                                _hover={{ bg: 'primary.100' }}
                                mr={3}
                                onClick={onClose}
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
                        >
                            <Button
                                href='https://youtube.com'
                                target={'_blank'}
                                as={Link}
                                bg='primary.500'
                                _hover={{ bg: 'primary.100' }}
                                w='50%'
                            >
                                <Image
                                    src='/images/icons/github.svg'
                                    boxSize='20px'
                                    mr={2}
                                />
                                Repositorio
                            </Button>
                            <Button
                                href='https://youtube.com'
                                target={'_blank'}
                                as={Link}
                                bg='primary.500'
                                _hover={{ bg: 'primary.100' }}
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
