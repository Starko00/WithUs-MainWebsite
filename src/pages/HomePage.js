import { useEffect, useState } from "react";
import { HeroComponent } from "../components/HomePageComponents/HeroComponent";
import { SecondSection } from "../components/HomePageComponents/SecondSection";
import HomePageStyle from "./HomePageStyle.module.css";
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
                <stop offset="0%" stop-color="#53309a" />
                <stop offset="28.7%" stop-color="#9b0fab" />
                <stop offset="100%" stop-color="#d76893" />
              </linearGradient>
            </defs>
            <path
              fill="url(#myGradient)"
              fill-opacity="1"
              d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,240C672,213,768,171,864,170.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <SecondSection />
      </div>

      <div className={style.mobileSection} data-order={"1"}>
        <h2>
          With nearly 10 years of collective knowledge, we use emrging
          technologies to make your business trive.
        </h2>
        <button className="buttonMainMobile">Get to know our team</button>
      </div>
    </div>
  );
};
