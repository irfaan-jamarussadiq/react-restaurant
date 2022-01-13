import { NavLink } from 'react-router-dom'

function NavBar({ pages }) {
    return (
        <div className="nav-container shadow-lg">
            <nav>
                <ul className="nav-links">
                    {pages.map(page => 
                        <NavLink 
                            className="nav-link" 
                            key={page} 
                            to={`/${page.toLowerCase()}`}
                        >
                            {page}
                        </NavLink>
                    )}                             
                </ul>
            </nav>
        </div>
    )
}

export default NavBar