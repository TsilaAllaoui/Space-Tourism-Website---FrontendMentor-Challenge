import "../styles/Tech.scss";
import { useState } from "react";

import launchVehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePort from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

import launchVehicleMobile from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spacePortMobile from "../assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleMobile from "../assets/technology/image-space-capsule-landscape.jpg";

interface Technology {
  name: string;
  desc: string;
  image: string;
}

const Tech = () => {
  const techs: Technology[] = [
    {
      name: "LAUNCH VEHICLE",
      desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: window.screen.width <= 416 ? launchVehicleMobile : launchVehicle,
    },
    {
      name: "SPACEPORT",
      desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: window.screen.width <= 416 ? spacePortMobile : spacePort,
    },
    {
      name: "SPACE CAPSULE",
      desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: window.screen.width <= 416 ? spaceCapsuleMobile : spaceCapsule,
    },
  ];

  const [currentTech, setCurrentTech] = useState<Technology>(techs[0]);
  const [currIndex, setCurrIndex] = useState(0);

  const handleTechSelection = (
    _e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (window.screen.width > 416) {
      const desc = document.querySelector("#desc") as HTMLDivElement;
      const right = document.querySelector("#right") as HTMLDivElement;
      right.style.opacity = "0";
      desc.childNodes.forEach((element) => {
        const child = element as HTMLElement;
        if (child.id != "title") {
          child.style.opacity = "0";
        }
      });
    } else {
      const entry = document.querySelector("#entry") as HTMLDivElement;
      const pic = document.querySelector("#picture") as HTMLDivElement;
      entry.childNodes.forEach((element) => {
        const child = element as HTMLElement;
        if (child.id != "numbers") {
          child.style.opacity = "0";
        }
      });
      pic.style.opacity = "0";
    }

    setTimeout(() => {
      setCurrIndex(index);
      setCurrentTech(techs[index]);
      if (window.screen.width > 416) {
        const desc = document.querySelector("#desc") as HTMLDivElement;
        const right = document.querySelector("#right") as HTMLDivElement;
        right.style.opacity = "1";
        desc.childNodes.forEach((element) => {
          const child = element as HTMLElement;
          if (child.id != "title" && child.id != "entry") {
            child.style.opacity = "1";
          }
        });
      } else {
        const entry = document.querySelector("#entry") as HTMLDivElement;
        const pic = document.querySelector("#picture") as HTMLDivElement;
        entry.childNodes.forEach((element) => {
          const child = element as HTMLElement;
          if (child.id != "numbers") {
            child.style.opacity = "1";
          }
        });
        pic.style.opacity = "1";
      }
    }, 500);
  };

  return (
    <div id="tech">
      {window.screen.width > 416 ? (
        <>
          <div id="left">
            <div id="title">
              <h1>03</h1>
              <h1>SPACE LAUNCH 101</h1>
            </div>
            <div id="entry">
              <div id="numbers">
                {[0, 1, 2].map((index) => (
                  <div key={index}>
                    <div
                      className="number"
                      style={{
                        backgroundColor:
                          index == currIndex
                            ? "white"
                            : "rgba(128, 128, 128, 0.534)",
                      }}
                      onClick={(e) => handleTechSelection(e, index)}
                      onMouseEnter={(e) => {
                        if (index != currIndex)
                          e.currentTarget.style.backgroundColor = "black";
                      }}
                      onMouseLeave={(e) => {
                        if (index != currIndex)
                          e.currentTarget.style.backgroundColor =
                            "rgba(128, 128, 128, 0.534)";
                      }}
                    >
                      <div
                        className="square"
                        style={{
                          backgroundColor:
                            index == currIndex ? "white" : "black",
                        }}
                      >
                        <p
                          style={{
                            color: index == currIndex ? "black" : "white",
                          }}
                        >
                          {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="desc">
                <p id="title">THE TERMINOLOGY</p>
                <h1 id="name">{currentTech.name}</h1>
                <p id="desc">{currentTech.desc}</p>
              </div>
            </div>
          </div>
          <div
            id="right"
            style={{ backgroundImage: `url(${currentTech.image})` }}
          ></div>
        </>
      ) : (
        <>
          <div id="left">
            <div id="title">
              <h1>03</h1>
              <h1>SPACE LAUNCH 101</h1>
            </div>
            <div
              id="picture"
              style={{ backgroundImage: `url(${currentTech.image})` }}
            ></div>
            <div id="entry">
              <div id="numbers">
                {[0, 1, 2].map((index) => (
                  <div key={index}>
                    <div
                      className="number"
                      style={{
                        backgroundColor:
                          index == currIndex
                            ? "white"
                            : "rgba(128, 128, 128, 0.534)",
                      }}
                      onClick={(e) => handleTechSelection(e, index)}
                      onMouseEnter={(e) => {
                        if (index != currIndex)
                          e.currentTarget.style.backgroundColor = "black";
                      }}
                      onMouseLeave={(e) => {
                        if (index != currIndex)
                          e.currentTarget.style.backgroundColor =
                            "rgba(128, 128, 128, 0.534)";
                      }}
                    >
                      <div
                        className="square"
                        style={{
                          backgroundColor:
                            index == currIndex ? "white" : "black",
                        }}
                      >
                        <p
                          style={{
                            color: index == currIndex ? "black" : "white",
                          }}
                        >
                          {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="desc">
                <p id="tech-title">THE TERMINOLOGY...</p>
                <h1 id="name">{currentTech.name}</h1>
                <p id="desc">{currentTech.desc}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tech;
