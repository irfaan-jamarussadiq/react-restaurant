import { Link, Outlet } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-container">
            <nav>
                <ul className="nav-links">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/menu">Menu</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>                                
                </ul>
            </nav>
            <Outlet />
        </div>

    )
}

export default NavBar