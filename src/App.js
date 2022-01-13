import './App.css'
import {  
  Routes,
  Link, 
  Route,
  Outlet,
} from 'react-router-dom'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Menu from './components/pages/Menu.js'
import Contact from './components/pages/Contact.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import logo from './images/logo.png'

function App() {
  const restaurantName = 'Latheeth'


  return (
    <div className="App">
      <div className="content-wrap">
        <header className="App-header shadow-lg">
          <Link className="link" to="/">
            <img src={logo} className='shadow-lg' alt="Latheeth logo"/>
          </Link>
          <NavBar pages={['About', 'Menu', 'Contact']}/>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />        
        </Routes>
        <Outlet />
      </div>
      <Footer year='2022' company={restaurantName} developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App