import axios from "axios";
import BlogComponentLongStyle from "./BlogComponentLongStyle.module.css";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
export const BlogComponentLong = () => {
  const [blogData, setBlogData] = useState("");
  const { state } = useLocation();
  const style = BlogComponentLongStyle;
  const { id } = useParams();
  useEffect(() => {
    axios
      .post("http://www.with-us.me/api/withus/v1/blog", { tittle: id })
      .then((res) => {
        setBlogData(res.data.blog);
      });
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.imgHolder}>
        <img
          src={"http://www.with-us.me/static/blogImgs/" + blogData[0]?.img}
        />
      </div>

      <div className={style.innrContainer}>
        <div dangerouslySetInnerHTML={{ __html: blogData[0]?.text }}></div>
      </div>
    </div>
  );
};
