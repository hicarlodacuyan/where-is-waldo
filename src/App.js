import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [characters, setCharacters] = useState([
    { id: 1, name: "Monkey", coordx: 703, coordy: 1277 },
    { id: 2, name: "Dog", coordx: 387, coordy: 1558 },
    { id: 3, name: "Swiper", coordx: 583, coordy: 1304 },
  ]);

  return (
    <div className="App">
      <Nav characters={characters} gameIsRunning={gameIsRunning} />
      <Main
        characters={characters}
        setCharacters={setCharacters}
        setGameIsRunning={setGameIsRunning}
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
    </div>
  );
};

export default App;
