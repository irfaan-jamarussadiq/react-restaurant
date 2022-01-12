import { Link, Outlet } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/contact">Contact</Link>                                
                </ul>
            </nav>
            <Outlet />
        </div>

    )
}

export default NavBar