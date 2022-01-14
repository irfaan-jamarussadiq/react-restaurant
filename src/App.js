import './App.css'
import { Routes, Link, Route, Outlet } from 'react-router-dom'
import { NavBar, Footer, Home, About, DaySchedules, Menu, Order, Contact } from './index'
import logo from './images/logo.png'

function Header({ links, logo }) {
  return (
    <header className="App-header shadow-lg">
      <Link className="link" to="/">
        <img src={logo} className='shadow-lg' alt="Latheeth logo"/>
      </Link>
      <NavBar links={links}/>
    </header>
  )
}

function App() {
  const pages = ['About', 'Hours', 'Menu', 'Order Online', 'Contact']

  return (
    <div className="App">
      <Header links={pages} logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hours" element={<DaySchedules />} />  
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />  
        <Route path="/contact" element={<Contact />} />        
      </Routes>
      <Outlet />
      <Footer year='2022' company='Latheeth' developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App