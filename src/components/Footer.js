import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <section className="footer_section" id="contact">
      <div className="logo">
        <img src={Logo} alt="Main logo" />
      </div>

      <ul className="social_links">
        <li><a href="https://www.facebook.com/minhazurrahaman.ratul/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a></li>
        <li><a href="https://twitter.com/Ratul_devR" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a></li>
        <li><a href="https://www.linkedin.com/in/developer-ratul-407352211/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a></li>
        <li><a href="https://www.instagram.com/ratul9694/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a></li>
      </ul>

      <div className="copyright">
        © 2021. All rights reserved by DevR
      </div>
    </section>
  )
}

export default Footer
