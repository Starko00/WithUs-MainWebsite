import WorkComponentStyle from "./WorkComponentStyle.module.css";
export const WorkComponent = () => {
  const style = WorkComponentStyle;
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80" />

        <div className={style.tittleHolder}>
          <h4> TEDx Youth</h4>
          <p>Youth conference in Sarajevo</p>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.inner}>
          {" "}
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div className={style.tittleHolder}>
            <h4> TEDx Youth</h4>
            <p>Youth conference in Sarajevo</p>
          </div>
        </div>
        <div className={style.inner}>
          {" "}
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
          <div className={style.tittleHolder}>
            <h4> TEDx Youth</h4>
            <p>Youth conference in Sarajevo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
