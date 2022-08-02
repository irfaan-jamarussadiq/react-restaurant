import Menu from "./Menu"

function Order() {
    return (
        <div id="order" className="page-container">
            <h2>Order Now</h2>
            <h3>Appetizers</h3>
            <div className="order-gallery">
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

                <OrderItem
                    imageName="daal-and-rice.jpg"
                    itemName="Daal and Rice"
                    description="Daal lentils over basmati rice"
                    price="$10.00" />
            </div>
            <button className="order-button">Submit Order</button>
            <Menu />
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
                    <div className="order-quantity-container">
                        <label>Quantity</label>
                        <select className="order-quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button className="order-button">Add to Order</button>
                </div>
            </div>

        </div>
    )
}

export default Order