import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav_left_content">
        <div className="nav_logo_container">
          <img src={Logo} alt="Main Logo" />
        </div>

        <ul className="nav_links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
