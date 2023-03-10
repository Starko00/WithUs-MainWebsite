import { useState } from "react";
import ContactFormStyle from "./ContactFormStyle.module.css";
import axios from "axios";
export const ContactFormComponent = () => {
  const style = ContactFormStyle;
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [howDidYou, setHowDidYou] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setResponse(
      <p className={style.response}>
        We will respond within a day, thank you for your question.
      </p>
    );
    axios
      .post("http://www.with-us.me/api/withus/v1/contact", {
        email: email,
        firstName: firstName,
        aboutUs: howDidYou,
        service: service,
        budget: budget,
      })
      .then((res) => {
        if (res.status === 200) {
          setBudget("");
          setEmail("");
          setFirstName("");
          setService("");
          setHowDidYou("");
          setResponse("");
        }
      });
  };
  return (
    <div className={style.container}>
      <form
        className={style.contactForm}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={style.inputHolder}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className={style.inputHolder}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>

        <div className={style.inputHolder}>
          <label htmlFor="howDidYouHearAboutUs">
            How did you hear about us? (optional)
          </label>
          <input
            type="text"
            value={howDidYou}
            name="howDidYouHearAboutUs"
            onChange={(e) => setHowDidYou(e.target.value)}
          ></input>
        </div>
        <div className={style.inputHolder}>
          <label htmlFor="services">How can we help you?</label>
          <input
            type="text"
            value={service}
            name="services"
            onChange={(e) => setService(e.target.value)}
          ></input>
        </div>

        <div className={style.inputHolder}>
          <label htmlFor="budget">What is your estemated budget?</label>
          <input
            type="text"
            value={budget}
            name="budget"
            onChange={(e) => setBudget(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="buttonMainMobile">
            Submit
          </button>
          {response}
        </div>
      </form>
    </div>
  );
};
