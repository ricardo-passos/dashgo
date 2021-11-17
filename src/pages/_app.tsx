import { ChakraProvider, Flex } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

//  contexts
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { Header } from '../components/Header'
import { Sidebar } from '../components/SideBar'

// services
import { queryClient } from '../services/queryClient'

// styles
import { theme } from '../styles/theme'

// types
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Flex direction='column' h='100vh' p='20px'>
            <Header />
            <Flex h='min-content'>
              <Sidebar />
              <Component {...pageProps} />
            </Flex>
          </Flex>
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
