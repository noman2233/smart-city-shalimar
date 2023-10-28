import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const OpenFB = () => {
    window.open("https://www.facebook.com/shalimarsmartcity");
  };
  const OpenYT = () => {
    window.open("https://www.youtube.com/channel/UCdHuBTGrqkJM9Ayw9z_y3Bw");
  };
  const OpenLinkedin = () => {
    window.open("https://www.linkedin.com/company/shalimar-group-pakistan");
  };
  const OpenInsta = () => {
    window.open("https://www.instagram.com/shalimargroup/?igshid=nrmnui21zhmj");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1010) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="Navbar">
      <div className="navbar_logo_menu">
        <img
          src="https://www.shalimarsmartcity.com/images/shalimar-smartcity-small-icon.svg"
          alt=""
          className="logo"
        />
        <nav className="nav_bar_menu">
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/business-district">
              <li>BUSINESS DISTRICT</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/features">
              <li>FEATURES</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/development">
              <li>DEVELOPMENTS</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/events">
              <li>EVENTS</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/gallery">
              <li>GALLARY</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/videos">
              <li>VIDEOS</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/blog">
              <li>BLOG</li>
            </Link>
            <hr className="navber_menu_hr" />
            <Link to="/contact">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="navbar_social">
        <FacebookRoundedIcon className="navbar_social_icons" onClick={OpenFB} />
        <LinkedInIcon className="navbar_social_icons" onClick={OpenLinkedin} />
        <InstagramIcon className="navbar_social_icons" onClick={OpenInsta} />
        <YouTubeIcon className="navbar_social_icons" onClick={OpenYT} />
        {isOpen && (
        <MenuIcon
          onClick={() => setOpenSidebar(!openSidebar)}
          className="menu_item_navbar"
        />
      )}
      {openSidebar && <Sidebar />}
      </div>
    
    </div>
  );
};

export default Navbar;
