import "./App.css"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <div id="main-page">
        <h1 id="website-title">Latheeth</h1>
        <h3>Experience authentic vegetarian Indian cuisine</h3>
        <div className="main-page-img-container">
          <img src="images/sadhya.jpg" alt="Indian vegetarian meal with rice and curry set" />
        </div>
      </div>
      <div className="menu-preview">
        <h2 id="menu-heading">Our Menu</h2>
        <div className="menu-preview-sections">
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Breakfast Items</h2>
            </button>
            <div className="menu-img-container">
              <img className="menu-img" src="images/mysore dosa.jpg" alt="Table with Indian sweets" />
            </div>
          </section>
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Main Dishes</h2>
            </button>
            <div className="menu-img-container">
              <img className="menu-img" src="images/sadhya.jpg" alt="Leaf with rice and Indian curries" />
            </div>
          </section>
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Appetizers</h2>
            </button>
            <div className="menu-img-container">
              <img className="menu-img" src="images/samosa.jpg" alt="Samosas" />
            </div>
          </section>
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Desserts</h2>
            </button>
            <div className="menu-img-container">
              <img className="menu-img" src="images/desserts.jpg" alt="Table with Indian sweets" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App