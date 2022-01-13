function Footer({ year, company, developer }) {
    return (
        <div id="footer">
            <footer>
                <p>© {year} {company} | Developed by {developer}</p>
            </footer>
        </div>
    )
}

export default Footer