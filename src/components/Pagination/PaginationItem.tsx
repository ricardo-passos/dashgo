import { Button } from '@chakra-ui/react'

type Props = {
  number: number
  isCurrent?: boolean
}

export function PaginationItem({ isCurrent = false, number }: Props) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        w='4'
        colorScheme='pink'
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size='sm'
      fontSize='xs'
      w='4'
      bg='gray.700'
      _hover={{ bg: 'gray.500', cursor: 'pointer' }}
    >
      {number}
    </Button>
  )
}
