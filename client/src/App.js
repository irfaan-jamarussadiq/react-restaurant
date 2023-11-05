import "./App.css"

function App() {

  return (
    <div className="App">
      <div id="main-page">
        <div className="main-page-img-container">
          <picture>
            <source media="(min-width: 1068px)" srcSet="images/indian-restaurant.jpg" />
            <source media="(max-width: 600px)" srcSet="images/indian-restaurant-2.jpg" />
            <img src="images/indian-restaurant.jpg" alt="Top view of food at an Indian restaurant" />
          </picture>
          <div id="site-heading">
            <h1 id="website-title">Latheeth</h1>
            <p id="website-subtitle">A South Indian vegetarian restaurant</p>
            <button className="btn">
              <a className="nav-link" href="/menu">Explore our Menu</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App