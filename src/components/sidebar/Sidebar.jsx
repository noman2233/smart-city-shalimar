import { Link } from "react-router-dom";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar_menu">
      <nav className="side_menu_navbar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/business-district">
            <li>BUSINESS DISTRICT</li>
          </Link>
          <Link to="/features">
            <li>FEATURES</li>
          </Link>
          <Link to="/development">
            <li>DEVELOPMENTS</li>
          </Link>
          <Link to="/events">
            <li>EVENTS</li>
          </Link>
          <Link to="/gallery">
            <li>GALLARY</li>
          </Link>
          <Link to="/videos">
            <li>VIDEOS</li>
          </Link>
          <Link to="/blog">
            <li>BLOG</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </nav>
   
    </div>
  );
};

export default SideBar;
