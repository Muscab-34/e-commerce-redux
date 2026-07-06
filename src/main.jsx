import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Store from './Redux/Store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import { Provider } from 'react-redux'
const persist = persistStore(Store)
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={Store} >
      <BrowserRouter>
        <PersistGate persistor={persist}>

          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
