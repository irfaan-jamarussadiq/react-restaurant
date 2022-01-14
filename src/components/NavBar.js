import { NavLink } from 'react-router-dom'

function NavBar({ links }) {
    return (
        <div className="nav-container shadow-lg">
            <nav>
                <ul className="nav-links">
                    {links.map(link => 
                        <NavLink 
                            className="nav-link" 
                            key={link} 
                            to={`/${link.toLowerCase()}`}
                        >
                            {link}
                        </NavLink>
                    )}                             
                </ul>
            </nav>
        </div>
    )
}

export default NavBar