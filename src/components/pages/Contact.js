// import Form from '../Form.js'

function Form() {
    return (
        <form>
            { /* ... */ }
        </form>
    )
}

function Contact() {
    return (
        <div className="form-container shadow-lg">
            <h2>Contact</h2>
            <form className="form-fields">
                <div className="form-field"> 
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" required/>
                </div>
                <div className="form-field">
                    <label htmlFor="subject">
                        Subject
                    </label>
                    <input id="subject" type="text" required/>
                </div>
                <div className="form-field">
                    <label htmlFor="message" type="text">Message</label>
                    <textarea id="message" wrap="hard"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact