import React from 'react'
import "./about.css"
import image from "./kanha1.png"
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
    <Jump>
   <div className="about">
    <div className="row">
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
        <img src={image} alt="Profile-pic" />
      </div>
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero modi inventore rerum. Sapiente quaerat suscipit quae veritatis sint itaque qui perferendis inventore. Esse commodi dolorem ullam hic qui omnis.
        </p>
      </div>
    </div>
   </div>
   </Jump>
    </>
  )
}

export default About