import React, { useState } from "react";
import "../styles/Crew.scss";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

interface CrewMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const Crew = () => {
  const crew: CrewMember[] = [
    {
      name: "DOUGLAS HURLEY",
      position: "COMMANDER",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: douglas,
    },
    {
      name: "MARK SHUTTLEWORTH",
      position: "MISSION SPECIALIST",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: mark,
    },
    {
      name: "VICTOR GLOVER",
      position: "PILOT",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: victor,
    },
    {
      name: "ANOUSHEH ANSARI",
      position: "FLIGHT ENGINEER",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: anousheh,
    },
  ];

  const [currentCrew, setCurrentCrew] = useState<CrewMember>(crew[0]);
  const [currIndex, setcurrIndex] = useState(0);

  const handleCrewSelection = (
    _e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (index == currIndex) return;
    const left = document.querySelector("#left") as HTMLDivElement;
    left.childNodes.forEach((element) => {
      const child = element as HTMLElement;
      if (child.id != "title" && child.id != "indicator") {
        child.style.opacity = "0";
      }
    });

    if (window.screen.width > 416) {
      const right = document.querySelector("#right") as HTMLDivElement;
      right.style.opacity = "0";
    }

    setTimeout(() => {
      setCurrentCrew(crew[index]);
      setcurrIndex(index);
      left.childNodes.forEach((element) => {
        const child = element as HTMLElement;
        if (window.screen.width > 416 && child.id != "title") {
          child.style.opacity = "1";
        } else child.style.opacity = "1";
      });
      if (window.screen.width > 416) {
        const right = document.querySelector("#right") as HTMLDivElement;
        right.style.opacity = "1";
      }
    }, 500);
  };

  return (
    <div id="crew">
      {window.screen.width > 416 ? (
        <>
          <div id="left">
            <div id="title">
              <h1>02</h1>
              <h1>MEET YOUR CREW</h1>
            </div>
            <h1 id="position">{currentCrew.position}</h1>
            <p id="crew-name">{currentCrew.name}</p>
            <p id="bio">{currentCrew.bio}</p>
            <div id="indicator">
              {[0, 1, 2, 3].map((index) => (
                <div
                  className="dot"
                  key={index}
                  onClick={(e) => handleCrewSelection(e, index)}
                  style={{
                    backgroundColor:
                      index == currIndex ? "white" : "rgba(128, 128, 128, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    if (index != currIndex)
                      e.currentTarget.style.backgroundColor =
                        "rgba(128, 128, 128, 1)";
                  }}
                  onMouseLeave={(e) => {
                    if (index != currIndex)
                      e.currentTarget.style.backgroundColor =
                        "rgba(128, 128, 128, 0.2)";
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div
            id="right"
            style={{
              backgroundImage: `url(${currentCrew.image}`,
            }}
          ></div>
        </>
      ) : (
        <>
          <div id="left">
            <div id="title">
              <h1>02</h1>
              <h1>MEET YOUR CREW</h1>
            </div>
            <div
              id="picture"
              style={{
                backgroundImage: `url(${currentCrew.image}`,
              }}
            ></div>
            <div id="line"></div>
            <div id="indicator">
              {[0, 1, 2, 3].map((index) => (
                <div
                  className="dot"
                  key={index}
                  onClick={(e) => handleCrewSelection(e, index)}
                  style={{
                    backgroundColor:
                      index == currIndex ? "white" : "rgba(128, 128, 128, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    if (index != currIndex)
                      e.currentTarget.style.backgroundColor =
                        "rgba(128, 128, 128, 1)";
                  }}
                  onMouseLeave={(e) => {
                    if (index != currIndex)
                      e.currentTarget.style.backgroundColor =
                        "rgba(128, 128, 128, 0.2)";
                  }}
                ></div>
              ))}
            </div>
            <h1 id="position">{currentCrew.position}</h1>
            <p id="crew-name">{currentCrew.name}</p>
            <p id="bio">{currentCrew.bio}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Crew;
