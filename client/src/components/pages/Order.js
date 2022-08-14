import Items from "../../items.json"

function Order() {
    return (
        <form id="order" className="page-container">
            <h2>Order Now</h2>
            {Items.map(item => <OrderItem item={item} />)}
            <p>Total: $0.00 </p>
            <button type="submit" id="submit-order" className="order-button">Submit Order</button>
        </form>
    )
}

function OrderSection({ title, children }) {
    return (
        <div className="order-section">
            <h3>{title}</h3>
            <div className="order-gallery">
                {children}
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

export default Order