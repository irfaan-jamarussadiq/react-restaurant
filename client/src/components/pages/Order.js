import { Link } from "react-router-dom"

function Order() {
    return (
        <form id="order" className="page-container">
            <h2>Order</h2>
            <p>View Our Menu</p>
            <Link to="order" target="_blank" rel="noopener noreferrer">
                Order Now
            </Link>
        </form>
    )
}

export default Order