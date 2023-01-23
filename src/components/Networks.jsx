import { Image, Link } from '@chakra-ui/react'

/* eslint-disable react/react-in-jsx-scope */
export const Networks = () => {
  return (
    <>
        <Link
            href='https://github.com/FedericoLuna01'
            _hover={{ outline: '2px solid #8e44ad', borderRadius: 'lg', filter: 'brightness(1.7)' }}
            target='_blank'
            ml={2}
        >
            <Image
                src='/images/icons/github.svg'
                boxSize='45px'
                p={1}
            />
        </Link>
        <Link
            href='https://www.linkedin.com/in/federico-luna-dev/'
            _hover={{ outline: '2px solid #8e44ad', borderRadius: 'lg', filter: 'brightness(1.7)' }}
            target='_blank'
        >
            <Image
                src='/images/icons/linkedin.svg'
                boxSize='45px'
                p={1}
            />
        </Link>
        <Link
            href='https://www.discordapp.com/users/545784665928105984'
            _hover={{ outline: '2px solid #8e44ad', borderRadius: 'lg', filter: 'brightness(1.7)' }}
            target='_blank'
        >
            <Image
                src='/images/icons/discord.svg'
                boxSize='45px'
                p={1}
            />
        </Link>
        <Link
            href='mailto:federicolun4@gmail.com'
            _hover={{ outline: '2px solid #8e44ad', borderRadius: 'lg', filter: 'brightness(1.7)' }}
            target='_blank'
        >
            <Image
                src='/images/icons/mail.svg'
                boxSize='45px'
                p={1}
            />
        </Link>
    </>
  )
}
