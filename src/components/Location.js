function Location({ streetAddress, city, state, zipcode }) {
    return (
        <div>
            <h3>Location</h3>
            <span className="street-address">
                {`${streetAddress}, ${city}, ${state} ${zipcode}`}
            </span>
        </div>
    )
}

export default Location