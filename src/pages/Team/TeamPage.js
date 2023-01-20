import React from "react";
import { MemberCard } from "./MemberCard";
import TeamStyle from "./TeamPageStyle.module.scss";
import { cardData } from "./MemberData";

export const TeamPage = () => {
  const style = TeamStyle;
  const teamMember = cardData.map((card) => {
    return <MemberCard card={card} key={card.id} />;
  });
  return (
    <div className={style.container}>
      <h1 className={style.container_heading}>
        Yes our team is sexy, a bunch of nards working tirelessly!
      </h1>
      {teamMember}
    </div>
  );
};
