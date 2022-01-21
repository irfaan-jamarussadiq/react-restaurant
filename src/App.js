import './App.css'
import { NavBar, Footer, Home, About, HoursOfOperation, Menu, Contact } from './index'

function App() {
  return (
    <div className="App">
      <NavBar links={['About', 'Hours', 'Menu', 'Contact']}/>
      <Home />
      <About />
      <HoursOfOperation />
      <Menu />
      <Contact />
      <Footer year='2022' company='Latheeth' developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App