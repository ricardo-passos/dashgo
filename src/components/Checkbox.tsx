import { useState, useEffect, forwardRef } from 'react'
import { Checkbox as ChrakraCheckbox } from '@chakra-ui/react'

import type { CheckboxProps } from '@chakra-ui/react'
import type { ForwardRefRenderFunction } from 'react'

type Props = {
  isAllActive?: boolean
} & CheckboxProps

function Checkbox({ isAllActive, ...rest }: Props) {
  const [isActive, setIsActive] = useState(isAllActive)

  useEffect(() => {
    setIsActive(isAllActive)
  }, [isAllActive])

  return (
    <ChrakraCheckbox
      colorScheme='pink'
      isChecked={isActive}
      onChange={() => setIsActive(!isActive)}
      {...rest}
    />
  )
}

export { Checkbox }
