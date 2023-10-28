function MenuItem({ name, image, description }) {
  return (
    <div className="menu-item">
      <h3 className="menu-item-name">{name}</h3>
      <div className="menu-img-container">
        <img className="menu-img" src={image.path} alt={image.alt} />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default MenuItem