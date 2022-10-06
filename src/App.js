import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [characters, setCharacters] = useState([{}, {}, {}]);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);

  return (
    <div className="App">
      <Nav
        characters={characters}
        gameIsRunning={gameIsRunning}
        gameIsOver={gameIsOver}
      />
      <Main
        characters={characters}
        setCharacters={setCharacters}
        gameIsRunning={gameIsRunning}
        setGameIsRunning={setGameIsRunning}
        gameIsOver={gameIsOver}
        setGameIsOver={setGameIsOver}
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
