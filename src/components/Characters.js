import React, { useEffect, useState, useRef } from "react";
import Crash from "./../images/crash-bandicoot.png";
import Monkey from "./../images/monkey.png";
import Parappa from "./../images/parappa.png";

const Characters = ({ characters }) => {
  const [charactersImg, setCharactersImg] = useState([
    { name: "Crash Bandicoot", image: Crash },
    { name: "Monkey", image: Monkey },
    { name: "PaRappa", image: Parappa },
  ]);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const filterCharactersImg = charactersImg.filter((characterImg) =>
        characters.some((character) => characterImg.name === character.name)
      );

      setCharactersImg(filterCharactersImg);
    } else {
      isMounted.current = true;
    }
  }, [characters]);

  return (
    <ul className="flex justify-between">
      {charactersImg.map((character, index) => {
        return (
          <li key={index}>
            <img
              src={character.image}
              alt={`A logo of ${character.name}`}
              className="md:w-12 md:h-12 w-8 h-8"
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Characters;
