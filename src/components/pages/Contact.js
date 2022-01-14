import { Form, FormInput, FormTextArea } from '../Form'

function Contact() {
    return (
        <div className="form-container">
            <h2>Contact</h2>
            <Form>
                <div className="form-fields">
                    <FormInput type='email' label='Email' id='email' required={true} />
                    <FormInput label='Subject' id='subject' required={true} />
                    <FormTextArea label='Message' id='message' /> 
                </div>               
            </Form>
        </div>
    )
}

export default Contact