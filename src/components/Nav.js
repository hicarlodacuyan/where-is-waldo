import React from "react";
import Logo from "./Logo";
import Stopwatch from "./Stopwatch";
import Counter from "./Counter";

function Nav({ characters, gameIsRunning }) {
  return (
    <nav className="flex justify-around items-center py-2 border-b-[1px] border-slate-200 bg-slate-50 fixed w-full">
      <Logo />
      <Stopwatch gameIsRunning={gameIsRunning} />
      <Counter characters={characters} />
    </nav>
  );
}

export default Nav;
