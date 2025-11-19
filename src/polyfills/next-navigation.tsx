// Next.js navigation API 在 Vite 中的兼容实现

import { useCallback } from 'react'
import { useLocation, useNavigate, useSearchParams as useRouterSearchParams } from 'react-router-dom'

/**
 * Next.js usePathname 的兼容实现
 * 返回当前路径名
 */
export function usePathname() {
  const location = useLocation()
  return location.pathname
}

/**
 * Next.js useRouter 的兼容实现
 * 提供路由导航功能
 */
export function useRouter() {
  const navigate = useNavigate()
  
  return {
    push: useCallback((href: string) => {
      navigate(href)
    }, [navigate]),
    replace: useCallback((href: string) => {
      navigate(href, { replace: true })
    }, [navigate]),
    back: useCallback(() => {
      navigate(-1)
    }, [navigate]),
    forward: useCallback(() => {
      navigate(1)
    }, [navigate]),
    refresh: useCallback(() => {
      window.location.reload()
    }, []),
    prefetch: useCallback(() => {
      // Vite 不需要预加载
    }, []),
  }
}

/**
 * Next.js useSearchParams 的兼容实现
 * 返回 URL 查询参数
 */
export function useSearchParams() {
  const [searchParams, setSearchParams] = useRouterSearchParams()
  
  return [searchParams, setSearchParams] as const
}

/**
 * Next.js useParams 的兼容实现
 * 返回动态路由参数
 */
export function useParams() {
  // 在 Vite 中暂时返回空对象
  // 如果需要使用动态路由，需要配合 react-router-dom 的 useParams
  return {}
}

