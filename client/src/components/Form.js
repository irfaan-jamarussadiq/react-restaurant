function Form({ handleSubmit, children }) {
    return (
        <form onSubmit={handleSubmit}>
            { children }
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}

function FormInput({ type="text", label, id, required=false }) {
    return (
        <div className="form-field"> 
            <label htmlFor={id}>
                <p>{label}</p>
                <input id={id} type={type} required={required}/>
            </label>
        </div>
    )
}

function FormTextArea({ label, id }) {
    return (
        <div className="form-field">
            <label htmlFor={id}>
                <p>{label}</p>
                <textarea id={id} wrap="hard"></textarea>
            </label>
        </div>
    )
}

export { Form, FormInput, FormTextArea }