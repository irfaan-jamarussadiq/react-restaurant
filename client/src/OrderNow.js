import Page from "./Page";

function OrderNow() {

  return (
    <Page title="Order Now">
      <div className="menu-section">
        <h2 className="menu-section-heading">Appetizers</h2>
        <div className="menu-item">
          <h3>Samosa</h3>
          <div className="menu-img-container">
            <img className="menu-img" src="images/samosa.jpg" alt="Samosa" />
          </div>
          <p>Indian fried snack made from potatoes and green peas</p>
        </div>
      </div>
      <button className="btn">Submit Order</button>
    </Page>
  )
}

export default OrderNow