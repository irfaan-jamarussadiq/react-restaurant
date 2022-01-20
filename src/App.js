import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import { NavBar, Footer, Home, About, HoursOfOperation, Menu, Contact } from './index'
import RestaurantInfo from './components/RestaurantInfo'
import logo from './images/logo.png'

function Header({ links, logo }) {
  return (
    <header className="App-header shadow-lg">
      <RestaurantInfo 
        streetAddress='12345 Example Street' 
        city='City' 
        state='ST' 
        zipcode='99999'
        phone='999-999-9999' 
      />
      <NavBar links={links}/>
    </header>
  )
}

function App() {
  const pages = ['About', 'Hours', 'Menu', 'Contact']

  return (
    <div className="App">
      <Header links={pages} logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hours" element={<HoursOfOperation />} />  
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
      <Outlet />
      {/* <About />
      <HoursOfOperation />
      <Menu />
      <Contact /> */}
      <Footer year='2022' company='Latheeth' developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App