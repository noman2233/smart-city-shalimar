import React from "react";
import "./home.css";
import Slider from "../../components/slider/Slider";
import PropertySlider from "../../components/propertySlider/PropertySlider";
import Facilities from "../../components/facilities/Facilities";
import Progress from "../../components/progress/Progress";
import EventsCard from "../../components/events/EventsCard";
import { useDocumentTitle } from "../../useDocumentTitle";
import PaymentPlane from "../../components/paymentPlane/PaymentPlane";
import Features from "../../components/features/Features";
import Award from "../../components/award/Award";
import Gallery from "../../components/gallery/Gallery";
const Home = () => {
  useDocumentTitle("Home");
  return (
    <div className="home">
      <Slider />
      <div className="home_components_wrapper">
        <div className="home_property_slider_heading">
          <img
            src="https://www.shalimarsmartcity.com/images/smart-city-slogan.png"
            alt=""
            className="home_property_slider_heading_image"
          />
          <p className="home_components_paragraphs">
            Welcome to Shalimar Smart City - a futuristic, sustainable and
            technologically advanced residential community that has been
            designed to provide you with the ultimate living experience. Our
            mission is to create a community that is not only self-sufficient
            and eco-friendly but also offers its residents a comfortable and
            convenient lifestyle. We have combined smart technology with modern
            infrastructure to create a perfect harmony between nature and urban
            living.
          </p>
          <PropertySlider />.
        </div>
        <div className="animinities_heading">
          <h1 className="features_heading_main">WORLD CLASS AMENITIES </h1>
          <p>FACILITIES</p>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
        </div>
        <p className="home_components_paragraphs">
          At Shalimar Smart City, we understand that your home is not just a
          place to live in, but a place to relax and unwind after a long day.
          That's why we have designed a range of world-class amenities that
          cater to your every need, so you can make the most of your living
          experience.
        </p>
        <Facilities />`
        <div className="progress_updates">
          <h1 className="animinities_heading">PATMENT PLANE</h1>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
          <p className="home_components_paragraphs">
            Everyone should have the opportunity to own a home in our community,
            and our flexible payment plans make it easier for you to realize
            your dream. Contact us today to learn more about our payment plans
            and take the first step towards owning your dream home.
          </p>
          <PaymentPlane />
        </div>
        <div className="progress_updates">
          <h1 className="animinities_heading">DEVELOPMENT</h1>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
          <p className="home_components_paragraphs">
            Here, we provide you with the latest news and updates on the
            development progress of our project, and we will continue to update
            this section with the latest progress on our development.
          </p>
          <Progress />
        </div>
        <div className="progress_updates">
          <h1 className="animinities_heading">EVENTS</h1>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
          <EventsCard />
        </div>
        <Features />
        <div className="progress_updates">
          <h1 className="animinities_heading">Award</h1>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
          <Award />
        </div>
        <div className="progress_updates gallary_home_main_page">
          <h1 className="animinities_heading">Gallary</h1>
          <div className="home_heading_hr_box">
            <hr className="home_animities_heading_hr_top" />
            <hr className="home_animities_heading_hr" />
            <hr className="home_animities_heading_hr_bottom" />
          </div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Home;
