import { Provider } from 'react-redux'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import ApplicationRoutes from './routes'

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
