import React,{useState} from 'react'
import Home from '../../pages/Home/Home'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css"
import Menu from './Menues/Menu';
const Layout = () => {
  const [toggle,setToggle]=useState(true)

  //change toggle
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className="sidebac-section">
      <div className={toggle ?"sidebar-toggle sidebar":"sidebar"}>
        <div className="sidebar-icon">
          
        <p onClick={handleToggle}> 
          {
            toggle?(<AiOutlineDoubleLeft size={30}/>):(<AiOutlineDoubleRight size={30}/>)
          }
          </p>
          
        </div>
        <Menu toggle={toggle}/>
      </div>
      <div className="container">
        <Home/>
      </div>
    </div>
    </>
  )
}

export default Layout