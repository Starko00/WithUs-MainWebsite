import { ContactFormComponent } from "../../components/ContactFormComponent";
import AboutUsPageStyle from "./AboutUsPageStyle.module.css";
export const AboutUs = () => {
  const style = AboutUsPageStyle;
  return (
    <div className={style.aboutUsHolder}>
      <div className={style.innerContainer}>
        <h1>About us and our mission</h1>
        <p>
          we believe that inside every impossible is a possible trying to get
          out. We are a team of creative thinkers and problem solvers dedicated
          to expanding the limits of what is possible by helping brands achieve
          their goals. We utilize our experience working with major global
          brands to fuel creative innovation that delivers real results. Scroll
          down to find out a little bit about who makes this all happen.
        </p>
        <ContactFormComponent />
      </div>
    </div>
  );
};
