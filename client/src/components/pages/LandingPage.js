import { Link } from 'react-scroll'

function LandingPage() {
    return (
        <div id="home">
            <div className="landing-page-image-wrapper">
                <img src="images/sadhya.jpg" alt="Indian sadya food" loading="lazy" />
            </div>
            <div className="landing-page-content">
                <div className="shadow-xl" id="logo">
                    <h1 className="name">Latheeth</h1>
                    <p className="address">12345 Example Street</p>
                    <p className="address">City, State 12345</p>
                </div>
                <Link to="about" className="arrow-link" smooth={true} offset={-70}>
                    <div className="arrow" />
                </Link>
            </div>
        </div>
    )
}

export default LandingPage