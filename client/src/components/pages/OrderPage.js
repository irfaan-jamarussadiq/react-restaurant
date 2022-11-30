import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import ItemDescription from "../ItemDescription"
import Items from "../../items.json"

function OrderPage() {
    
    const sections = ["Appetizers", "Breakfast", "Lunch Entrées"]

    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("../confirm-order", {replace: true, state: {orders: orders}})
    }

    const [total, setTotal] = useState(0)

    const [orders, setOrders] = useState(
        Array.from(sections, (name) => {
            const items = Items.filter(item => item["menu-section"] === name)
            return Array.from(items, (item) => ({
                name: item.name,
                image: item.image,
                description: item.description,
                price: item.price,
                ordered: false,
                quantity: 0
            }))
        })
    )

    const setOrdered = (sectionIndex) => (index) => (event) => {
        event.preventDefault()
        const ordersCopy = orders.slice()      
        let prevItem = ordersCopy[sectionIndex][index]
        ordersCopy[sectionIndex][index].ordered = !prevItem.ordered
        const item = ordersCopy[sectionIndex][index]        
        if (!prevItem.ordered) {
            setTotal(total - item.quantity * item.price)
            ordersCopy[sectionIndex][index].quantity = 0
        } else {
            setTotal(total + item.quantity * item.price)
        }
        setOrders(ordersCopy)
    }

    const setQuantity = (sectionIndex) => (index) => (event) => {
        event.preventDefault()
        const ordersCopy = orders.slice()
        ordersCopy[sectionIndex][index].quantity = event.target.value
        if (ordersCopy[sectionIndex][index].ordered) {
            setOrders(ordersCopy)
        }
    }

    return (
        <form className="page-section order-page">
            <h1 className="order-page-title">Order Now</h1>
            {sections.map((section, index) => (
                <OrderSection
                    key={section} 
                    name={section} 
                    orders={orders[index]} 
                    setOrdered={setOrdered(index)}
                    setQuantity={setQuantity(index)}
                />
            ))}
            <p className="order-total">Order Total: ${total.toFixed(2)}</p>
            <button 
                type="submit" 
                id="submit-order" 
                onClick={handleSubmit} 
                className="order-button"
            >
                Submit Order
            </button>
        </form>
    )
}

function OrderSection({ name, orders, setOrdered, setQuantity }) {  
    return (
        <div className="order-section">
            <h2 className="order-section-title">{name}</h2>
            <div className="order-gallery">
                {orders.map((item, index) => (
                    <OrderItem 
                        key={item.name} 
                        item={item} 
                        order={orders[index]}
                        setQuantity={setQuantity(index)}
                        setOrdered={setOrdered(index)}
                    />
                ))}
            </div>
        </div>
    )
}

function OrderItem({ item, order, setOrdered, setQuantity }) { 
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

function OrderQuantity({ quantity, setQuantity, disabled=false }) {
    return (
        <div className="order-quantity-container">
            <label>Quantity: {quantity}</label>
            <select 
                className="order-quantity" 
                disabled={disabled} 
                onChange={setQuantity}
            >
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

export default OrderPage