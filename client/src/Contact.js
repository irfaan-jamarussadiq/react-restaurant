import Page from "./Page"

function Contact() {
  return (
    <Page title="Contact Us">
      <form className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="contact-message" required />
        </div>
        <button className="btn" type="submit">
          Send message
        </button>
      </form>
    </Page>
  )
}

export default Contact