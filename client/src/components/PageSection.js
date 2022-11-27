function PageSection({ title, children }) {
    return (
        <div className="page-section">
            <h2 className="section-title">{title}</h2>
            {children}
        </div>
    )
}

export default PageSection