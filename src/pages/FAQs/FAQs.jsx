import React from "react";
import "./faqs.css";
import { FiberManualRecordRounded } from "@mui/icons-material";
import { data } from "./dummy";
import { useDocumentTitle } from "../../useDocumentTitle";
const FAQs = () => {
  useDocumentTitle("frequently asked question")
  return (
    <div>
      <div className="frequent_questions__slider">
        <img
          src="https://www.shalimarsmartcity.com/banner-images/faq-banner-lg-16811101031229377592.jpg"
          alt=""
          className="frequent_questions_slider_image"
        />
      </div>
      <div className="questions_container">
        <div className="questions_wrapper">
          <div className="questions_heading_wrapper">
            <h1 className="questions_heading">Shalimar Smart City</h1>
            <p className="questions_sub_heading">FAQs</p>
          </div>
          <div className="all_question_answer_main_container">
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>What is Shalimar Smart City?</h1>
              </div>
              <p className="answer_details">
                Shalimar smart city is a trailblazer project of luxurious living
                in Sargodha. This mega project is using cutting-edge technology
                and an impressive innovative architectural design to enhance the
                quality of life for its habitants. Moreover, we are determined
                to develop a new business district in Sargodha that will pave
                the way for creating new markets and becoming the biggest
                business hub in Sargodha.
              </p>
            </div>
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>Why Smart City?</h1>
              </div>
              <p className="answer_details">
                Shalimar Smart City is the futuristic lifestyle for the
                residents of Sargodha and is setting a new benchmark of quality
                living within the region.
                <ul className="frequent_List_Item_container">
                  <li className="frequent_List_Item">
                    <FiberManualRecordRounded className="frequent_answer_quaetion_icon" />
                    <p>
                      <b>Security :</b>A robust surveillance by using elusive
                      sensors, drones, and cameras, to make sure the residents
                      of Shalimar smart city live a carefree life without any
                      external and internal security threats.
                    </p>
                  </li>
                  <li className="frequent_List_Item">
                    <FiberManualRecordRounded className="frequent_answer_quaetion_icon" />
                    <p>
                      <b> Smart Business District: </b>
                      The Smart business district satisfies all sorts of
                      commercial needs. It is the hub of creating and exploiting
                      new business opportunities. It has food courts, a business
                      hub, an IT district, a recreational area, and much more
                      (click here) for further details
                    </p>
                  </li>
                  <li className="frequent_List_Item">
                    <FiberManualRecordRounded className="frequent_answer_quaetion_icon" />
                    <p>
                      <b> Luxurious Life Style: </b>
                      Our smart housing comes with deluxe living standards with
                      incredible amenities (click here) for all to benefit from.
                    </p>
                  </li>
                  <li className="frequent_List_Item">
                    <FiberManualRecordRounded className="frequent_answer_quaetion_icon" />
                    <p>
                      <b> Investment Opportunity: </b>
                      Shalimar Smart City offers an epic strategic investment
                      prospect to either invest in a residential or business hub
                      or develop your own business.
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>What is the exact location of Shalimar Smart City?</h1>
              </div>
              <p className="answer_details">
                It is located on Lahore Road just 7km away from Qanchi-Mor
                Sargodha which is a 5 to 7 minutes drive.
              </p>
            </div>
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>What are the Sizes of the Roads?</h1>
              </div>
              <p className="answer_details">
                The minimum size of the road is 40 feet.
              </p>
              <p className="answer_details">
                The maximum size of the main roads is 150 Feet.
              </p>
            </div>
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>What is the total area covered by this project?</h1>
              </div>
              <p className="answer_details">
                The total area utilized by this project is Aprox 700 Kanals
              </p>
            </div>
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>Is the water Sweet?</h1>
              </div>
              <p className="answer_details">
                Yes, Shalimar Smart City has sweet underground water. Smart City
                will also collect the rainwater in its scenic reservoirs during
                the monsoon and rainy seasons that will be used for the
                harvesting and irrigation of the plants.
              </p>
            </div>
            <div className="question_answer_container">
              <div className="question_container">
                <p>Q</p>
                <h1>
                  What is the Development time of the Shalimar Smart City?
                </h1>
              </div>
              <p className="answer_details">
                For the Business district, it will be ready in 2 years.
              </p>
              <p className="answer_details">
                For residential it will be ready in couple of years.
              </p>
            </div>
            <div className="questions_heading_wrapper">
              <h1 className="questions_heading">Smart Business District</h1>
              <p className="questions_sub_heading">FAQs</p>
            </div>
            {data.map((question) => (
              <div className="question_answer_container">
                <div className="question_container" key={question.id}>
                  <p>Q</p>
                  <h1>{question.question}</h1>
                </div>
                <p className="answer_details">
                {question.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
