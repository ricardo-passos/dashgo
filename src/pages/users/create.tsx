import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Button,
  HStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

// components
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/SideBar'
import { Input } from '../../components/Form/Input'

// types
import type { SubmitHandler } from 'react-hook-form'

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().trim().required('Nome obrigatório.'),
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: yup
    .string()
    .required('Senha obrigatória.')
    .min(6, 'Mínimo de 6 caracteres.'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais.'),
})

export default function CreateUser() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  })

  const onSubmit: SubmitHandler<CreateUserFormData> = (values, event) => {
    event.preventDefault()
    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex width='100%' my='6' maxW='1480px' mx='auto' px='6'>
        <Sidebar />

        <Box
          as='form'
          flex='1'
          borderRadius='8px'
          bg='gray.800'
          p={['6', '8']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading size='lg' fontWeight='normal'>
            Criar usuário
          </Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='name'
                label='Nome completo'
                error={formState.errors.name}
                {...register('name')}
              />
              <Input
                name='email'
                type='email'
                label='E-mail'
                error={formState.errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input
                name='password'
                type='password'
                label='Senha'
                error={formState.errors.password}
                {...register('password')}
              />
              <Input
                name='password_confirmation'
                type='password'
                label='Confirme a senha'
                error={formState.errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme='pink'
                type='submit'
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
