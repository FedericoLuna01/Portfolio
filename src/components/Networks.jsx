import { Image, Link, Tooltip } from '@chakra-ui/react'

const NETWORKS = [
  {
    name: 'Github',
    href: 'https://github.com/FedericoLuna01',
    icon: '/images/icons/github.svg',
    tooltip: 'FedericoLuna01'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/federico-luna-dev/',
    icon: '/images/icons/linkedin.svg',
    tooltip: 'in/federico-luna-dev'
  },
  {
    name: 'Email',
    href: 'mailto:federicolun4@gmail.com',
    icon: '/images/icons/mail.svg',
    tooltip: 'federicolun4@gmail.com'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/FedericoLunaDev',
    icon: '/images/icons/twitter.svg',
    tooltip: '@FedericoLunaDev'
  },
  {
    name: 'Links',
    href: 'https://federicoluna-links.netlify.app/',
    icon: '/images/icons/link.svg',
    tooltip: 'Todas mis redes sociales'
  }

]

/* eslint-disable react/react-in-jsx-scope */
export const Networks = () => {
  return (
    <>
        {
            NETWORKS.map(network => (
                <Tooltip
                  key={network.name}
                  label={network.tooltip}
                  placement='top'
                  bg='#8e44ad'
                  borderRadius={5}
                  color='fontColor.100'
                  hasArrow
                  arrowSize={10}
                >
                    <Link
                        href={network.href}
                        _hover={{ filter: 'brightness(1.7)' }}
                        target='_blank'
                    >
                        <Image
                            src={network.icon}
                            alt={network.name}
                            boxSize='45px'
                            p={1}
                        />
                    </Link>
                </Tooltip>
            ))
        }
    </>
  )
}
