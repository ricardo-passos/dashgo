import { Box, Text, Stack } from '@chakra-ui/react'

// types
import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: Props) {
  return (
    <Box>
      <Text fontWeight='bold' color='gray.400' fontSize='small'>
        {title}
      </Text>
      <Stack spacing='4' mt='8' align='stretch'>
        {children}
      </Stack>
    </Box>
  )
}
