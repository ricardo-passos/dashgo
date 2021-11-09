import { Flex, Button, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

// components
import { Input } from '../components/Form/Input'

// types
import { SubmitHandler } from 'react-hook-form'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: yup.string().required('Senha obrigatória.'),
})

export default function SignIn() {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  })

  const handleSignin: SubmitHandler<SignInFormData> = (values) => {
    router.push('/dashboard')
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxW='360'
        bg='gray.800'
        p='8'
        borderRadius='8px'
        flexDir='column'
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing='4'>
          <Input
            name='email'
            type='email'
            label='E-mail'
            error={formState.errors.email}
            {...register('email')}
          />
          <Input
            name='password'
            type='password'
            label='Senha'
            error={formState.errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
