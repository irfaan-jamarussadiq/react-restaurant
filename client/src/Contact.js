function Contact() {
  return (
    <form className="contact-form">
      <h2>Contact Us</h2>
      <div className="form-group">
        <label>Name</label>
        <input />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea className="contact-message" />
      </div>
      <button className="contact-submit" type="submit">
        Send message
      </button>
    </form>
  )
}

export default Contact