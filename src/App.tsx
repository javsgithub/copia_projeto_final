import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import ApplicationRoutes from './routes'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <ApplicationRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
