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

  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
