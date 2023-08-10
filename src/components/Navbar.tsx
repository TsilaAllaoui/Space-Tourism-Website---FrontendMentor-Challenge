import "../styles/Navbar.scss";
import logo from "../assets/shared/logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  const navigate = useNavigate();

  const handleNavigate = (
    _e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    setCurrentNav(index);
    navigate("/" + (index == 0 ? "" : navItems[index].toLowerCase()));
  };

  const [currentNav, setCurrentNav] = useState(0);

  useEffect(() => {
    const navItemsList = document.querySelectorAll(".nav-item");
    navItemsList.forEach((item, index) => {
      const currNavItem = item as HTMLDivElement;
      if (index == currentNav)
        currNavItem.style.borderBottom = "solid 3px white";
      else currNavItem.style.borderBottom = "solid 3px transparent";
    });
  }, [currentNav]);

  return (
    <div id="navbar-container">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="line"></div>
      <div id="navbar">
        {navItems.map((item, index) => (
          <div
            className="nav-item"
            key={index}
            style={{
              borderBottom:
                index == currentNav
                  ? "solid 3px white"
                  : "solid 3px transparent",
            }}
            onClick={(e) => handleNavigate(e, index)}
            onMouseEnter={(e) => {
              if (index != currentNav)
                e.currentTarget.style.borderBottom = "solid 3px grey";
            }}
            onMouseLeave={(e) => {
              if (index != currentNav)
                e.currentTarget.style.borderBottom = "solid 3px transparent";
            }}
          >
            <p>0{index}</p>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
