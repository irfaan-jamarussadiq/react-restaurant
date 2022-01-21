import samosa from "../../images/samosa.jpg"
import idliVada from "../../images/idli_vada.jfif"
import masalaDosa from "../../images/Masala Dosa.jfif"

function Menu() {
    return (
        <div className="page-container" id="menu">
            <h2>Menu</h2>
            <MenuGallery title="Appetizers">
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={samosa} name="Samosa" />
                </div>
            </MenuGallery>
            <MenuGallery title="Breakfast">
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={masalaDosa} name="Masala Dosa" />
                    <MenuGalleryItem image={idliVada} name="Idli Vada" />
                </div>
            </MenuGallery>
        </div>
    )
}

function MenuGallery({ title, children }) {
    return (
        <>
            <h3>{title}</h3>
            <div className="menu-gallery">{children}</div>
        </>
    )
}

function MenuGalleryItem({image, name}) {
    return (
        <div className="menu-gallery-item">
            <img src={image} alt={name}/>
            <a href="#" className="item-link">
                <span className="item-name">{name}</span>
            </a>
        </div>
    )
}

export default Menu