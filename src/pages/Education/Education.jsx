import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

import "./education.css"
const Education = () => {
  return (
   <>
   <div className="container education" id='education'>
   <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education details</h2>
   <hr />
   <VerticalTimeline>
   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2025"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">B-TECH</h3>
    <h4 className="vertical-timeline-element-subtitle">DRIEMS UNIVERSITY</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2018 - 2020"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">12th</h3>
    <h4 className="vertical-timeline-element-subtitle">Vyasanagar Autonomous College, Jajpur</h4>
   
  </VerticalTimelineElement>
   </VerticalTimeline>
   </div>
   
   </>
  )
}

export default Education