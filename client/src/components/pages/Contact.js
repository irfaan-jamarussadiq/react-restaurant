import PageSection from "../PageSection"
import { Form, FormInput, FormTextArea } from "../Form"

function Contact() {
    return (
        <PageSection title="Contact" id="contact">
            <Form>
                <div className="form-fields">
                    <FormInput type="email" label="Email" id="email" required={true} />
                    <FormInput label="Subject" id="subject" required={true} />
                    <FormTextArea label="Message" id="message" /> 
                </div>               
            </Form>
        </PageSection>
    )
}

export default Contact