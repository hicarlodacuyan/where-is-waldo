import React from "react";
import Field from "../../images/ps1-field.jpg";

const PS1 = ({ displayMenu }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1080 2340"
      onClick={displayMenu}
    >
      <image width="1080" height="2340" xlinkHref={Field}></image>

      <rect
        x="703"
        y="1277"
        fill="#fff"
        opacity="0"
        width="50"
        height="50"
      ></rect>

      <rect
        x="387"
        y="1558"
        fill="#fff"
        opacity="0"
        width="50"
        height="54"
      ></rect>

      <rect
        x="583"
        y="1304"
        fill="#fff"
        opacity="0"
        width="50"
        height="55"
      ></rect>
    </svg>
  );
};

export default PS1;
