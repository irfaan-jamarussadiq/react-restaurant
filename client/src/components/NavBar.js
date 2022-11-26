import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

function NavBar({ links }) {
    return (
        <div className="nav-container shadow-xl">
            <nav>
                <div className="nav-links">
                    {links.map(link => {
                        if (link === "Order") {
                            return (
                                <RouterLink                                     
                                    className="nav-link" 
                                    key={link} 
                                    to={link.toLowerCase()}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {link}
                                </RouterLink>
                            )
                        } else {
                            return (
                                <Link 
                                    className="nav-link" 
                                    key={link} 
                                    to={link.toLowerCase()}
                                    smooth={true}
                                    offset={-70}
                                >
                                    {link}
                                </Link>
                            )
                        }
                    })}                             
                </div>
            </nav>
        </div>
    )
}

export default NavBar