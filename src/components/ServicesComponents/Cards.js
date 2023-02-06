import React from "react";
import CardsStyle from "./CardsStyle.module.scss";

export const Cards = (props) => {
  const style = CardsStyle;
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: "url(" + `${props.card.bg}` + ")",
      }}
    >
      <h1 className={style.container_header}>{props.card.header}</h1>
      <button className={`buttonMainMobile ${style.container_btn}`}>
        Read More
      </button>
    </div>
  );
};
