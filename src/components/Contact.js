import ContactImg from "../assets/contact.jpg"

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="contact_content_wrapper">
        <div className="contact_form"></div>

        <div className="contact_img">
          <img src={ContactImg} alt="contact me portfolio image" />
        </div>
      </div>
    </section>
  )
}

export default Contact
