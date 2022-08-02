import Menu from "./Menu"

function Order() {
    return (
        <div id="order" className="page-container">
            <h2>Order Now</h2>
            <OrderSection title="Appetizers">
                <OrderItem
                    imageName="bajji.jpg"
                    itemName="Aloo Bajji"
                    description="Crispy and delicious bajji made with besan flour, cornflour, potato, and spices"
                    price="$4.00" />

                <OrderItem
                    imageName="pakora.jpg"
                    itemName="Pakora"
                    description="Crispy and delicious pakora"
                    price="$3.00" />
            </OrderSection>
            <OrderSection title="Lunch Entrées">
                <OrderItem
                    imageName="daal-and-rice.jpg"
                    itemName="Daal and Rice"
                    description="Daal lentils over basmati rice"
                    price="$10.00" />
            </OrderSection>
            <button className="order-button">Submit Order</button>
            <Menu />
        </div>
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

function OrderItem({ imageName, itemName, description, price }) {
    return (
        <div className="order-card shadow-lg">
            <img src={`images/${imageName}`} alt={itemName} />
            <h4>{itemName} <span>- {price}</span></h4>
            <div className="order-content">
                <p className="order-description">{description}</p>
                <div className="order-selection">
                    <OrderQuantity options={[1,2,3,4,5]} />
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
                {options.map(option => <option>{option}</option>)}
            </select>
        </div>
    )
}

export default Order