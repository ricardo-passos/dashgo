import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

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
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
        dashgo
        <Text as='span' ml='1' color='pink.500'>
          .
        </Text>
      </Text>

      <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxW='400px'
        alignSelf='center'
        color='gray.200'
        position='relative'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color='gray.50'
          px='4'
          mr='4'
          variant='unstyled'
          placeholder='Buscar na plataforma'
          _placeholder={{ color: 'gray.400' }}
        />

        <Icon as={RiSearchLine} fontSize='20px' />
      </Flex>

      <Flex align='center' ml='auto'>
        <HStack
          spacing='8'
          mx='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth='1px'
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize='20px' />
          <Icon as={RiUserAddLine} fontSize='20px' />
        </HStack>

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
      </Flex>
    </Flex>
  )
}
