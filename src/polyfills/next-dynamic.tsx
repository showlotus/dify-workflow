// Next.js dynamic 函数在 Vite 中的兼容实现

import React, { ComponentType, lazy, Suspense } from 'react'

interface DynamicOptions<P = {}> {
  loading?: ComponentType<{ error?: Error; isLoading?: boolean; pastDelay?: boolean }>
  ssr?: boolean
  suspense?: boolean
}

type Loader<P = {}> = () => Promise<{ default: ComponentType<P> }>

/**
 * Next.js dynamic 的兼容实现
 * 使用 React.lazy 实现代码分割
 */
function dynamic<P = {}>(
  loader: Loader<P>,
  options?: DynamicOptions<P>
): ComponentType<P> {
  const LazyComponent = lazy(loader)
  
  const DynamicComponent = (props: P) => {
    const LoadingComponent = options?.loading
    
    return (
      <Suspense
        fallback={
          LoadingComponent ? (
            <LoadingComponent isLoading={true} />
          ) : (
            <div>Loading...</div>
          )
        }
      >
        <LazyComponent {...props} />
      </Suspense>
    )
  }
  
  DynamicComponent.displayName = 'DynamicComponent'
  
  return DynamicComponent
}

export default dynamic

