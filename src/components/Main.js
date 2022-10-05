import React from "react";
import SelectMenu from "./SelectMenu";
import PS1 from "./gamefields/PS1";

function Main({ setGameIsRunning }) {
  const getCoords = (event) => {
    const coords = event.target.getBBox();

    setGameIsRunning(true);
    identifyCharacter(coords);
  };

  const identifyCharacter = (coords) => {
    const x = coords.x;
    const y = coords.y;

    if (x === 387 && y === 1558) console.log("Dog");
    if (x === 703 && y === 1277) console.log("Monkey");
    if (x === 583 && y === 1304) console.log("Swiper");
    if (x === 0 && y === 0) console.log("Try again!");
  };

  return (
    <div>
      <PS1 getCoords={getCoords} />
    </div>
  );
}

export default Main;
