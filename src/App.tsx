import "./App.scss";
import bgDesktop from "./assets/home/background-home-desktop.jpg";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="app" style={{ backgroundImage: `url(${bgDesktop})` }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
