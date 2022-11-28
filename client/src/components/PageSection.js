function PageSection({ title, id, children }) {
    return (
        <div className="page-section" id={id}>
            <h2 className="section-title">{title}</h2>
            {children}
        </div>
    )
}

export default PageSection