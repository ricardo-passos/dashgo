import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { cloneElement } from 'react'

// types
import type { LinkProps } from 'next/link'
import type { ReactElement } from 'react'

type Props = {
  children: ReactElement
  shouldMatchExactHref?: boolean
} & LinkProps

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: Props) {
  const { asPath } = useRouter()

  const isActive =
    `/${asPath.split('/', 2).pop()}` === rest.href || asPath === rest.href

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
