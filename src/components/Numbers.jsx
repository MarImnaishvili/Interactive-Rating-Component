import React from "react";
import "./Numbers.css";

export default function Numbers({ handleClick, selected, value }) {
  return (
    <div
      className="numbersDiv"
      onClick={() => handleClick(value)}
      style={
        selected === value
          ? { backgroundColor: "hsl(25, 97%, 53%)" }
          : { backgroundColor: "#262e38" }
      }
    >
      {value}
    </div>
  );
}
