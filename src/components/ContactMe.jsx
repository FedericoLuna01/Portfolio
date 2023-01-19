import { Heading, Stack, Image, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

/* eslint-disable react/react-in-jsx-scope */
export const ContactMe = () => {
  return (
    <Stack
        id='contact'
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
            Contacto
        </Heading>
        <Stack
            bg='secondary.500'
            borderRadius='lg'
            align='center'
            px={20}
            py={2}
        >
            <Heading
                as='h4'
                size='md'
                color='white'
                fontWeight='normal'
            >
                Mis redes
            </Heading>
            <Stack
                justify='space-between'
                direction='row'
            >
                <Image
                    src='/images/icons/github.svg'
                    boxSize='40px'
                    sx={{ fill: '#ffffff' }}
                />
                <Image
                    src='/images/icons/github.svg'
                    boxSize='40px'
                    sx={{ fill: '#ffffff' }}
                />
            </Stack>
        </Stack>
        <Stack
            p={5}
            bg='secondary.500'
            borderRadius='lg'
            align='center'
            gap={5}
        >
            <Heading
                as='h4'
                size='md'
                color='white'
                fontWeight='normal'
            >
                Escribime un Email
            </Heading>
            <Stack
                direction='row'
                gap={10}
                align='center'
            >
                <Stack>
                    <Image
                        boxSize={300}
                        src='/images/mail_send.png'
                    />
                </Stack>
                <Stack>
                    <FormControl
                        as='form'
                        display='flex'
                        flexDirection='column'
                        minW={300}
                    >
                        <FormLabel
                            color='white'
                        >
                            Nombre
                        </FormLabel>
                        <Input
                            bg='secondary.100'
                            color='white'
                            focusBorderColor='primary.500'
                            border='none'
                            placeholder='Ingrese su nombre...'
                            _placeholder={{ color: 'white' }}
                            autoFocus
                        />
                        <FormLabel
                            color='white'
                            mt={3}
                        >
                            Email
                        </FormLabel>
                        <Input
                            type='email'
                            bg='secondary.100'
                            color='white'
                            focusBorderColor='primary.500'
                            border='none'
                            placeholder='Ingrese su correo...'
                            _placeholder={{ color: 'white' }}
                        />
                        <FormLabel
                            color='white'
                            mt={3}
                        >
                            Mensaje
                        </FormLabel>
                        <Textarea
                            placeholder='Ingrese su mensaje...'
                            bg='secondary.100'
                            color='white'
                            focusBorderColor='primary.500'
                            border='none'
                            _placeholder={{ color: 'white' }}
                            rows={5}
                            resize='none'
                        />
                        <Button
                            bg='primary.500'
                            color='white'
                            type='submit'
                            w='70%'
                            mx='auto'
                            mt={3}
                            _hover={{ bg: 'primary.100' }}
                        >
                            Enviar
                        </Button>
                        </FormControl>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  )
}
