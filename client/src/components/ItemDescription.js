function ItemDescription({ item }) {
    return (
        <>
            <p className="item-name">{item.name}</p>
            <p className="item-price">{`$${item.price.toFixed(2)}`}</p>
            <p>{item.description || ""}</p>
        </>
    )
}

export default ItemDescription