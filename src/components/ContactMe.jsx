import { Heading, Stack, Image, FormControl, FormLabel, Input, Textarea, Button, useToast, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { Networks } from './Networks'
import emailjs from '@emailjs/browser'

/* eslint-disable react/react-in-jsx-scope */
export const ContactMe = () => {
  const toast = useToast()
  const errorToast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = 'error-id'

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      if (!errorToast.isActive(id)) {
        errorToast({
          id,
          description: 'Todos los campos son obligatorios',
          status: 'error',
          isClosable: true
        })
      }
      return
    }

    const templateParams = {
      from_name: name,
      email_id: email,
      message
    }

    // enviar mail
    const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const VITE_EMAIL_TEMPLATE = import.meta.env.VITE_EMAIL_TEMPLATE
    const VITE_ID = import.meta.env.VITE_ID

    emailjs.send(VITE_SERVICE_ID, VITE_EMAIL_TEMPLATE, templateParams, VITE_ID)

    toast({
      description: 'Mensaje enviado correctamente',
      status: 'success',
      isClosable: true
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <Stack
        id='contact'
        minHeight={'100vh'}
        bg={useColorModeValue('white', 'secondary.900')}
        align='center'
        justify='center'
        gap={20}
        px={10}
        pb={40}
        pt={ 32 }
    >
        <Heading
            as='h3'
            color={'primary.500'}
        >
            Contacto
        </Heading>
        <Stack
            bg={useColorModeValue('white', 'secondary.500')}
            borderRadius='lg'
            align='center'
            boxShadow='dark-lg'
            px={20}
            py={2}
        >
            <Heading
                as='h4'
                size='md'
                fontWeight='normal'
                textAlign='center'
            >
                Mis redes
            </Heading>
            <Stack
                justify='space-evenly'
                direction='row'
                align='center'
                gap={5}
                wrap='wrap'
            >
                <Networks />
            </Stack>
        </Stack>
        <Stack
            p={5}
            bg={useColorModeValue('white', 'secondary.500')}
            borderRadius='lg'
            align='center'
            gap={5}
            boxShadow='dark-lg'
        >
            <Heading
                as='h4'
                size='md'
                color='font'
                fontWeight='normal'
            >
                Escribime un Email
            </Heading>
            <Stack
                gap={10}
                align='center'
                flexDirection={{ base: 'column-reverse', md: 'row' }}
            >
                <Stack>
                    <Image
                        boxSize={300}
                        src='/images/mail_send.png'
                        h={{ base: 200, md: 300 }}
                    />
                </Stack>
                <Stack>
                    <FormControl
                        as='form'
                        display='flex'
                        flexDirection='column'
                        w={{ base: 200, md: 400 }}
                        onSubmit={handleSubmit}
                    >
                        <FormLabel>
                            Nombre
                        </FormLabel>
                        <Input
                            bg={useColorModeValue('gray.100', 'secondary.100')}
                            color='font'
                            focusBorderColor='primary.500'
                            border='none'
                            placeholder='Ingrese su nombre...'
                            _placeholder={{ color: 'font' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormLabel
                            color='font'
                            mt={3}
                        >
                            Email
                        </FormLabel>
                        <Input
                            type='email'
                            bg={useColorModeValue('gray.100', 'secondary.100')}
                            color='font'
                            focusBorderColor='primary.500'
                            border='none'
                            placeholder='Ingrese su correo...'
                            _placeholder={{ color: 'font' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormLabel
                            color='font'
                            mt={3}
                        >
                            Mensaje
                        </FormLabel>
                        <Textarea
                            placeholder='Ingrese su mensaje...'
                            bg={useColorModeValue('gray.100', 'secondary.100')}
                            color='font'
                            focusBorderColor='primary.500'
                            border='none'
                            _placeholder={{ color: 'font' }}
                            rows={5}
                            resize='none'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
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
