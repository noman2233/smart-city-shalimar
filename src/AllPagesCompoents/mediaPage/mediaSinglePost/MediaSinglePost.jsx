import React from "react";
import "./mediaSinglePost.css";
import {
  EventAvailable,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Person3,
  RemoveRedEye,
  Share,
  Textsms,
  YouTube,
} from "@mui/icons-material";

const MediaSinglePost = () => {
  return (
    <div className="media_singlePost">
      <div className="media_singlePostWrapper">
        <h1 className="media_singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          ipsam?
        </h1>
        <img
          className="media_singlePostImg"
          src="https://www.shalimarsmartcity.com/media-images/16788832971572615875.jpg"
          alt=""
        />
        <div className="media_singlePostInfo">
          <b className="media_singlePostAuthor">
            <EventAvailable className="media_single_blog_post_time" />
            Posted On April 18, 2023
          </b>
          <div className="media_viewsShareMessage_box">
            <b className="media_views_share_message">
              <RemoveRedEye className="media_single_blog_post_time" />2 views
            </b>
            <b className="media_views_share_message">
              <Textsms className="single_blog_post_time" />0
            </b>
            <b className="media_views_share_message">
              <Share className="single_blog_post_time" />0
            </b>
          </div>
        </div>
        <p className="media_singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse.
        </p>

        <p className="media_singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque fugit aut aliquam ipsa aliquid nulla, nisi
          aspernatur maiores architecto eligendi?
        </p>
        <p className="media_singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse.
        </p>

        <p className="media_singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat
        </p>
        <p className="media_singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat
        </p>
        <div className="media_blog_auther_information">
          <div className="mediaBlog_Auther_info">
            <div className="auther_icon_name">
              <img
                src="https://www.shalimarsmartcity.com/images/shalimar-smartcity-small-icon.svg"
                alt=""
                className="blog_auther_icon"
              />
              <p>Shalimar Smart City Team</p>
            </div>
            <div className="social_icons_links">
              <FacebookOutlined className="media_single_blog_fb" />
              <LinkedIn className="media_single_blog_twitter" />
              <Instagram className="media_single_blog_instagram" />
              <YouTube className="media_single_blog_google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSinglePost;
