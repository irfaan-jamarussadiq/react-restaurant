function NavBar() {
  const links = ["Home", "Menu", "Order Now", "Contact Us"]
  return (
    <nav>
      <ul className="nav-links">
        {links.map(link => (
          <li>
            <a className="nav-link" href="/">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar