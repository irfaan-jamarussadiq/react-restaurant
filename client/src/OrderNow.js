import { useState } from "react"
import Page from "./Page";

function OrderNow() {

  const [showPopup, setShowPopup] = useState()

  return (
    <Page title="Order Now">
      <div className="menu-section">
        <h2 className="menu-section-heading">Appetizers</h2>
        <div className="order-item menu-item" onClick={() => setShowPopup(!showPopup)}>
          <h3>Samosa</h3>
          <div className="menu-img-container">
            <img className="menu-img" src="images/samosa.jpg" alt="Samosa" />
          </div>
          <p>Indian fried snack made from potatoes and green peas</p>
        </div>
        {showPopup && (
          <OrderPopup
            order={{
              name: "Samosa",
              imageSrc: "images/samosa.jpg",
              imageAlt: "Samosa",
              description: "Indian fried snack made from potatoes and green peas",
              price: "4.99"
            }}
            closePopup={() => setShowPopup(!showPopup)}
          />
        )}
      </div>
      <button className="btn">Submit Order</button>
    </Page>
  )
}

function OrderPopup({ order, closePopup }) {
  const [orderCount, setOrderCount] = useState(1);

  return (
    <div className="order-popup slide-in">
      <div className="order-btn-container">
        <h2>{order.name}</h2>
        <button className="close-btn" onClick={closePopup}>&times;</button>
      </div>
      <div className="menu-img-container">
        <img className="menu-img" src={order.imageSrc} alt={order.imageAlt} />
      </div>
      <p>{order.description}</p>
      <p className="order-price">${`${orderCount * order.price}`}</p>
      <div className="order-counter">
        <div className="order-count-control">
          <input type="number" min="1" max="10" />
        </div>
      </div>
    </div>
  )
}

export default OrderNow