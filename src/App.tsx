import { Route, Routes } from "react-router-dom";
import "./App.scss";
import bgDesktop from "./assets/home/background-home-desktop.jpg";
import bgMobile from "./assets/home/background-home-mobile.jpg";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Tech from "./components/Tech";

function App() {
  return (
    <div
      id="app"
      style={{
        backgroundImage: `url(${
          window.screen.width <= 416 ? bgMobile : bgDesktop
        })`,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Tech />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
