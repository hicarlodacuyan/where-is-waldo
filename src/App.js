import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Nav from "./components/Nav";
import Main from "./components/Main";

const App = () => {
  const charactersCollectionRef = collection(db, "characters");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await getDocs(charactersCollectionRef);
      const charactersList = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setCharacters(charactersList);
    };

    getCharacters();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
};

export default App;
