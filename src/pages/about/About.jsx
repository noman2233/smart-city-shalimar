import React from 'react'
import "./about.css"
import Slider from "../../AllPagesCompoents/aboutPage/slider/Slider"
import Vision from '../../AllPagesCompoents/aboutPage/vision/Vision'
import Mission from '../../AllPagesCompoents/aboutPage/mission/Mission'
import Objective from '../../AllPagesCompoents/aboutPage/objective/Objective'
import Features from '../../AllPagesCompoents/aboutPage/features/Features'
import {useDocumentTitle} from "../../useDocumentTitle"
function About() {
  useDocumentTitle("About Us")
  return (
    <div>
      <Slider/>
      <div className="about_page_container_wrapper_darkMode">
      <Vision/>
      <Mission/>
      <Objective/>
      <Features/>
      </div>
    </div>
  )
}

export default About
