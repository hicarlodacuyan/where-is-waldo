import React from "react";
import Logo from "./Logo";
import Stopwatch from "./Stopwatch";
import Counter from "./Counter";

function Nav() {
  return (
    <nav className="flex justify-around items-center py-2 border-b-[1px] border-slate-200 bg-slate-50 fixed w-full">
      <Logo />
      <Stopwatch />
      <Counter />
    </nav>
  );
}

export default Nav;
