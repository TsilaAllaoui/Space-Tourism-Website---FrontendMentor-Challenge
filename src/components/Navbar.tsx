import "../styles/Navbar.scss";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const navItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div id="navbar-container">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="line"></div>
      <div id="navbar">
        {navItems.map((item, index) => (
          <div className="nav-item">
            <p>0{index}</p>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
