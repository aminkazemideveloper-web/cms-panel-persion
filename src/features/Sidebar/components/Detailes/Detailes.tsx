import React from "react";

import "./Detailes.css";
type Color = "blue" | "brown";
interface DetailesProps {
  color: Color;
  text: string;
  msg: string | number;
  icon: React.ReactNode;
}

const Detailes: React.FC<DetailesProps> = ({ color, text, msg, icon }) => {
  let colorClass = "";
  if (color === "blue") {
    colorClass = "msg__color--blue";
  } else {
    colorClass = "msg__color--brown";
  }
  return (
    <div className="detailes">
      <div className="detailes--right">
        <span className="detailes--right-icon"> {icon} </span>
        <span className="detailes--right-text"> {text}</span>
      </div>
      <span className={`detailes--left ${colorClass}`}>{msg}</span>
    </div>
  );
};

export default Detailes;
