import { Stack, Box, Wrap, Text } from '@chakra-ui/react'

// components
import { PaginationItem } from './PaginationItem'

type PaginationProps = {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const SIBLINGS_COUNT = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + SIBLINGS_COUNT, lastPage)
        )
      : []

  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Wrap justify='center'>
        {currentPage > 1 + SIBLINGS_COUNT && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + SIBLINGS_COUNT && (
              <Text color='gray.300' w='8' textAlign='center'>
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} key={page} number={page} />
          ))}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => <PaginationItem onPageChange={onPageChange} key={page} number={page} />)}

        {currentPage + SIBLINGS_COUNT < lastPage && (
          <>
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
            {currentPage + 1 + SIBLINGS_COUNT < lastPage && (
              <Text color='gray.300' w='8' textAlign='center'>
                ...
              </Text>
            )}
          </>
        )}
      </Wrap>
    </Stack>
  )
}
