import WorkComponentStyle from "./WorkComponentStyle.module.css";
export const WorkComponent = () => {
  const style = WorkComponentStyle;
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" />

        <div className={style.tittleHolder}>
          <h4> TEDx Youth</h4>
          <p>Youth conference in Sarajevo</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.inner}>
          {" "}
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" />
          <div className={style.tittleHolder}>
            <h4> TEDx Youth</h4>
            <p>Youth conference in Sarajevo</p>
          </div>
        </div>
        <div className={style.inner}>
          {" "}
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" />
          <div className={style.tittleHolder}>
            <h4> TEDx Youth</h4>
            <p>Youth conference in Sarajevo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
