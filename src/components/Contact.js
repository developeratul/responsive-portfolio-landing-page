import ContactImg from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="contact_content_wrapper">
        <div className="contact_form">
          <div className="contact_form_title">
            <h2>Hire Me</h2>
            <p>
              I am available for freelance work. Connect with me via phone: {" "}
              <span>01872786575</span> or email: <span>azammmgol@gmail.com</span>
            </p>
          </div>

          <div className="form">
            <div className="single_field">
              <input type="text" placeholder="Your name" name="name" />
            </div>
            <div className="single_field">
              <input type="email" placeholder="Your email" name="email" />
            </div>
            <div className="single_field">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="single_field">
              <textarea name="message" placeholder="Your message" rows="4"></textarea>
            </div>
            <div className="submit_button">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>

        <div className="contact_img">
          <img src={ContactImg} alt="contact me portfolio image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
