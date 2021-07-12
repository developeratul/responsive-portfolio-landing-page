import { useRef } from "react"
import Logo from "../assets/logo.png"

const Nav = () => {
  const burgerMenuRef = useRef()
  const listNavRef = useRef()
  const navRef = useRef()

  function ToggleNav() {
    const burgerMenu = burgerMenuRef.current
    const listNav = listNavRef.current

    listNav.classList.toggle('nav-active')
    burgerMenu.classList.toggle('toggle')
  }

  window.addEventListener("scroll", () => {
    const nav = navRef.current
    nav.classList.toggle("stickyNav", window.scrollY > 0)
  })

  return (
    <nav ref={navRef}>
      <div className="nav_left_content nav_content_container">
        <div className="nav_logo_container nav_container_item">
          <img src={Logo} alt="Main Logo" />
        </div>

        <ul className="nav_links nav_text_links nav_container_item" ref={listNavRef}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li> <a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav_right_content nav_content_container">
        <ul className="social_links nav_container_item nav_links">
          <li><a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a></li>
        </ul>

        <div className="contact_button nav_container_item">
          <a href="#"><button>Let's Talk</button></a>
        </div>
      </div>

      <div className="bars" ref={burgerMenuRef} onClick={ToggleNav}>
        <div className="line1 line"></div>
        <div className="line2 line"></div>
        <div className="line3 line"></div>
      </div>
    </nav>
  )
}

export default Nav
