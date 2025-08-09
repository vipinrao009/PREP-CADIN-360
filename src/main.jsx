import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './redux/Store.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
     <App />
    </StrictMode>
  </Provider>
)
