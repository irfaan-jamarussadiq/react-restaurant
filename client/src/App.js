import './App.css'
import {
  NavBar,
  Footer,
  LandingPage,
  About, 
  HoursOfOperation, 
  Order, 
  Contact
} from './index'

function App() {
  return (
    <div className="App">
      <NavBar links={['About', 'Hours', 'Order', 'Contact']} />
      <LandingPage />
      <About />
      <HoursOfOperation />
      <Order />
      <Contact />
      <Footer year='2022' company='Latheeth' developer='Irfaan Jamarussadiq' />
    </div>
  )
}

export default App