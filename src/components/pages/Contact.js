function Form({ handleSubmit, children }) {
    return (
        <form onSubmit={handleSubmit} className="form-fields">
            { children }
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}

function FormInput({ type='text', label, id, required=false }) {
    return (
        <div className="form-field"> 
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} required={required}/>
        </div>
    )
}

function FormTextArea({ label, id }) {
    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} wrap="hard"></textarea>
        </div>
    )
}

function Contact() {
    return (
        <div className="form-container shadow-lg">
            <h2>Contact</h2>
            <Form>
                <FormInput type='email' label='Email' id='email' required={true} />
                <FormInput label='Subject' id='subject' required={true} />
                <FormTextArea label='Message' id='message' />                
            </Form>
        </div>
    )
}

export default Contact