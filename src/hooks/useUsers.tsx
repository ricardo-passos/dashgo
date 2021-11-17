import { useQuery } from 'react-query'

// services
import { api } from '../services/api'

type User = {
  id: string
  name: string
  email: string
  company: string
}

type GetUsersResponse = {
  userList: User[]
}

async function getUsers(): Promise<GetUsersResponse> {
  const { data } = await api.get('/users')

  const userList = data.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    company: user.company.name,
  }))

  return { userList }
}

function useUsers() {
  return useQuery('users', () => getUsers(), {
    staleTime: 1000 * 60 * 60, // 1 hour
    keepPreviousData: true,
  })
}

export { useUsers }
