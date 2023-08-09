import { Route, Routes } from "react-router-dom";
import "./App.scss";
import bgDesktop from "./assets/home/background-home-desktop.jpg";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Destination from "./components/Destination";
import Crew from "./components/Crew";

function App() {
  return (
    <div id="app" style={{ backgroundImage: `url(${bgDesktop})` }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
