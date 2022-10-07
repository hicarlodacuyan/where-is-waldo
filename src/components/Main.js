import React from "react";
import PS1 from "./gamefields/PS1";
import { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

function Main({
  characters,
  setCharacters,
  gameIsRunning,
  setGameIsRunning,
  gameIsOver,
  setGameIsOver,
}) {
  const charactersCollectionRef = collection(db, "characters");

  const { show } = useContextMenu({ id: MENU_ID });

  useEffect(() => {
    const getCharacters = async () => {
      const data = await getDocs(charactersCollectionRef);
      const charactersList = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCharacters(charactersList);
    };

    getCharacters();
  }, []);

  const identifyCharacter = (coords, name) => {
    const x = coords.x;
    const y = coords.y;

    if (coords.x === 0 && coords.y === 0 && gameIsOver === false) {
      toast.error("Uh oh! Wrong character.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const filteredCharacters = characters.filter((character) => {
      if (
        character.coordx === x &&
        character.coordy === y &&
        character.name === name
      ) {
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
      setGameIsOver(true);
      return;
    }

    setGameIsRunning(true);
  };

  const getCoords = (event) => {
    const coords = event.target.getBBox();

    return coords;
  };

  const displayMenu = (e) => {
    const characterCoords = getCoords(e);
    show(e, {
      props: { id: e.currentTarget.id, coords: characterCoords },
    });
  };

  const handleItemClick = ({ event, props }) => {
    switch (event.currentTarget.id) {
      case "PaRappa":
        identifyCharacter(props.coords, event.currentTarget.id);
        break;
      case "Monkey":
        identifyCharacter(props.coords, event.currentTarget.id);
        break;
      case "Crash Bandicoot":
        identifyCharacter(props.coords, event.currentTarget.id);
        break;
      default:
        identifyCharacter(props.coords);
        break;
    }
  };

  return (
    <div className="cursor-crosshair">
      <PS1 displayMenu={displayMenu} />
      <Menu id={MENU_ID}>
        <Item id="PaRappa" onClick={handleItemClick}>
          PaRappa
        </Item>
        <Item id="Monkey" onClick={handleItemClick}>
          Monkey
        </Item>
        <Item id="Crash Bandicoot" onClick={handleItemClick}>
          Crash Bandicoot
        </Item>
      </Menu>
    </div>
  );
}

export default Main;
