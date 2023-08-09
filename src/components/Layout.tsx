import { Outlet, useLocation } from "react-router-dom";
import "../styles/Layout.scss";
import Navbar from "./Navbar";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import destBgDesktop from "../assets/destination/background-destination-desktop.jpg";
import { useEffect } from "react";
import crewBgDesktop from "../assets/crew/background-crew-desktop.jpg";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const app = document.querySelector("#app") as HTMLDivElement;
    if (location.pathname == "/" || location.pathname == "/home") {
      app.style.backgroundImage = "url(" + bgDesktop + ")";
      console.log(app.style.backgroundImage);
    } else if (location.pathname == "/destination") {
      app.style.backgroundImage = "url(" + destBgDesktop + ")";
      console.log(app.style.backgroundImage);
    } else if (location.pathname == "/crew") {
      app.style.backgroundImage = "url(" + crewBgDesktop + ")";
      console.log(app.style.backgroundImage);
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
