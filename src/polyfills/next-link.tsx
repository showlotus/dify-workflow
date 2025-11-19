// Next.js Link 组件在 Vite 中的兼容实现

import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import type { LinkProps as RouterLinkProps } from 'react-router-dom'

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href: string
  children: React.ReactNode
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  prefetch?: boolean
  locale?: string | false
}

/**
 * Next.js Link 的兼容实现
 * 将 Next.js 的 Link API 转换为 react-router-dom 的 Link
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, replace, scroll, shallow, passHref, prefetch, locale, ...props }, ref) => {
    // 处理外部链接
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
      return (
        <a href={href} ref={ref} {...props}>
          {children}
        </a>
      )
    }

    return (
      <RouterLink to={href} replace={replace} ref={ref} {...props}>
        {children}
      </RouterLink>
    )
  }
)

Link.displayName = 'Link'

export default Link

