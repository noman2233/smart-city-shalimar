import React from "react";
import "./mediaPosts.css";
import MediaPost from "../mediaPost/MediaPost";
const MediaPosts = () => {
  return (
    <div className="media_posts_container_wrapper">
      <div className="media_posts">
        <MediaPost img="https://www.shalimarsmartcity.com/media-images/1683371880822997007.jpg" />
        <MediaPost img="https://www.shalimarsmartcity.com/media-images/1683369305871285927.jpg" />
        <MediaPost img="https://www.shalimarsmartcity.com/media-images/16788832971572615875.jpg" />
        <MediaPost img="https://www.shalimarsmartcity.com/media-images/16777477251661980724.jpg" />
      </div>
    </div>
  );
};

export default MediaPosts;
