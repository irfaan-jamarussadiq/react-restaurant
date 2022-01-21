import { Link } from "react-router-dom"

function Menu() {
    return (
        <div className="page-container" id="menu">
            <h2>Menu</h2>
            <MenuGallery title="Appetizers">
                <div className="menu-gallery-row">
                    <MenuGalleryItem imageName="samosa.jpg" itemName="Samosa" />
                    <MenuGalleryItem imageName="parippu-vada.jpg" itemName="Parippu Vada" />
                    <MenuGalleryItem imageName="pakora.jpg" itemName="Pakora" />
                </div>
                <div className="menu-gallery-row">
                    <MenuGalleryItem imageName="bajji.jpg" itemName="Bajji" />
                    <MenuGalleryItem imageName="gulab jamun.jpg" itemName="Gulab Jamun" />
                </div>
            </MenuGallery>
            <MenuGallery title="Breakfast">
                <div className="menu-gallery-row">
                    <MenuGalleryItem imageName="Masala Dosa.jfif" itemName="Masala Dosa" />
                    <MenuGalleryItem imageName="idli_vada.jfif" itemName="Idli Vada" />
                    <MenuGalleryItem imageName="egg_idiyappam.jpg" itemName="Idiyappam with Egg Curry" />
                </div>
                <div className="menu-gallery-row">
                    <MenuGalleryItem imageName="puttu.jpg" itemName="Puttu with Kadala Curry" />
                </div>
            </MenuGallery>
            <MenuGallery title="Lunch Entrées">
                <div className="menu-gallery-row">
                    <MenuGalleryItem imageName="veg-biryani.jpg" itemName="Vegetable Biryani" />
                    <MenuGalleryItem imageName="eggBiryani.jfif" itemName="Egg Biryani" />
                </div>
                <div className="menu-gallery-row">
                    <MenuGalleryItem imageName="egg_porotha.jpg" itemName="Egg Porotha" />
                    <MenuGalleryItem imageName="daal-and-rice.jpg" itemName="Daal and Rice" />
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

function MenuGalleryItem({imageName, itemName}) {
    return (
        <div className="menu-gallery-item">
            <img src={`images/${imageName}`} alt={itemName}/>
            <Link to="#" className="item-link">
                <span className="item-name">{itemName}</span>
            </Link>
        </div>
    )
}

export default Menu