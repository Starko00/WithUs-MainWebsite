import React from "react";
import CardsStyle from "./CardsStyle.module.scss";

export const Cards = (props) => {
  const style = CardsStyle;
  const handleClick = () => {
    console.log("radi");
  };
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: "url(" + `${props.card.bg}` + ")",
      }}
    >
      <h1 className={style.container_header}>{props.card.header}</h1>
      <button
        className={`buttonMainMobile ${style.container_btn}`}
        onClick={handleClick}
      >
        Read More
      </button>
    </div>
  );
};
