import './App.css'
import Order from './components/pages/Order'
import { NavBar, Footer, Home, About, HoursOfOperation, Contact } from './index'

function App() {
  return (
    <div className="App">
      <NavBar links={['About', 'Hours', 'Order', 'Contact']}/>
      <Home />
      <About />
      <HoursOfOperation />
      <Order />
      <Contact />
      <Footer year='2022' company='Latheeth' developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App