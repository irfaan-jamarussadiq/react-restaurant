function NavBar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/menu">
            Menu
          </a>
        </li>
        <li>
          <a className="nav-link" href="/order">
            Order Now
          </a>
        </li>
        <li>
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar