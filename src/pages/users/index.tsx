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
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

// components
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxW='1480px' mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius='8px' bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <Button
              as='a'
              size='sm'
              fontSize='small'
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme='gray'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width='8'>Editar</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
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
                <Td>8 de abril, 2021</Td>
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
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
