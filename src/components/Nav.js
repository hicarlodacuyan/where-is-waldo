import React from "react";
import Logo from "./Logo";
import Timer from "./Timer";
import Counter from "./Counter";

function Nav() {
  return (
    <div className="flex justify-between">
      <Logo />
      <Timer />
      <Counter />
    </div>
  );
}

export default Nav;
