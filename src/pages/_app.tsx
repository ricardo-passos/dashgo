import { ChakraProvider } from '@chakra-ui/react'

//  contexts
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

// styles
import { theme } from '../styles/theme'

// types
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
