import React from "react";
import ServicesStyle from "./ServicesStyle.module.scss";
import { Counter } from "../../components/Counter";
import { Cards } from "../../components/ServicesComponents/Cards";
import { cardData } from "../../components/ServicesComponents/CardsData";

export const ServicesPage = () => {
  const style = ServicesStyle;
  const cardElements = cardData.map((card) => {
    return <Cards key={card.id} card={card} />;
  });
  return (
    <div className={style.container}>
      <div className={style.container_leftSide}>
        <Counter />
      </div>
      <div className={style.container_rightSide}>{cardElements}</div>
    </div>
  );
};
