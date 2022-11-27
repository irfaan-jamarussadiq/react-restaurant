import './App.css'
import {
  NavBar,
  Footer,
  LandingPage,
  About, 
  HoursOfOperation, 
  Contact
} from './index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <About />
      <HoursOfOperation />
      <Contact />
      <Footer />
    </div>
  )
}

export default App