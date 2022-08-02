import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

export { default as NavBar } from './components/NavBar'
export { default as Footer } from './components/Footer'
export { default as Home } from './components/pages/Home'
export { default as About } from './components/pages/About'
export { default as Contact } from './components/pages/Contact'
export { default as HoursOfOperation } from './components/pages/HoursOfOperation'
export { default as Menu } from './components/pages/Menu'
export { default as Order } from './components/pages/Order'