import "../styles/Layout.scss";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

import bgDesktop from "../assets/home/background-home-desktop.jpg";
import destBgDesktop from "../assets/destination/background-destination-desktop.jpg";
import crewBgDesktop from "../assets/crew/background-crew-desktop.jpg";
import techBgDesktop from "../assets/technology/background-technology-desktop.jpg";

import bgMobile from "../assets/home/background-home-mobile.jpg";
import destBgMobile from "../assets/destination/background-destination-mobile.jpg";
import crewBgMobile from "../assets/crew/background-crew-mobile.jpg";
import techBgMobile from "../assets/technology/background-technology-mobile.jpg";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const app = document.querySelector("#app") as HTMLDivElement;
    if (location.pathname == "/" || location.pathname == "/home") {
      app.style.backgroundImage =
        "url(" + (window.screen.width <= 914 ? bgMobile : bgDesktop) + ")";
    } else if (location.pathname == "/destination") {
      app.style.backgroundImage =
        "url(" +
        (window.screen.width <= 914 ? destBgMobile : destBgDesktop) +
        ")";
    } else if (location.pathname == "/crew") {
      app.style.backgroundImage =
        "url(" +
        (window.screen.width <= 914 ? crewBgMobile : crewBgDesktop) +
        ")";
    } else if (location.pathname == "/technology") {
      app.style.backgroundImage =
        "url(" +
        (window.screen.width <= 914 ? techBgMobile : techBgDesktop) +
        ")";
    }
  }, [location]);

  return (
    <div id="layout">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
