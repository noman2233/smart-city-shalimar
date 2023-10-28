import { SearchOutlined, Storefront, Work } from "@mui/icons-material";
import "./sidebar.css";
import { data } from "./dummy";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h3 className="sidebar_popular">
          Popular <b>Blogs</b>
        </h3>
        <hr className="sidebar___post_hr" />
        <div className="sidebar_main_blogPosts_container">
          {data.map((blog) => (
            <div className="sidebar_blog_container" key={blog.id}>
              <img src={blog.img} alt="" className="sidebarImage" />
              <div className="side_bar_blog_box">

              <div className="sidebar_blog_category_time">
                <h1>
                  <Work className="sidebar_icons" />
                  {blog.category}
                </h1>
                <p>
                  <Storefront className="sidebar_icons" />2 weeks ago
                </p>
              </div>
              
              <h2 className="blog_comapny_feature">
                High-Tech Security Measures at Shalimar Smart City
              </h2>
              </div>

              <hr className="blog_sidebar_hr" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
