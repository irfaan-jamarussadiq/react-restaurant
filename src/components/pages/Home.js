import home from '../../images/home.jpg'
import { Link } from 'react-scroll'

function Home() {
    return (
        <div className="home-page img-wrapper" id="home">
            <div className="img-overlay">
                <div className="header-container">
                    <h1>Latheeth</h1>
                    <p className="address">12345 Example Street</p>
                    <p className="address">City, State 12345</p>
                    <Link to="about" smooth={true} offset={-70}>
                        <div className="arrow" />
                    </Link>
                </div>
            </div>
            <img src={home} alt="Indian vegetarian food"/>
        </div>
    )
}

export default Home