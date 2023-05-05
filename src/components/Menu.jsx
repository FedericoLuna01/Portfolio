/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button, Link } from '@chakra-ui/react'
import ToggleColorMode from './ToggleColorMode'

const MENU_ITEMS = [
  {
    section: '#about',
    title: 'Sobre mi'
  },
  {
    section: '#technologies',
    title: 'Tecnologías'
  },
  {
    section: '#projects',
    title: 'Proyectos'
  },
  {
    section: '#contact',
    title: 'Contactáme'
  }
]

export const Menu = ({ onClose }) => {
  return (
    <>
        {MENU_ITEMS.map((item, index) => (
            <Link
                key={`${item.section}-${index}`}
                href={item.section}
                alt={item.title}
                onClick={onClose}
            >
                {item.title}
            </Link>
        ))}
        <ToggleColorMode />
        <Button
            bg={'primary.500'}
            color={'fontColor.100'}
            _hover={{ bg: 'primary.100' }}
            as='a'
            href='/FedericoLuna-CV.pdf'
            download='FedericoLuna-CV.pdf'
        >
            Descargar CV
        </Button>
    </>
  )
}
