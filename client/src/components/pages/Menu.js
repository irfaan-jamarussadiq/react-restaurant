import { useState } from "react"
import Items from "../../items.json"

function Menu() {
    return (
        <div className="page-container" id="order-page">
            <h1 className="menu-title">Order Now</h1>
            <OrderSection sectionName="Appetizers" />
            <OrderSection sectionName="Breakfast" />
            <OrderSection sectionName="Lunch Entrées" />
            <OrderTotal />
            <button type="submit" id="submit-order" className="order-button">Submit Order</button>
        </div>
    )
}

function OrderTotal() {
    const [total, setTotal] = useState(0)
    return (
        <p>Order Total: ${total.toFixed(2)}</p>
    )
}

function OrderSection({ sectionName }) {
    const sectionItems = Items.filter(item => item["menu-section"] === sectionName)
    return (
        <div className="order-section">
            <h2 className="order-section-title">{sectionName}</h2>
            <div className="order-gallery">
                {sectionItems.map(item => <OrderItem key={item.image} item={item} />)}
            </div>
        </div>
    )
}

function ItemDescription({ item }) {
    return (
        <>
            <p className="item-name">{item.name}</p>
            <p className="item-price">{`$${item.price.toFixed(2)}`}</p>
            <p>{item.description || ""}</p>
        </>
    )
}

function OrderButton() {
    const [button, setButton] = useState({
        ordered: false,
        className: "order-button default",
        text: "Add to order"
    })
    const orderItem = () => setButton({
        ordered: !button.ordered,
        className: "order-button " + (button.ordered ? "default" : "selected"),
        text: button.ordered ? "Add to order" : "Remove from order"
    })
    return (
        <button className={button.className} onClick={orderItem}>
            {button.text}
        </button>
    )
}

function OrderItem({ item }) {
    return (
        <div className="order-card shadow-lg">
            <img src={`images/${item.image}`} alt={item.name} />
            <div className="order-content">
                <ItemDescription item={item} />
                <div className="order-selection">
                    <OrderQuantity options={[1, 2, 3, 4, 5]} />
                    <OrderButton />
                </div>
            </div>
        </div>
    )
}

function OrderQuantity({ options }) {
    const [quantity, setQuantity] = useState(options[0])
    const changeQuantity = event => setQuantity(event.target.value)
    return (
        <div className="order-quantity-container">
            <label>Quantity: {quantity}</label>
            <select className="order-quantity" value={quantity} onChange={changeQuantity}>
                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default Menu