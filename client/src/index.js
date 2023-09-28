import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Menu from './Menu'
import NavBar from './NavBar'
import Contact from './Contact'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App tab="home"/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
