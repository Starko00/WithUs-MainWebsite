import BlogPageStyle from "./BlogPageStyle.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogComponentShort } from "../../components/BlogComponents.js/BlogComponentShort";
import CountUp from "react-countup";

export const BlogPage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const style = BlogPageStyle;
  useEffect(() => {
    axios.get("http://www.with-us.me/api/withus/v1/blog").then((res) => {
      console.log(res.data.blogs);
      if (res.status === 200) {
        setBlogsData(res.data.blogs);
      } else {
        setBlogsData("null");
      }
    });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.blogHeddingSection}>
        <h1>Welcome to our blog</h1>
        <h2>The perfect spot for learning all things digital</h2>
        <div className={style.blogCountHolder}>
          <div className={style.left}>
            <h3>Number of blogs</h3>

            <p>
              <CountUp duration={0.7} end={blogsData.length} />
            </p>
          </div>
          <div className={style.right}>
            <h3>Why do we even have a blog?</h3>
            <p>
              Our company's blog exists because one day, the CEO accidentally
              sat on their keyboard and hit the "publish" button on a random
              jumble of words. They were mortified at first, but then they
              realized that the jumbled words actually made for a pretty
              interesting read. So, they decided to turn it into a regular
              feature and thus, our company's blog was born. Just remember, even
              the most seemingly random and accidental things can sometimes lead
              to great things. Happy blogging!
            </p>
          </div>
        </div>
      </div>

      <div className={style.blogsectionHolder}>
        {blogsData == "null"
          ? "No blogs at the moment"
          : blogsData.map((blog) => {
              return <BlogComponentShort key={blog._id} blogData={blog} />;
            })}
      </div>
    </div>
  );
};
