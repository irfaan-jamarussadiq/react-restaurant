import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import OrderNow from './components/pages/OrderNow'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App tab="home"/>}/>
        <Route path="/order" element={<OrderNow />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export { default as NavBar } from './components/NavBar'
export { default as Footer } from './components/Footer'
export { default as LandingPage } from './components/pages/LandingPage'
export { default as About } from './components/pages/About'
export { default as Contact } from './components/pages/Contact'
export { default as HoursOfOperation } from './components/pages/HoursOfOperation'
export { default as Order } from './components/pages/Order'
export { default as OrderNow } from './components/pages/OrderNow'