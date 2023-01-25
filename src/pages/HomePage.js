import { useEffect, useState } from "react";
import { HeroComponent } from "../components/HomePageComponents/HeroComponent";
import { SecondSection } from "../components/HomePageComponents/SecondSection";
import HomePageStyle from "./HomePageStyle.module.css";
import sunrise from "../resources/img/sunrise.jpg";
import graphich1 from "../resources/img/graphich1.png";
import { WorkComponent } from "../components/HomePageComponents/WorkComponent";
import { ContactFormComponent } from "../components/ContactFormComponent";
import Asset1 from "../resources/img/asset1.svg";
export const HomePage = () => {
  const style = HomePageStyle;
  const [screenLoad, setScreenLoad] = useState(false);

  setTimeout(() => {
    setScreenLoad(true);
  }, 750);

  useEffect(() => {
    console.log(screenLoad);
  }, [screenLoad]);
  return (
    <div className={style.container}>
      {/* Screen loader  */}
      <div className={style.loadingBanner} data-load={screenLoad}>
        <h1>WithUs</h1>
        <p>your business will pass the moon</p>
      </div>
      {/* Screen loader  */}
      <div className={style.mainHeroContainer}>
        <div className={style.firstHeroHolder}>
          <HeroComponent />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="myGradient">
                <stop offset="0%" stopColor="#53309a" />
                <stop offset="28.7%" stopColor="#9b0fab" />
                <stop offset="100%" stopColor="#d76893" />
              </linearGradient>
            </defs>
            <path
              fill="url(#myGradient)"
              fillOpacity="1"
              d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,240C672,213,768,171,864,170.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <SecondSection />
      </div>
      <div className={style.thirdSection}>
        <div className={style.textHolderThirdSection}>
          <h2 className={style.sectionTittle}>The way we do it</h2>
          <h3 className={style.sectionSubTittle}>by hitting targets</h3>
          <p className={style.sectionText}>
            At WithUS, we believe in the power of transparency and
            communication. We work closely with our clients to ensure that they
            are always informed and involved in the process, and we provide
            regular progress updates so that you can see the impact of our
            services on your business.
          </p>
        </div>
        <div className={style.sectionImgHolder}>
          <img src={sunrise} alt="sunirse purple" />
        </div>
      </div>

      <div className={style.forthSection}>
        <div className={style.textHolderThirdSection}>
          <h2 className={style.sectionTittle}>With expertise </h2>
          <h3 className={style.sectionSubTittle}>
            By doing simple steps, to make it as easy and professional as it
            could be, giving you resolute thro
          </h3>
          <div className={style.innerSectionHolder}>
            <div className={style.innerTittles}>
              <h4 className={style.innerTittle}>Strategy</h4>
              <h4 className={style.innerTittle}>Design</h4>
              <h4 className={style.innerTittle}>Development</h4>
              <h4 className={style.innerTittle}>Optimization</h4>
            </div>
            <p className={style.sectionText}>
              WithUS is a great choice for your B2B digital needs because of our
              team of experienced professionals, dedication to delivering
              results, transparency and communication, and cost-effective
              services. Contact us today to learn more about how we can help
              your business succeed in the digital world.
            </p>
          </div>
        </div>
        <div className={style.sectionImgHolder}>
          <img src={graphich1} alt="expertise graphich" />
        </div>
      </div>

      <div className={style.workContainer}>
        <h2 className={style.sectionTittle}>Here is some of our work</h2>
        <div className={style.workContainerInner}>
          <WorkComponent />
        </div>
        <div className={style.fifthSection}>
          <h2 className={style.sectionTittle}>
            Our clients are now even more sexy
          </h2>
          <h3 className={style.sectionSubTittle}>
            And theit customers love it, recognizable brands
          </h3>
          <div className={style.ClientsHolder}>
            client list to be displayed soon
          </div>
        </div>
      </div>
      <div className={style.contactFormHolder}>
        <h2 className={style.sectionTittle} style={{ color: "white" }}>
          Contact us and get a free quote{" "}
        </h2>
        <h3
          className={style.sectionSubTittle}
          style={{ color: "white", opacity: "0.75" }}
        >
          We answer within 12h
        </h3>

        <div className={style.innerSectionHolderContact} id="contact">
          <ContactFormComponent />
          <img src={Asset1} />
        </div>
      </div>
    </div>
  );
};
