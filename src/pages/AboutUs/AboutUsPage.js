import { ContactFormComponent } from "../../components/ContactFormComponent";
import AboutUsPageStyle from "./AboutUsPageStyle.module.css";
export const AboutUs = () => {
  const style = AboutUsPageStyle;
  return (
    <div className={style.aboutUsHolder}>
      <div className={style.innerContainer}>
        <h1>About us and our mission</h1>
        <p>
          At WithUS, we believe in the power of transparency and communication.
          We work closely with our clients to ensure that they are always
          informed and involved in the process, and we provide regular progress
          updates so that you can see the impact of our services on your
          business. <br/> Finally, WithUS is a cost-effective agency. Our services are
          designed to deliver real results without breaking the bank. We believe
          that businesses of all sizes should have access to high-quality
          digital services, and we work hard to make this a reality for our
          clients.<br/> In conclusion, WithUS is a great choice for your B2B digital
          needs because of our team of experienced professionals, dedication to
          delivering results, transparency and communication, and cost-effective
          services. Contact us today to learn more about how we can help your
          business succeed in the digital world.
        </p>
        <ContactFormComponent />
      </div>
    </div>
  );
};
