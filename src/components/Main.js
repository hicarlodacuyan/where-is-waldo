import React from "react";
import SelectMenu from "./SelectMenu";
import PS1 from "./gamefields/PS1";

function Main() {
  const getCoords = (event) => {
    const coords = event.target.getBBox();

    if (coords.x === 387 && coords.y === 1558) {
      console.log("Dog was found");
    } else if (coords.x === 703 && coords.y === 1277) {
      console.log("Monkey was found");
    } else if (coords.x === 583 && coords.y === 1304) {
      console.log("Swiper was found");
    } else {
      console.log("Wrong character, try again!");
    }

    console.log(coords.x, coords.y);
  };

  return (
    <div>
      <PS1 getCoords={getCoords} />
    </div>
  );
}

export default Main;
