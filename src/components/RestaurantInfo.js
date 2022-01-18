import { Link } from 'react-router-dom'

function Location({ streetAddress, city, state, zipcode }) {
    return (
        <div className="restaurant-contact" id="address">
            <i className="fas fa-home"></i>
            <span className="restaurant-icon">
                {`${streetAddress}, ${city}, ${state} ${zipcode}`}
            </span>
        </div>
    )
}

function PhoneNumber({ number }) {
    return (
        <div className="restaurant-contact" id="phone">
            <i className="fas fa-phone-alt"></i>
            <span className="restaurant-icon">{number}</span>
        </div>
    )
}

function SocialMedia({ platforms }) {
    return (
        <div className="social-media">
            {platforms.map(platform => 
                <i key={platform} className={`fab fa-${platform}`} />
            )}
        </div>
    )
}

function RestaurantInfo({ streetAddress, city, state, zipcode, phone }) {
    return (
        <div className="restaurant-info">
            <Location 
                streetAddress={streetAddress}
                city={city}
                state={state}
                zipcode={zipcode}
            />
            <Link to="/" className="nav-link" id="company">Latheeth</Link>
            <PhoneNumber number={phone} />
            <SocialMedia platforms={['twitter', 'instagram', 'yelp']} />
        </div>
    )
}

export default RestaurantInfo