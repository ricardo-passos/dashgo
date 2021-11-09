import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react'

// types
import type { InputProps } from '@chakra-ui/react'

type Props = {
  name: string
  label?: string
} & InputProps

export function Input({ name, label, ...rest }: Props) {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{ bgColor: 'gray.900' }}
        size='lg'
        {...rest}
      />
    </FormControl>
  )
}
