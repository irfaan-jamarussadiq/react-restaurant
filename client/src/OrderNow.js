import menuSections from "./data/menu.json";
import prices from "./data/prices.json";
import Page from "./Page";
import MenuSection from "./menu/MenuSection";
import MenuItem from "./menu/MenuItem";
import { useState } from "react";

function OrderNow() {

  const [orderedItems, setOrderedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function addItemToOrder(itemName, itemCount) {
    setOrderedItems(prevItems => [...prevItems, { name: itemName, count: itemCount }]);
  }

  function closePopup() {
    setSelectedItem(null);
  }

  function getTotal(items) {
    const total = items.reduce((accum, curr) => accum + prices[curr.name] * curr.count, 0);
    return total.toFixed(2);
  }

  return (
    <Page>
      {menuSections.map(({ sectionName, sectionItems }, sectionIndex) => (
        <MenuSection key={sectionIndex} title={sectionName}>
          {sectionItems.map((menuItem, itemIndex) => (
            <div key={sectionIndex + itemIndex} onClick={() => setSelectedItem(menuItem)}>
              <MenuItem {...menuItem} />
            </div>
          ))}
        </MenuSection>
      ))}
      {selectedItem && (
        <OrderItemPopup
          item={selectedItem}
          closePopup={() => closePopup()}
          addItem={addItemToOrder}
        />
      )}
      <p className="total-price">
        Total: <span className="dollar-price">${getTotal(orderedItems)}</span>
      </p>
      <button className="btn">Submit Order</button>
    </Page>
  )
}

function OrderItemPopup({ item, addItem, closePopup }) {

  const [count, setCount] = useState(1);
  return (
    <div className="order-popup menu-item">
      <div className="close-btn-container">
        <h3 className="menu-item-name">{item.name}</h3>
        <button className="close btn" onClick={closePopup}>&times;</button>
      </div>
      <div className="menu-img-container">
        <img className="menu-img" src={item.imagePath} alt={item.imageAlt} />
      </div>
      <div className="item-details">
        <p className="order-description">{item.description}</p>
        <div className="item-price-control">
          <p>Unit Price: <span className="dollar-price">${prices[item.name]}</span></p>
          <div>
            <label>Count: </label>
            <select value={count} onChange={e => setCount(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn" onClick={() => addItem(item.name, count)}>Add to Order</button>
    </div>
  )
}

export default OrderNow