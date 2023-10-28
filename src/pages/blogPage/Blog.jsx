import React from "react";
import "./blog.css";
import Slider from "../../AllPagesCompoents/blogComponents/slider/Slider";
import Posts from "../../AllPagesCompoents/blogComponents/posts/Posts";
import Sidebar from "../../AllPagesCompoents/blogComponents/sidebar/Sidebar";
import {useDocumentTitle} from "../../useDocumentTitle"

const Blog = () => {
  useDocumentTitle("Blog Page")
  return (
    <div>
      <Slider />
      <div className="progress_updates">
        <h1 className="animinities_heading">BLOG</h1>
        <div className="home_heading_hr_box">
          <hr className="home_animities_heading_hr_top" />
          <hr className="home_animities_heading_hr" />
          <hr className="home_animities_heading_hr_bottom" />
        </div>
        <div className="heading__home_blogs">
        <div className="blog_post_main_page">
          <Posts />
          <Sidebar/>
        </div>
      
      </div>
      </div>
    </div>
  );
};

export default Blog;
