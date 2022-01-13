import './App.css'
import {  
  Routes, 
  Route,
  Outlet,
} from 'react-router-dom'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Menu from './components/pages/Menu.js'
import Contact from './components/pages/Contact.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant</h1>
        <NavBar pages={['About', 'Menu', 'Contact']}/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
      <Outlet />
      <Footer year='2022' company='Restaurant' developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App