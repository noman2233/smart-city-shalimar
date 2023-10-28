import MediaSinglePost from "../../../AllPagesCompoents/mediaPage/mediaSinglePost/MediaSinglePost";
import Sidebar from "../../../AllPagesCompoents/mediaPage/mediaSinglePost/sidebar/Sidebar";
import { useDocumentTitle } from "../../../useDocumentTitle";
import Slider from "../../blogPage/slider/Slider";
import "./singleMediaPost.css";
const SingleMediaPost = () => {
  useDocumentTitle("Media Blog Post ");
  return (
    <div className="media_single_blog_page">
      <Slider />
      <div className="media_single">
      <div className="media_single_container_wrapper">
        <MediaSinglePost />
        <Sidebar/>
      </div>
      </div>
    </div>
  );
};

export default SingleMediaPost;
