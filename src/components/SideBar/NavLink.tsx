import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react'

// components
import { ActiveLink } from './ActiveLink'

// types
import type { ElementType } from 'react'

type Props = {
  icon: ElementType
  href: string
  children: string
}

export function NavLink({ icon, href, children }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display='flex' align='center'>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
