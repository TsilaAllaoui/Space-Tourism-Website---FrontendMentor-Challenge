import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const showUnderlay = (val: boolean) => {
    const outer = document.querySelector("#outer-circle") as HTMLElement;
    outer.style.animation = val
      ? "wiggle 1000ms infinite alternate"
      : "wiggle-out 1000ms forwards";
  };

  return (
    <div id="home">
      <div id="left">
        <h1>SO, YOU WANT TO TRAVEL TO</h1>
        <p>SPACE</p>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div id="right">
        <div id="outer-circle"></div>
        <div
          id="circle"
          onClick={() => {
            navigate("destination");
          }}
          onMouseEnter={() => showUnderlay(true)}
          onMouseLeave={() => showUnderlay(false)}
        >
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
