import "../styles/Destination.scss";
import europa from "../assets/destination/image-europa.png";
import mars from "../assets/destination/image-mars.png";
import moon from "../assets/destination/image-moon.png";
import titan from "../assets/destination/image-titan.png";
import React, { useState } from "react";

interface Planet {
  image: string;
  name: string;
  avgDist: string;
  eastTravelTime: string;
  index: number;
}

const Destination = () => {
  const planets: Planet[] = [
    {
      image: moon,
      name: "moon",
      avgDist: "384,400 KM",
      eastTravelTime: "3 DAYS",
      index: 0,
    },
    {
      image: mars,
      name: "mars",
      avgDist: "225 MIL. KM",
      eastTravelTime: "9 MONTHS",
      index: 1,
    },
    {
      image: europa,
      name: "europa",
      avgDist: "628 MIL. KM",
      eastTravelTime: "3 YEARS",
      index: 2,
    },
    {
      image: titan,
      name: "titan",
      avgDist: "1.6 BIL. KM",
      eastTravelTime: "7 YEARS",
      index: 3,
    },
  ];

  const [currentPlanet, setCurrentPlanet] = useState<Planet>(planets[0]);

  const handlePlanetChange = (
    _e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const left = document.querySelector("#left") as HTMLDivElement;
    const right = document.querySelector("#right") as HTMLDivElement;
    left.style.opacity = "0";
    right.style.opacity = "0";
    setTimeout(() => {
      left.style.opacity = "1";
      right.style.opacity = "1";
      setCurrentPlanet(planets[index]);
    }, 500);
  };

  return (
    <div id="destination">
      <div id="left">
        <div id="title">
          <h1>01</h1>
          <h1> PICK YOUR DESTINATION</h1>
        </div>
        <img src={currentPlanet.image} alt="moon" />
      </div>
      <div id="right">
        <div id="mini-nav">
          {planets.map((planet, index) => (
            <div
              key={planet.name}
              className="planet"
              style={{
                borderBottom: `solid 3px ${
                  index == currentPlanet.index ? "white" : "transparent"
                }`,
              }}
              onClick={(e) => handlePlanetChange(e, index)}
            >
              {planet.name.toUpperCase()}
            </div>
          ))}
        </div>
        <p id="planet-name">{currentPlanet.name.toUpperCase()}</p>
        <p id="desc">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div id="line"></div>
        <div id="distance">
          <div id="dist">
            <p>AVG. DISTANCE</p>
            <p>{currentPlanet.avgDist}</p>
          </div>
          <div id="east-travel">
            <p>EAST. TRAVEL TIME</p>
            <p>{currentPlanet.eastTravelTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
