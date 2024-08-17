import React from 'react'
import "./App.css"
import Layout from './component/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/TechStack/Techstack'
import Project from './pages/Projects/Project'
import Education from './pages/Education/Education'
import WorkExp from './pages/Workexperience/WorkExp'
import Contact from './pages/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext'
import Tada from 'react-reveal/Tada';
import MobileNav from './component/Layout/MobileNav/MobileNav'
const App = () => {
  const [theme] =useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav/>
     <Layout/>
     <div className="container">
     <About/>
     <Education/>
     <Techstack/>
     <Project/>
     <WorkExp/>
     <Contact/>
     </div>
     <div className="footer pb-3 ms-3">
      <Tada>
      <h4 className="text-center">
        Made with ❤️ DasTech &copy; 2024
      </h4>
      </Tada>
     </div>
     </div>
     <ScrollToTop
      smooth
     color="#f29f67"
     style={{backgroundColor:"#1e1e2c",borderRadius:"80px",}}/>
     
    </>
  )
}

export default App