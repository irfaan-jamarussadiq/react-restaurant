function NavBar() {
  
  const sections = ["Home", "Menu", "Order Now", "Contact Us"]
  const links = ["/", "/menu", "/order", "/contact"]
  return (
    <nav>
      <ul className="nav-links">
        {sections.map((section, index) => (
          <li key={index}>
            <a className="nav-link" href={links[index]}>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar