import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [characters, setCharacters] = useState([{}, {}, {}]);

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
