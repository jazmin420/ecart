import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import cartStore from './REDUX/cartStore.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={cartStore}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
