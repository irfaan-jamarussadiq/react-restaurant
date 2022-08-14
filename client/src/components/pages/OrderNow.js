import Items from "../../items.json"

function OrderNow() {
    return (
        <div className="page-container" id="order-page">
            <h1>Order Now</h1>
            <OrderSection sectionName="Appetizers" />             
            <OrderSection sectionName="Breakfast" />
            <OrderSection sectionName="Lunch Entrées" />                       
            <button type="submit" id="submit-order" className="order-button">Submit Order</button>
        </div>
    )
}

function OrderSection({ sectionName }) {
    const sectionItems = Items.filter(item => item["menu-section"] === sectionName)
    return (
        <div className="order-section">
            <h3>{sectionName}</h3>
            <div className="order-gallery">
                {sectionItems.map(item => <OrderItem key={item.image} item={item} />)}
            </div>
        </div>
    )
}

function OrderItem({ item }) {
    return (
        <div className="order-card shadow-lg">
            <img src={`images/${item.image}`} alt={item.name} />
            <h4>
                {item.name}
                <span className="item-price">
                    {`$${item.price.toFixed(2)}`}
                </span>
            </h4>
            <div className="order-content">
                <p className="order-description">{item.description || ""}</p>
                <div className="order-selection">
                    <OrderQuantity options={[1, 2, 3, 4, 5]} />
                    <button className="order-button">Add to Order</button>
                </div>
            </div>
        </div>
    )
}

function OrderQuantity({ options }) {
    return (
        <div className="order-quantity-container">
            <label>Quantity</label>
            <select className="order-quantity">
                {options.map(option => <option key={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default OrderNow