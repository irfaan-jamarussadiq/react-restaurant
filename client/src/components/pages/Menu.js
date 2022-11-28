import { useState } from "react"
import { useNavigate,Navigate } from 'react-router-dom';
import Items from "../../items.json"

function Menu() {
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/confirm-order")
    }
    return (
        <div className="page-section" id="order-page">
            <h1 className="menu-title">Order Now</h1>
            <OrderSection sectionName="Appetizers" total={total} setTotal={setTotal} />
            <OrderSection sectionName="Breakfast" total={total} setTotal={setTotal} />
            <OrderSection sectionName="Lunch Entrées" total={total} setTotal={setTotal} />
            <p className="order-total">Order Total: ${total.toFixed(2)}</p>
            <button 
                type="submit" 
                id="submit-order" 
                onSubmit={handleSubmit} 
                className="order-button"
            >
                Submit Order
            </button>
        </div>
    )
}

function OrderSection({ sectionName, total, setTotal }) {
    const sectionItems = Items.filter(item => item["menu-section"] === sectionName)    
    const [orders, setOrders] = useState(
        Array.from({length: sectionItems.length}, () => ({
            ordered: false,
            quantity: 0
        }))
    )
    const setOrdered = (index) => {
        const ordersCopy = orders.slice()
        const item = sectionItems[index]        
        let prevOrdered = ordersCopy[index].ordered
        ordersCopy[index].ordered = !prevOrdered
        if (ordersCopy[index].ordered) {
            setTotal(total + ordersCopy[index].quantity * item.price)
        } else {
            setTotal(total - ordersCopy[index].quantity * item.price)
            ordersCopy[index].quantity = 0
        }
        setOrders(ordersCopy)
    } 
    const setQuantity = (index) => (event) => {
        const ordersCopy = orders.slice()
        ordersCopy[index].quantity = event.target.value
        if (ordersCopy[index].ordered) {
            setOrders(ordersCopy)
        }
    }
    return (
        <div className="order-section">
            <h2 className="order-section-title">{sectionName}</h2>
            <div className="order-gallery">
                {sectionItems.map((item, index) => {
                    return (
                        <OrderItem 
                            key={item.name} 
                            item={item} 
                            order={orders[index]}
                            setQuantity={setQuantity(index)}
                            setOrdered={() => setOrdered(index)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function OrderItem({ item, order, setQuantity, setOrdered }) { 
    return (
        <div className="order-card shadow-lg">
            <img src={`images/${item.image}`} alt={item.name} />
            <div className="order-content">
                <ItemDescription item={item} />
                <div className="order-selection">
                    <OrderQuantity 
                        quantity={order.quantity} 
                        setQuantity={setQuantity} 
                        disabled={order.ordered} 
                    />
                    <OrderButton ordered={order.ordered} setOrdered={setOrdered} />
                </div>
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

function OrderQuantity({ quantity, setQuantity, disabled=false }) {
    return (
        <div className="order-quantity-container">
            <label>Quantity: {quantity}</label>
            <select className="order-quantity" disabled={disabled} onChange={(event) => setQuantity(event)}>
                <option>0</option>                
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    )
}

function OrderButton({ ordered, setOrdered }) {
    const buttonClass = ordered ? "order-btn selected" : "order-btn default"
    const buttonText = ordered ? "Remove from order" : "Add to order"
    return (
        <button className={buttonClass} onClick={setOrdered}>
            {buttonText}
        </button>
    )
}

export default Menu