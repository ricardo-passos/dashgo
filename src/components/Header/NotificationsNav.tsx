import { HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function NotificationsNav() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py='1'
      color='gray.300'
      borderRightWidth='1px'
      borderColor='gray.700'
    >
      <Icon as={RiNotificationLine} fontSize='20px' />
      <Icon as={RiUserAddLine} fontSize='20px' />
    </HStack>
  )
}
