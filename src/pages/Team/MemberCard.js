import React from "react";
import TeamStyle from "./TeamPageStyle.module.scss";

export const MemberCard = (props) => {
  const style = TeamStyle;
  return (
    <div className={style.container_member}>
      <div className={style.container_member_img}>
        <img src={props.card.img} alt="member" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="640"
          height="618"
          viewBox="0 0 640 618"
        >
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stopColor="#53309a" />
              <stop offset="28.7%" stopColor="#9b0fab" />
              <stop offset="100%" stopColor="#d76893" />
            </linearGradient>
          </defs>
          <g transform="translate(-47 -850)">
            <g id="Web_1920_4">
              <path
                fill="url(#myGradient)"
                d="M3796.679 7749.082c-143.364-56.852-219.99-42.021-232.349-123.59s-79.1-148.307 0-200.215 32.134-71.682 81.569-113.7 205.159-93.928 252.123-81.569 163.139 39.549 202.688 106.287-27.189 71.682 0 133.477 106.288 96.4 29.662 145.836-145.836 22.247-173.026 101.344-44.492 126.062-76.626 126.062-84.041-93.932-84.041-93.932z"
                transform="translate(-3479 -6378)"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={style.container_member_info}>
        <h2 className={style.container_member_info_name}>{props.card.name}</h2>
        <p className={style.container_member_info_about}>{props.card.info}</p>
      </div>
    </div>
  );
};
