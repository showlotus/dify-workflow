import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { useStore } from '@/app/components/app/store'
import Workflow from '@/app/components/workflow-app'
import { AppContextProvider } from '@/context/app-context'

import { mockAppDetail } from '@/mock'
import type { App } from './types/app'
import { useShallow } from 'zustand/react/shallow'

// 创建 QueryClient 实例（在组件外部创建，避免重复创建）
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

/**
 * 应用主组件
 * 提供路由和工作流功能
 */
function App() {
  // 只获取 appDetail 状态，不使用 useShallow 避免引用变化
  const { appDetail } = useStore(useShallow(state => ({ appDetail: state.appDetail })))
  const { setAppDetail } = useStore(useShallow(state => ({ setAppDetail: state.setAppDetail })))

  useEffect(() => {
    console.log('setAppDetail', mockAppDetail)
    // 只在初始化时设置一次
    setAppDetail(mockAppDetail)
  }, [])

  return (
    <AppContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme={false}
          >
            {appDetail && <Workflow />}
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
