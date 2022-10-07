import React from "react";
import Logo from "./Logo";
import Stopwatch from "./Stopwatch";
import Counter from "./Counter";
import Characters from "./Characters";

function Nav({ characters, gameIsRunning }) {
  return (
    <nav className="flex justify-around items-center py-2 border-b-[1px] border-slate-200 bg-slate-50 fixed w-full">
      <Logo />
      <Stopwatch gameIsRunning={gameIsRunning} />
      <div className="flex flex-col gap-2">
        <Characters characters={characters} />
        <Counter characters={characters} />
      </div>
    </nav>
  );
}

export default Nav;
