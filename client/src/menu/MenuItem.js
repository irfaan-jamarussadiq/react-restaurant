function MenuItem({ name, imagePath, imageAlt, description }) {
  return (
    <div className="menu-item">
      <h3 className="menu-item-name">{name}</h3>
      <div className="menu-img-container">
        <img className="menu-img" src={imagePath} alt={imageAlt} />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default MenuItem