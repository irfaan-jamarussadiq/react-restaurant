function MenuSection({ title, children }) {
  return (
    <section className="menu-section">
      <h2 className="menu-section-heading">{title}</h2>
      <div className="menu-section-items">
        {children}
      </div>
    </section>
  )
}

export default MenuSection