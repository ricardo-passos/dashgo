import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

//  contexts
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

// services
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'

// styles
import { theme } from '../styles/theme'

// types
import type { AppProps } from 'next/app'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
