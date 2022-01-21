import samosa from "../../images/samosa.jpg"
import idliVada from "../../images/idli_vada.jfif"
import masalaDosa from "../../images/Masala Dosa.jfif"
import parippuVada from "../../images/parippu-vada.jpg"
import pakora from "../../images/pakora.jpg"
import gulabJamun from "../../images/gulab jamun.jpg"
import bajji from "../../images/bajji.jpg"
import eggIdiyappam from "../../images/egg_idiyappam.jpg"
import puttu from "../../images/puttu.jpg"
import vegBiryani from "../../images/veg-biryani.jpg"
import eggBiryani from "../../images/eggBiryani.jfif"
import eggPorotha from "../../images/egg_porotha.jpg"
import daalRice from "../../images/daal-and-rice.jpg"

function Menu() {
    return (
        <div className="page-container" id="menu">
            <h2>Menu</h2>
            <MenuGallery title="Appetizers">
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={samosa} name="Samosa" />
                    <MenuGalleryItem image={parippuVada} name="Parippu Vada" />
                    <MenuGalleryItem image={pakora} name="Pakora" />
                </div>
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={bajji} name="Bajji" />
                    <MenuGalleryItem image={gulabJamun} name="Gulab Jamun" />
                </div>
            </MenuGallery>
            <MenuGallery title="Breakfast">
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={masalaDosa} name="Masala Dosa" />
                    <MenuGalleryItem image={idliVada} name="Idli Vada" />
                    <MenuGalleryItem image={eggIdiyappam} name="Idiyappam with Egg Curry" />
                </div>
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={puttu} name="Puttu with Kadala Curry" />
                </div>
            </MenuGallery>
            <MenuGallery title="Lunch Entrées">
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={vegBiryani} name="Vegetable Biryani" />
                    <MenuGalleryItem image={eggBiryani} name="Egg Biryani" />
                </div>
                <div className="menu-gallery-row">
                    <MenuGalleryItem image={eggPorotha} name="Egg Porotha" />
                    <MenuGalleryItem image={daalRice} name="Daal and Rice" />
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