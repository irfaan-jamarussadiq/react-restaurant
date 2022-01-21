import samosa from "../../images/samosa.jpg"
import idliVada from "../../images/idli_vada.jfif"
import masalaDosa from "../../images/Masala Dosa.jfif"

function Menu() {
    return (
        <div className="page-container" id="menu">
            <h2>Menu</h2>
            <div className="menu-gallery">
                <div className="menu-gallery-row">
                    <div className="menu-gallery-item">
                        <img src={masalaDosa} alt="masala dosa"/>
                        <span className="item-name">Breakfast</span>
                    </div>
                    <div className="menu-gallery-item">
                        <img src={idliVada} alt="idli vada"/>
                        <span className="item-name">Lunch</span>
                    </div>
                    <div className="menu-gallery-item">
                        <img src={samosa} alt="samosa"/>
                        <span className="item-name">Dinner</span>
                    </div>
                </div>
                <div className="menu-gallery-row">
                    <div className="menu-gallery-item">
                        <img src={masalaDosa} alt="masala dosa"/>
                        <span className="item-name">Breakfast</span>
                    </div>
                    <div className="menu-gallery-item">
                        <img src={idliVada} alt="idli vada"/>
                        <span className="item-name">Lunch</span>
                    </div>
                    <div className="menu-gallery-item">
                        <img src={samosa} alt="samosa"/>
                        <span className="item-name">Dinner</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu