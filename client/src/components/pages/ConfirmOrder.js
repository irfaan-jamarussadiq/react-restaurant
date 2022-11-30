import { useNavigate, useLocation } from "react-router-dom"
import ItemDescription from "../ItemDescription"

function ConfirmOrder() {
    
    const navigate = useNavigate()

    const { state } = useLocation()

    const getOrdersTotal = (orders) => {
        return (
            orders
                .flat()
                .filter(order => order.ordered)
                .map(order => order.price * order.quantity)
                .reduce((acc, curr) => acc + curr, 0)
                .toFixed(2)
        )
    }

    const goBackToOrder = (event) => {
        navigate("../order", {replace: true})
    }

    const sections = ["Appetizers", "Breakfast", "Lunch Entrées"]

    const orders = state.orders
        .map(section => section.filter(item => item.ordered))
        .filter(section => section.length > 0)

    return (
        <div className="page-section order-page">
            <h1 className="order-page-title">Confirm Your Order</h1>
            {orders.map((items, index) => (
                <div>
                    <h2>{sections[index]}</h2>
                    {items
                    .filter(item => item.ordered)
                    .map(item => (
                        <div className="order-card shadow-lg">
                            <img src={`images/${item.image}`} alt={item.name} />
                            <ItemDescription item={item} />
                            <div className="order-quantity-container">
                                <span className="item-quantity">Quantity: </span> 
                                {item.quantity}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <p>Order Total: ${getOrdersTotal(state.orders)}</p>
            <button onClick={goBackToOrder}>Back to order</button>
        </div>
    )
}

export default ConfirmOrder