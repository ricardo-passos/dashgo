import { Flex } from '@chakra-ui/react'

// components
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxW='1480px'
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Logo />

      <SearchBox />

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}
