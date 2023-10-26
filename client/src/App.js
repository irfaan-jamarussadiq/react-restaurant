import "./App.css"
import MenuPreview from "./MenuPreview"

function App() {

  return (
    <div className="App">
      <div id="main-page">
        <h1 id="website-title">Latheeth</h1>
        <h3>Experience authentic vegetarian Indian cuisine</h3>
        <div className="main-page-img-container">
          <img src="images/sadhya.jpg" alt="Indian vegetarian meal with rice and curry set" />
        </div>
      </div>
      <MenuPreview />
    </div>
  )
}

export default App