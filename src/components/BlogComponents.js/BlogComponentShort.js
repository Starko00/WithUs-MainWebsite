import BlogComponetShortStyle from "./BlogComponetShortStyle.module.css";
export const BlogComponentShort = ({ blogData }) => {
  const style = BlogComponetShortStyle;
  return (
    <div className={style.container}>
      
      <img src="https://wallpaperaccess.com/full/82884.jpg" />
      <div className={style.textHolder}>
        <h1>{blogData.tittle}</h1>
        <p>{blogData.text}</p>
        <div><button className="buttonMainMobile">Read more</button></div>
      </div>
    </div>
  );
};
