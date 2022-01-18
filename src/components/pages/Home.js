import home from '../../images/home.jpg'

function Home() {
    return (
        <div className="home-page img-wrapper">
            <div className="img-overlay">
                <div className="heading-text">
                    <h1 id="title">Latheeth</h1>
                    <h2 id="subtitle">Indian Vegetarian Restaurant</h2>
                </div>
            </div>
            <img src={home} alt="Indian vegetarian food"/>
        </div>
    )
}

export default Home