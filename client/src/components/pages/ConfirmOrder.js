import { useNavigate, useLocation } from "react-router-dom";

function ConfirmOrder() {
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log(state);
    const goBackToOrder = (event) => {
        navigate("../order", {replace: true})
    }
    return (
        <div className="page-section order-page">
            <h1 className="order-page-title">Confirm Your Order</h1>
            <p>Order Total: ${state.total.toFixed(2)}</p>
            <button onClick={goBackToOrder}>Back to order</button>
        </div>
    )
}

export default ConfirmOrder