import React from "react";
import SelectMenu from "./SelectMenu";
import PS1 from "./gamefields/PS1";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

function Main({ setGameIsRunning, characters, setCharacters }) {
  const charactersCollectionRef = collection(db, "characters");

  // useEffect(() => {
  //   const getCharacters = async () => {
  //     const data = await getDocs(charactersCollectionRef);
  //     const charactersList = data.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     setCharacters(charactersList);
  //   };

  //   getCharacters();
  // });

  const getCoords = (event) => {
    const coords = event.target.getBBox();

    setGameIsRunning(true);
    identifyCharacter(coords);
  };

  const identifyCharacter = (coords) => {
    const x = coords.x;
    const y = coords.y;

    const filteredCharacters = characters.filter((character) => {
      if (character.coordx === x && character.coordy === y) {
        toast.success(`You've found the ${character.name}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        return false;
      }

      return character;
    });

    setCharacters(filteredCharacters);
    isGameOver(filteredCharacters);
  };

  const isGameOver = (characters) => {
    if (characters.length < 1) {
      setGameIsRunning(false);
      return;
    }
  };

  return (
    <div>
      <PS1 getCoords={getCoords} />
    </div>
  );
}

export default Main;
