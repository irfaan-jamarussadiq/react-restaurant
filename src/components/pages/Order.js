function Order() {
    return (
        <div id="order" className="page-container">
            <h2>Order Now</h2>
            <OrderSection title="Appetizers">
                <div className="order-row">
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
                        imageName="gulab jamun.jpg"
                        itemName="Gulab Jamun"
                        description="Fried balls of a dough made from milk solids and semolina, soaked with an aromatic syrup spiced with green cardamom, rose water, saffron, and more"
                        price="$2.00" />
                </div>
                <div className="order-row">
                    <OrderItem
                        imageName="parippu-vada.jpg"
                        itemName="Parippu Vada"
                        description=""
                        price="$1.00" />
                    <OrderItem
                        imageName="samosa.jpg"
                        itemName="Samosa"
                        description=""
                        price="$2.00" />
                </div>
            </OrderSection>
            <OrderSection title="Breakfast">
                <div className="order-row">
                    <OrderItem
                        imageName="Masala Dosa.jfif"
                        itemName="Masala Dosa"
                        description=""
                        price="$5.00" />
                    <OrderItem
                        imageName="idli_vada.jfif"
                        itemName="Idli Vada"
                        description=""
                        price="$8.00" />
                    <OrderItem
                        imageName="egg_idiyappam.jpg"
                        itemName="Iddiyappam with Egg Curry"
                        description=""
                        price="$12.00" />
                    <OrderItem
                        imageName="puttu.jpg"
                        itemName="Puttu with Kadala Curry"
                        description=""
                        price="$4.00" />
                </div>
            </OrderSection>
            <OrderSection title="Lunch Entrées">
                <div className="order-row">
                    <OrderItem
                        imageName="veg-biryani.jpg"
                        itemName="Vegetable Biryani"
                        description=""
                        price="$13.00" />
                    <OrderItem
                        imageName="eggBiryani.jfif"
                        itemName="Egg Biryani"
                        description=""
                        price="$15.00" />
                    <OrderItem
                        imageName="egg_porotha.jpg"
                        itemName="Egg Porotha"
                        description=""
                        price="$11.00" />
                    <OrderItem
                        imageName="daal-and-rice.jpg"
                        itemName="Daal and Rice"
                        description="Daal lentils over basmati rice"
                        price="$9.00" />
                </div>
            </OrderSection>
            <button className="order-button">Submit Order</button>
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