import { Outlet, useLocation } from "react-router-dom";
import "../styles/Layout.scss";
import Navbar from "./Navbar";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import destBgDesktop from "../assets/destination/background-destination-desktop.jpg";
import { useEffect } from "react";
import crewBgDesktop from "../assets/crew/background-crew-desktop.jpg";
import techBgDesktop from "../assets/technology/background-technology-desktop.jpg";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const app = document.querySelector("#app") as HTMLDivElement;
    if (location.pathname == "/" || location.pathname == "/home") {
      app.style.backgroundImage = "url(" + bgDesktop + ")";
    } else if (location.pathname == "/destination") {
      app.style.backgroundImage = "url(" + destBgDesktop + ")";
    } else if (location.pathname == "/crew") {
      app.style.backgroundImage = "url(" + crewBgDesktop + ")";
    } else if (location.pathname == "/technology") {
      app.style.backgroundImage = "url(" + techBgDesktop + ")";
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
