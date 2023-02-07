import React from "react";
import CounterStyle from "./CounterStyle.module.scss";
import CountUp from "react-countup";

export const Counter = () => {
  const style = CounterStyle;
  return (
    <div className={style.counter}>
      <h3>
        <CountUp duration={1} end={12} />
      </h3>
      <h2>SATISFIED CLIENTS</h2>
      <div className={style.counter_achivementsHolder}>
        <div className={style.counter_achivementsHolder_achivement}>
          <h4>
            <CountUp duration={0.5} end={10} />
          </h4>
          <h5>WEB SITES</h5>
        </div>

        <div className={style.counter_achivementsHolder_achivement}>
          <h4>
            <CountUp duration={0.5} end={1} />
          </h4>
          <h5>WEB APPS</h5>
        </div>
        <div className={style.counter_achivementsHolder_achivement}>
          <h4>
            <CountUp duration={0.5} end={4} />
          </h4>
          <h5>BRANDS</h5>
        </div>
        <div className={style.counter_achivementsHolder_achivement}>
          <h4>
            <CountUp duration={0.5} end={6} />
          </h4>
          <h5>CAMPAINGS</h5>
        </div>
      </div>
    </div>
  );
};
