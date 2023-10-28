import {
  AccessTimeFilledRounded,
  FacebookOutlined,
  Google,
  LockClockOutlined,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ img }) => {
  return (
    <div className="post">
      <div className="blog_post_image_post">
        <img className="postImg" src={img} alt="" />
      </div>
      <div className="postInfo">
        <span className="postTitle">
          <Link to="/blog/abc" className="link">
            High-Tech Security Measures at Shalimar Smart City
          </Link>
        </span>
        <div className="related_time">
          <h5>Shalimar Smart City</h5>
          <div className="time_related">
            <span>
              <AccessTimeFilledRounded className="post_time_icon"/> 2 weeks ago
            </span>
          </div>
        </div>
        <hr className="blog_____line" />
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        </p>
        <div className="social_readmore">
          <div className="social_blog">
            <FacebookOutlined className="blog_fb" />
            <Twitter className="blog_tewi" />
            <WhatsApp className="blog_whatsapp" />
            <Google className="blog_google" />
          </div>
          <button type="submit" className="blog_post_red_more">
            More Details
          </button>
        </div>
      </div>
      <Link to="/post/abc" className="link"></Link>
    </div>
  );
};

export default Post;
