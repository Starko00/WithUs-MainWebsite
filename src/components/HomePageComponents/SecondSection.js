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
        <h1>Creating web solutions from square one</h1>
        <h2>We design, build and scale your online presence</h2>

        <div className={style.splitTextHolder}>
          <p>
            When it comes to B2B businesses, having a website that is
            specifically designed to target other businesses can make a huge
            difference in terms of generating leads and closing deals. A B2B
            website design agency will have the expertise and experience
            necessary to create a website that speaks directly to other
            businesses and addresses their specific needs and pain points
          </p>
          <p>
            A B2B website should be professional, informative, and easy to
            navigate. It should also be optimized for search engines, as many
            B2B purchases are the result of online research. A B2B website
            design agency will understand the unique needs of B2B businesses and
            create a website that helps to establish trust and credibility with
            potential customers.
          </p>
        </div>
      </div>
    </div>
  );
};
