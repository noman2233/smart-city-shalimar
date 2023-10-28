import React from "react";
import "./comments.css";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
const Comments = () => {
  return (
    <div className="blog_comment">
      <div className="comment_heading">
        <h1>LEAVE A COMMENT</h1>
        <p>
          Your phone / email address will not be published. Required fields are
          marked *
        </p>
        <form className="post_comment_form">
          <div className="input_teax5tare">
            <div className="control_input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter name"
                className="comment_input"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="comment_input"
              />
            </div>
            <textarea
              name=""
              placeholder="Leave a comment"
              id=""
              cols="30"
              rows="8"
              className="blog_textarea"
            >
              Post a Comment
            </textarea>
          </div>
          <div className="button_blog">
            <button type="submit" className="comment__post_button">
              <AddCommentOutlinedIcon className="post_icon_comment" />
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
