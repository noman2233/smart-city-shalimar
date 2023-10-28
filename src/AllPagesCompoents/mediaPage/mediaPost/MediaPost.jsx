import React from "react";
import "./mediaPost.css";
import { Link } from "react-router-dom";
import {
  AccessAlarms,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Newspaper,
  YouTube,
} from "@mui/icons-material";

const MediaPost = ({ img }) => {
  return (
    <div className="media_post">
      <div className="media_blog_post_image_post">
        <img className="media_postImg" src={img} alt="" />
      </div>
      <div className="media_postInfo">
        <span className="media_postTitle">
          <Link to="/media-blog/abc" className="link">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            omnis.
          </Link>
        </span>
        <hr className="media_postTitle_hr" />
        <div className="media_time_related">
          <span>
            <Newspaper className="media_blog_icon" /> News
          </span>
          <span>
            <AccessAlarms className="media_blog_icon" /> March 02, 2023
          </span>
        </div>
        <p className="media_postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        </p>
        <div className="media_social_readmore">
          <div className="media_social_blog">
            <FacebookOutlined className="media_blog_fb" />
            <LinkedIn className="media_blog_linkedin" />
            <Instagram className="media_blog_instagram" />
            <YouTube className="media_blog_youtube" />
          </div>
          <button type="submit" className="media_blog_button">
            More Details
          </button>
        </div>
      </div>
      <Link to="/post/abc" className="link"></Link>
    </div>
  );
};

export default MediaPost;
