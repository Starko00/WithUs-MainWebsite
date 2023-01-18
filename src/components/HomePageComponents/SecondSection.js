import SeconSectionStyle from "./SecondSectionStyle.module.css";
export const SecondSection = () => {
  const style = SeconSectionStyle;
  return (
    <div className={style.containerMain}>
      <div className={style.resoultsSection}>
        <h3>12</h3>
        <h2>SATISFIED CLIENTS</h2>
        <div className={style.achivementsHolder}>
          <div className={style.achivement}>
            <h4>10</h4>
            <h5>WEBSITES</h5>
          </div>

          <div className={style.achivement}>
            <h4>1</h4>
            <h5>WEBAPP</h5>
          </div>
          <div className={style.achivement}>
            <h4>4</h4>
            <h5>BRANDS</h5>
          </div>
          <div className={style.achivement}>
            <h4>6</h4>
            <h5>CAMPAINGS</h5>
          </div>
        </div>
      </div>
      <div className={style.sectionMainText}>
        <h1>Creating web solutions from squareone</h1>
        <h2>We design, build and scale your online presence</h2>

        <div className={style.splitTextHolder}>
          <p>
            Great products start with great teams. Over the years, we’ve
            maintained a high standard for attracting talent – only 1% of
            applicants become a part of our team.
          </p>
          <p>
            Great products start with great teams. Over the years, we’ve
            maintained a high standard for attracting talent – only 1% of
            applicants become a part of our team.
          </p>
        </div>
      </div>
    </div>
  );
};
