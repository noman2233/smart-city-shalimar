import { Link } from "react-router-dom";
import "./singlePost.css";
import {
  EventAvailable,
  FacebookOutlined,
  Google,
  Instagram,
  LinkedIn,
  Person3,
  RemoveRedEye,
  Share,
  Textsms,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import Comments from "../comments/Comments";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          ipsam?
        </h1>
        <img
          className="singlePostImg"
          src="https://www.shalimarsmartcity.com/blog-images/high-tech-security-measures-at-shalimar-smart-city-blog-1681801923.jpg"
          alt=""
        />
        <div className="singlePostInfo">
          <b className="singlePostAuthor">
            <EventAvailable className="single_blog_post_time" />
            Posted On April 18, 2023
          </b>
          <div className="views_share_message_box">
            <b className="views_share_message">
              <RemoveRedEye className="single_blog_post_time" />2 views
            </b>
            <b className="views_share_message">
              <Textsms className="single_blog_post_time" />0
            </b>
            <b className="views_share_message">
              <Share className="single_blog_post_time" />0
            </b>
          </div>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse.
        </p>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse.
        </p>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse.
        </p>

        <h2 className="single_post_content_heading">
          Create a statement piece:
        </h2>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iste repellat omnis nemo quae! Quis
          iusto et quo atque esse, fuga aut asperiores, deserunt quidem
          assumenda mollitia error? Illum, quisquam enim. Dolorum et culpa
          debitis voluptatum sapiente. Officiis facere quis eius!
        </p>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat
        </p>

        <h2 className="single_post_content_heading">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat
        </p>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque fugit aut aliquam ipsa aliquid nulla, nisi
          aspernatur maiores architecto eligendi?
        </p>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere
          suscipit! Minima explicabo itaque quo, dicta sapiente molestias
          adipisci ullam. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quod iure dolore natus recusandae voluptatibus nemo, quasi eos
          deleniti repudiandae esse.
        </p>
        <h2 className="single_post_content_heading">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat
        </p>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quo ut
          nulla assumenda officia porro hic aliquam optio debitis, non
          distinctio odit veniam ipsa blanditiis vero voluptatum numquam in
          eligendi dignissimos labore reiciendis temporibus repudiandae
          sapiente. Animi repudiandae expedita quaerat
        </p>
        <div className="blog_auther_information">
          <h1 className="blog_heading_auther">Blog Author</h1>
          <div className="auher_info_container">
            <div className="auther_icon_name">
              <Person3 className="blog_auther_icon" />
              <p>Shalimar Smart City Team</p>
            </div>
            <div className="social_icons_links">
              <FacebookOutlined className="single_blog_fb" />
              <LinkedIn className="single_blog_twitter" />
              <Instagram className="single_blog_instagram" />
              <YouTube className="single_blog_google" />
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePost;
