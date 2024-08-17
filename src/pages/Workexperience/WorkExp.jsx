import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { SiReact } from "react-icons/si";
import "./workexp.css"
const WorkExp = () => {
  return (
    <>
    <div className=" work" id='workexp'>
      <div className=" container work-exp">
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Fresher</h2>
      <hr />
      <VerticalTimeline>
   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2025"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">DRIEMS UNIVERSITY</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2025"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<SiReact/>}
  >
    <h3 className="vertical-timeline-element-title">Java Developer</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Vyasanagar Autonomous College, Jajpur</h4>
    */}
  </VerticalTimelineElement>
   </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default WorkExp