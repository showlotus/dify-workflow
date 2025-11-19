import { BrowserRouter } from 'react-router-dom'
import Workflow from '@/app/components/workflow-app'

/**
 * 应用主组件
 * 提供路由和工作流功能
 */
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        {/* <Workflow />  */}
      </div>
    </BrowserRouter>
  )
}

export default App
