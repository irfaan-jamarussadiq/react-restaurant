import MenuItemImage from "./MenuItemImage"

function MenuItem({ name, image, description }) {
  return (
    <div className="menu-item">
      <h3 className="menu-item-name">{name}</h3>
      <MenuItemImage source={image.path} description={image.alt} />
      <p>{description}</p>
    </div>
  )
}

export default MenuItem