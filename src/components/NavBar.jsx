/* eslint-disable react/react-in-jsx-scope */
import { Heading, Hide, Show, Stack } from '@chakra-ui/react'
import { NavMobile } from './NavMobile'
import { Menu } from './Menu'

export const NavBar = () => {
  return (
    <Stack
      as='nav'
      pos={'fixed'}
      w={'100%'}
      backdropFilter='blur(10px)'
      h={'70px'}
      justify={'space-between'}
      align={'center'}
      direction={'row'}
      px={{ base: 4, md: 10, lg: 20, xl: 32, '2xl': '72' }}
      zIndex={2}
    >
      <Heading
        as={'h1'}
        size={'lg'}
        color='primary.500'
      >
        Portfolio
      </Heading>
      <Show above='md'>
        <Stack
          as='ul'
          direction={'row'}
          justify={'space-between'}
          align={'center'}
          gap={5}
        >
          <Menu />
        </Stack>
      </Show>
      <Hide above='md'>
        <NavMobile />
      </Hide>
    </Stack>
  )
}
