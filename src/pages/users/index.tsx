import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Checkbox,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import Link from 'next/link'

// components
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/SideBar'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxW='1480px' mx='auto' px={['2', '6']}>
        <Sidebar />

        <Box flex='1' borderRadius='8px' bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center' gridColumnGap='4'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>
            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='small'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='gray'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th width='8'>Editar</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Ricardo Passos</Text>
                    <Text fontSize='small' color='gray.300'>
                      ricardo@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>8 de abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='small'
                      colorScheme='purple'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
