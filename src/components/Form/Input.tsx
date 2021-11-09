import { forwardRef } from 'react'
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
} from '@chakra-ui/react'

// types
import type { ForwardRefRenderFunction } from 'react'
import type { InputProps } from '@chakra-ui/react'
import type { FieldError } from 'react-hook-form'

type Props = {
  name: string
  label?: string
  error?: FieldError
} & InputProps

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
