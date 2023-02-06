import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Image, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Menu } from './Menu'

/* eslint-disable react/react-in-jsx-scope */
export const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        colorScheme='secondary'
        onClick={onOpen}
        p={2}
      >
        <Image
          src='images/icons/hamburger-menu.svg'
          boxSize={35}
        />
      </Button>
      <Drawer
        size='xs'
        placement='top'
        isOpen={isOpen}
        onClose={onClose}
        preserveScrollBarGap={true}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent
          bg='secondary.500'
        >
          <DrawerCloseButton
            color='white'
            size={'lg'}
          />
          <DrawerBody>
              <Stack
                align='center'
                mt={10}
                gap={5}
                pb={5}
              >
                <Menu onClose={onClose}/>
              </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
