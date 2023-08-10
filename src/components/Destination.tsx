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
  desc: string;
}

const Destination = () => {
  const planets: Planet[] = [
    {
      image: moon,
      name: "moon",
      avgDist: "384,400 KM",
      eastTravelTime: "3 DAYS",
      index: 0,
      desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    },
    {
      image: mars,
      name: "mars",
      avgDist: "225 MIL. KM",
      eastTravelTime: "9 MONTHS",
      index: 1,
      desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    },
    {
      image: europa,
      name: "europa",
      avgDist: "628 MIL. KM",
      eastTravelTime: "3 YEARS",
      index: 2,
      desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    },
    {
      image: titan,
      name: "titan",
      avgDist: "1.6 BIL. KM",
      eastTravelTime: "7 YEARS",
      index: 3,
      desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    },
  ];

  const [currentPlanet, setCurrentPlanet] = useState<Planet>(planets[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlanetChange = (
    _e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (index == currentIndex) return;
    const left = document.querySelector("#left") as HTMLDivElement;
    const right = document.querySelector("#right") as HTMLDivElement;

    left.childNodes.forEach((element) => {
      const child = element as HTMLElement;
      if (child.id != "title") {
        child.style.opacity = "0";
      }
    });

    right.childNodes.forEach((element) => {
      const child = element as HTMLElement;
      if (child.id != "mini-nav") {
        child.style.opacity = "0";
      }
    });

    setTimeout(() => {
      setCurrentPlanet(planets[index]);
      setCurrentIndex(index);
      left.childNodes.forEach((element) => {
        const child = element as HTMLElement;
        if (child.id != "title") {
          child.style.opacity = "1";
        }
      });
      right.childNodes.forEach((element) => {
        const child = element as HTMLElement;
        if (child.id != "mini-nav") {
          child.style.opacity = "1";
        }
      });
    }, 500);
  };

  return (
    <div id="destination">
      <div id="left">
        <div id="title">
          <h1>01</h1>
          <h1>PICK YOUR DESTINATION</h1>
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
              onMouseEnter={(e) => {
                if (index != currentIndex)
                  e.currentTarget.style.borderBottom = "solid 3px grey";
              }}
              onMouseLeave={(e) => {
                if (index != currentIndex)
                  e.currentTarget.style.borderBottom = "solid 3px transparent";
              }}
            >
              {planet.name.toUpperCase()}
            </div>
          ))}
        </div>
        <p id="planet-name">{currentPlanet.name.toUpperCase()}</p>
        <p id="desc">{currentPlanet.desc}</p>
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
