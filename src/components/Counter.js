import React from "react";

function Counter({ characters }) {
  return (
    <div>
      {characters.length > 0 ? (
        <div className="flex justify-center items-center text-white md:text-1xl text-xs font-bold rounded-full bg-red-500 p-2">
          {characters.length} character(s) left.
        </div>
      ) : (
        <div className="flex justify-center items-center text-white md:text-1xl text-xs font-bold rounded-full bg-green-500 p-2">
          You've found all the characters!
        </div>
      )}
    </div>
  );
}

export default Counter;
