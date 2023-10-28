import { useNavigate } from "react-router-dom"

function MenuPreview() {

  const navigate = useNavigate()

  const sections = [
    { name: "Breakfast Items", image: "mysore dosa.jpg", description: "Indian crepes" },
    { name: "Main Dishes", image: "sadhya.jpg", description: "Leaf with rice and Indian curries" },
    { name: "Appetizers", image: "samosa.jpg", description: "Indian fried snack containing potatoes and peas with spices" },
    { name: "Desserts", image: "desserts.jpg", description: "Table with Indian sweets" }
  ]

  return (
    <div className="menu-preview page">
      <h2 id="menu-heading">Our Menu</h2>
      <div className="menu-preview-sections">
        {sections.map(section => (
          <section className="preview-section">
            <button className="preview-section-btn" onClick={() => navigate("/menu")}>
              <h3>{section.name}</h3>
            </button>
            <div className="menu-img-container">
              <img className="menu-img" src={`images/${section.image}`} alt={section.description} />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default MenuPreview