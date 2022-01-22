function Footer({ year, company, developer }) {
    return (
        <div id="footer">
            <footer>
                <span className="footer-info">© {year} {company}</span>
                <span className="footer-info" id="pipe"> | </span>
                <span className="footer-info"> Developed by {developer}</span>
            </footer>
        </div>
    )
}

export default Footer