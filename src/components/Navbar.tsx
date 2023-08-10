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
    setToggle(false);
  };

  const [currentNav, setCurrentNav] = useState(0);

  useEffect(() => {
    const navItemsList = document.querySelectorAll(".nav-item");
    navItemsList.forEach((item, index) => {
      const currNavItem = item as HTMLDivElement;
      if (index == currentNav && window.screen.width > 416)
        currNavItem.style.borderBottom = "solid 3px white";
      else currNavItem.style.borderBottom = "solid 3px transparent";
    });
  }, [currentNav]);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("#navbar") as HTMLElement;
    if (!toggle) {
      navbar.style.width = "0";
    } else {
      navbar.style.width = "75%";
    }
  }, [toggle]);

  return (
    <div id="navbar-container">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
      <div id="line"></div>
      {window.screen.width <= 416 ? (
        <div
          id="menu-button"
          onClick={() => {
            setToggle((toggle) => !toggle);
          }}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <rect
                x="2.5752"
                y="0.954102"
                width="24"
                height="3"
                transform="rotate(45 2.5752 0.954102)"
                fill="#D0D6F9"
              />
              <rect
                x="0.454102"
                y="17.9246"
                width="24"
                height="3"
                transform="rotate(-45 0.454102 17.9246)"
                fill="#D0D6F9"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
            >
              <rect width="24" height="3" fill="#D0D6F9" />
              <rect y="9" width="24" height="3" fill="#D0D6F9" />
              <rect y="18" width="24" height="3" fill="#D0D6F9" />
            </svg>
          )}
        </div>
      ) : null}
      <div id="navbar">
        {navItems.map((item, index) => (
          <div
            className="nav-item"
            key={index}
            style={{
              borderBottom:
                index == currentNav && window.screen.width > 416
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
