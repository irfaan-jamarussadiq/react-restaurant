function Form({ handleSubmit, children }) {
    return (
        <form onSubmit={handleSubmit}>
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

export { Form, FormInput, FormTextArea }