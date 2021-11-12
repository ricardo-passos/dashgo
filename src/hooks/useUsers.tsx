import { useQuery } from 'react-query'

// services
import { api } from '../services/api'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = {
  totalCount: number
  userList: User[]
}

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', { params: { page } })

  const totalCount = Number(headers['x-total-count'])

  const userList = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return { userList, totalCount }
}

function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 60, // 1 hour
    keepPreviousData: true,
  })
}

export { useUsers }
