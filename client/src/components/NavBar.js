import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="nav-container shadow-xl">
            <NavLink link="about" text="About" />
            <NavLink link="hours" text="Hours" />
            <RouterLink 
                className="nav-link" 
                to="order" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Order
            </RouterLink>
            <NavLink className="nav-link" link="contact" text="Contact" />                        
        </nav>
    )
}

function NavLink({link, text}) {
    return (
        <Link
            className="nav-link" 
            to={link}
            smooth={true} 
            offset={-70}
        >
            {text}
        </Link>
    )
}

export default NavBar