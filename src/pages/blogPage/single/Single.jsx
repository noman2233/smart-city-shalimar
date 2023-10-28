import SinglePost from "../../../AllPagesCompoents/blogComponents/singlePost/SinglePost";
import Sidebar from "../../../AllPagesCompoents/blogComponents/sidebar/Sidebar";
import "./single.css";
import Slider from "../slider/Slider";
import { useDocumentTitle } from "../../../useDocumentTitle";

export default function Single() {
  useDocumentTitle("Blog Page")
  return (
    <div className="single_blog_page">
      <Slider />
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}
