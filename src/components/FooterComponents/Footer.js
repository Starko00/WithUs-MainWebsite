import React from "react";
import FooterStyle from "./Footer.module.scss";
import fb from "../../resources/img/facebook.svg";
import insta from "../../resources/img/instagram.svg";
import ln from "../../resources/img/linkedin.svg";
export const Footer = () => {
  const style = FooterStyle;
  return (
    <div className={style.container}>
      <div className={style.container_up}>
        <div className={style.container_up_leftSide}>
          <p className={style.container_up_leftSide_paragraph}>
            Subscribe to our newsletter
          </p>
          <div class={style.container_up_leftSide_inputbox}>
            <input required="required" type="text" />
            <span>Email</span>
            <i></i>
          </div>
        </div>
        <div className={style.container_up_rightSide}>
          <p className={style.container_up_rightSide_paragraph}>
            Podgorica
            <br />
            Cetinjski put 13
            <br />
            81000 Podgorica, Montenegro
            <br />
            +382 (67) 446 594
          </p>
        </div>
      </div>
      <hr className={style.container_line} />
      <div className={style.container_down}>
        <div className={style.container_down_left}>
          <div className={style.container_down_left_social}>
            <img src={fb} alt="social" />
            <a href="https://www.instagram.com/withus.me/">
              <img src={insta} alt="social" />
            </a>
            <a href="https://www.linkedin.com/company/withus-software-solutions/">
              <img src={ln} alt="social" />
            </a>
          </div>
          <p className={style.container_down_left_paragraph}>@2023 WithUs</p>
        </div>
        <h1 className={style.container_down_name}>WithUs</h1>
      </div>
    </div>
  );
};
