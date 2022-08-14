import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App tab="home" />
    </Router>
  </React.StrictMode>
);

export { default as NavBar } from './components/NavBar'
export { default as Footer } from './components/Footer'
export { default as Home } from './components/pages/Home'
export { default as About } from './components/pages/About'
export { default as Contact } from './components/pages/Contact'
export { default as HoursOfOperation } from './components/pages/HoursOfOperation'
export { default as Order } from './components/pages/Order'