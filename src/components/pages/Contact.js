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
                    <label>Email</label>
                    <input className="form-input"/>
                </div>
                <div className="form-field">
                    <label>Subject</label>
                    <input className="form-input"/>
                </div>
                <div className="form-field">
                    <label>Message</label>
                    <textarea rows="4" className="form-input"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact