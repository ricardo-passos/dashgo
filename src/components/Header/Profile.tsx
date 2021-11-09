import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Ricardo Passos</Text>
        <Text color='gray.300' fontSize='small'>
          ricardo@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Ricardo Passos'
        src='https://github.com/ricardo-passos.png'
      />
    </Flex>
  )
}
