import { createContext, useContext, useEffect } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { useRouter } from 'next/dist/client/router'

// types
import type { ReactNode } from 'react'
import { UseDisclosureReturn } from '@chakra-ui/hooks'

type ContextProps = UseDisclosureReturn

const SidebarDrawerContext = createContext<ContextProps>({} as ContextProps)

type Props = {
  children: ReactNode
}

export function SidebarDrawerProvider({ children }: Props) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawerContext = () => useContext(SidebarDrawerContext)
