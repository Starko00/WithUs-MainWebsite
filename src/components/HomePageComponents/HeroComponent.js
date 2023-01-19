import HeroComponentStyle from "./HeroComponentStyle.module.css";
export const HeroComponent = () => {
  const style = HeroComponentStyle;
  return (
    <div className={style.container}>
      <h1>
        With<span>US</span>
      </h1>
      <p>your business will pass the moon</p>
    </div>
  );
};
