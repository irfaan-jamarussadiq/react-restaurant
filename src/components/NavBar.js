import { Link } from 'react-scroll'

function NavBar({ links }) {
    return (
        <div className="nav-container shadow-xl">
            <nav>
                <ul className="nav-links">
                    {/* Need page id here! */}
                    {links.map(link => 
                        <Link 
                            className="nav-link" 
                            key={link} 
                            to={link.toLowerCase()}
                            smooth={true}
                        >
                            {link}
                        </Link>
                    )}                             
                </ul>
            </nav>
        </div>
    )
}

export default NavBar