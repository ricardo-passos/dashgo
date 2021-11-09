import { Link, Icon, Text } from '@chakra-ui/react'

// types
import type { ElementType } from 'react'

type Props = {
  icon: ElementType
  children: string
}

export function NavLink({ icon, children }: Props) {
  return (
    <Link display='flex' align='center'>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>
        {children}
      </Text>
    </Link>
  )
}
