import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Kanha-resume.pdf"
import { BsMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
const Home = () => {
  const [theme,setTheme]=useTheme();

  //handle theme
  const handleTheme=()=>{
    setTheme((prev)=>(prev==='light'?"dark":"light"))
  }
  return (
    <>
      <div className="container-fluid  home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme==='light'?(<BsMoonStarsFill size={30}/>):(<BsFillSunFill  size={30} />)}
        </div>
        <div className="container home-content">
          <Fade right>
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer !", "Mern Stack Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv"href={Resume} download="your_name.pdf">My Resume</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
