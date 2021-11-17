import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
} from '@chakra-ui/react'

// components
import { SideBarNav } from './SideBarNav'

// contexts
import { useSidebarDrawerContext } from '../../contexts/SidebarDrawerContext'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawerContext()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bf='gray.800' p='4'>
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mt='8'>
      <SideBarNav />
    </Box>
  )
}
