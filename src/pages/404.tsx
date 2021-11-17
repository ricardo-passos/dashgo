import { Center, Flex } from '@chakra-ui/react'

// components
import { NotFoundError } from '../components/icons'

export default function Custom404() {
  return (
    <Center bg='gray.900' h='100%' w='100%'>
      <Flex boxSize='400px' align='center' justify='center' direction='column' gridRowGap='20px'>
        404 - Ainda estamos trabalhando aqui
        <NotFoundError />
      </Flex>
    </Center>
  )
}
