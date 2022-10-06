import React from "react";
import PS1 from "./gamefields/PS1";
import { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { Menu, Item, useContextMenu, theme } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "menu-id";

function Main({ characters, setCharacters, setGameIsRunning }) {
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
      return;
    }
  };

  const getCoords = (event) => {
    const coords = event.target.getBBox();

    setGameIsRunning(true);

    return coords;
  };

  const displayMenu = (e) => {
    const characterCoords = getCoords(e);
    show(e, {
      props: { id: e.currentTarget.id, coords: characterCoords },
    });
  };

  const handleItemClick = ({ event, props }) => {
    if (props.coords.x === 0 && props.coords.y === 0) {
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

    switch (event.currentTarget.id) {
      case "Dog":
        identifyCharacter(props.coords, event.currentTarget.id);
        break;
      case "Monkey":
        identifyCharacter(props.coords, event.currentTarget.id);
        break;
      case "Swiper":
        identifyCharacter(props.coords, event.currentTarget.id);
        break;
      default:
        identifyCharacter(props.coords);
        break;
    }
  };

  return (
    <div>
      <PS1 displayMenu={displayMenu} />
      <Menu id={MENU_ID} theme={theme.light}>
        <Item id="Dog" onClick={handleItemClick}>
          Dog
        </Item>
        <Item id="Monkey" onClick={handleItemClick}>
          Monkey
        </Item>
        <Item id="Swiper" onClick={handleItemClick}>
          Swiper
        </Item>
      </Menu>
    </div>
  );
}

export default Main;
