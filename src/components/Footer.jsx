/* eslint-disable react/react-in-jsx-scope */
import { Stack, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Stack
        bg={'secondary.500'}
        height='10vh'
        align='center'
        justify='flex-end'
        p={3}
        boxShadow='dark-lg'
    >
        <Text
            color='white'
        >
            Copyright © 2023 by Federico Luna ✌.
        </Text>
    </Stack>
  )
}
