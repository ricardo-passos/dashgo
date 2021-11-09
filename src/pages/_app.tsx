import { ChakraProvider } from '@chakra-ui/react'

// styles
import { theme } from '../styles/theme'

// types
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
