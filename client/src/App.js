import "./App.css"
import MenuItemImage from "./MenuItemImage"
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
      <div className="menu-preview page">
        <h2 id="menu-heading">Our Menu</h2>
        <div className="menu-preview-sections">
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Breakfast Items</h2>
            </button>
            <MenuItemImage source="images/mysore dosa.jpg" description="Table with Indian sweets" />
          </section>
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Main Dishes</h2>
            </button>
            <MenuItemImage source="images/sadhya.jpg" description="Leaf with rice and Indian curries" />
          </section>
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Appetizers</h2>
            </button>
            <MenuItemImage source="images/samosa.jpg" alt="Indian fried snack containing potatoes and peas with some spices" />
          </section>
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h2>Desserts</h2>
            </button>
            <MenuItemImage source="images/desserts.jpg" alt="Table with Indian sweets" />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App