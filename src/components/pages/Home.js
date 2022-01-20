import home from '../../images/home.jpg'
import { Link } from 'react-router-dom'

function Home() {
    /* Consider having this in page component! */
    const onClick = () => {
        window.scrollBy({top: 1.2*window.innerHeight, behavior: 'smooth'})
    }

    return (
        <div className="home-page img-wrapper">
            <div className="img-overlay">
                <div className="heading-text">
                    <h1 id="title">Latheeth</h1>
                    <h2 id="subtitle">Indian Vegetarian Restaurant</h2>
                    <Link to="/" onClick={onClick}>
                        <div className="arrow" />
                    </Link>
                </div>
            </div>
            <img src={home} alt="Indian vegetarian food"/>
        </div>
    )
}

export default Home