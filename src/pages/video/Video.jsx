import React from 'react'
import "./video.css"
import Slider from "../../AllPagesCompoents/videosPage/slider/Slider"
import VideoSection from '../../AllPagesCompoents/videosPage/videoSection/VideoSection'
import { useDocumentTitle } from '../../useDocumentTitle'
const Video = () => {
  useDocumentTitle("Video")

  return (
    <div>
      <Slider/>
      <VideoSection/>
    </div>
  )
}

export default Video
