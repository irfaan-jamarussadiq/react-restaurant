import { Link } from 'react-scroll'

function NavBar({ links }) {
    return (
        <div className="nav-container shadow-xl">
            <nav>
                <ul className="nav-links">
                    {links.map(link => 
                        <Link 
                            className="nav-link" 
                            key={link} 
                            to={link.toLowerCase()}
                            smooth={true}
                            offset={-70}
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