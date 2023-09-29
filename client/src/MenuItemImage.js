function MenuItemImage({ source, description }) {
  return (
    <div className="menu-img-container">
      <img className="menu-img" src={source} alt={description} />
    </div>
  )
}

export default MenuItemImage