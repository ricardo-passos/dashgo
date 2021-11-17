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
  Spinner,
  Link as ChakraLink,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import NextLink from 'next/link'
import { useState } from 'react'

// components
import { Checkbox } from '../../components/Checkbox'

// services
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

// hooks
import { useUsers } from '../../hooks/useUsers'

export default function UserList() {
  const [isAllCheckBoxesActive, setIsAllCheckBoxesActive] = useState(false)
  const { data, isLoading, isFetching, error } = useUsers()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  async function handlePrefetchUser(id: string) {
    await queryClient.prefetchQuery(
      ['users', id],
      async () => {
        const { data } = await api.get(`users/${id}`)

        return data
      },
      {
        staleTime: 1000 * 60 * 60, // 1 hour
      }
    )
  }

  return (
    <Flex width='100%' my='6' maxW='1480px'>
      <Box flex='1' borderRadius='8px' bg='gray.800' p='8'>
        <Flex mb='8' justify='space-between' align='center' gridColumnGap='4'>
          <Heading size='lg' fontWeight='normal' alignItems='center'>
            Usuários
            {!isLoading && isFetching && (
              <Spinner size='sm' color='gray.500' ml='4' />
            )}
          </Heading>
          <NextLink href='/users/create' passHref>
            <Button
              as='a'
              size='sm'
              fontSize='small'
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo usuário
            </Button>
          </NextLink>
        </Flex>

        {isLoading ? (
          <Flex justify='center'>
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex justify='center'>
            <Text>Falha ao obter os dados dos usuários</Text>
          </Flex>
        ) : (
          <>
            <Table colorScheme='gray'>
              <Thead>
                <Tr>
                  <Th px={['4', '4', '6']} color='gray.300' width='8'>
                    <Checkbox
                      isChecked={isAllCheckBoxesActive}
                      onChange={() =>
                        setIsAllCheckBoxesActive(!isAllCheckBoxesActive)
                      }
                    />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Empresa</Th>}
                  {isWideVersion && <Th width='8'>Editar</Th>}
                </Tr>
              </Thead>
              <Tbody>
                {data.userList.map((user) => (
                  <Tr key={user.id}>
                    <Td px={['4', '4', '6']}>
                      <Checkbox isAllActive={isAllCheckBoxesActive} />
                    </Td>
                    <Td>
                      <Box>
                        <ChakraLink
                          color='purple.400'
                          onMouseEnter={() => handlePrefetchUser(user.id)}
                        >
                          <Text fontWeight='bold'>{user.name}</Text>
                        </ChakraLink>
                        <Text fontSize='small' color='gray.300'>
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.company ?? 'N/A'}</Td>}
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
                ))}
              </Tbody>
            </Table>

            {/* <Pagination
                totalCountOfRegisters={10}
                currentPage={page}
                onPageChange={setPage}
              /> */}
          </>
        )}
      </Box>
    </Flex>
  )
}
