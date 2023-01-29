import { useNavigate, useParams } from "react-router-dom";
import BlogComponetShortStyle from "./BlogComponetShortStyle.module.css";
export const BlogComponentShort = ({ blogData }) => {
  const style = BlogComponetShortStyle;
  const navigate = useNavigate();
  const routerParams = useParams();
  return (
    <div className={style.container}>
      
      <img src={'http://www.with-us.me/static/blogImgs/'+blogData.img} />
      <div className={style.textHolder}>
        <h1>{blogData.tittle}</h1>
        <p>{blogData.text}</p>
        <div><button className="buttonMainMobile" onClick = {()=>{ navigate(`/blogSingle/${blogData.tittle.replaceAll(' ','-')}`,{state: blogData}) }}>Read more</button></div>
      </div>
    </div>
  );
};
