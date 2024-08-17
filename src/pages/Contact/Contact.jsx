import React from 'react'
import "./contact.css"
import { FaLinkedin,FaGithub,FaFacebook ,FaInstagram } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
const Contact = () => {
  return (
    < >
   
    <div className=" contact" id='contact'>
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
            <div className="row border-line">
              <LightSpeed>
              <img src="https://tse4.mm.bing.net/th?id=OIP.ej3aOdxGLhqc-Ds9_upNaAHaD4&pid=Api&P=0&h=180" alt="contact" className='image'/>
              </LightSpeed>
              </div>
            </div>
          </div>
         <div className="col-lg-6 col-md-6">
            <Rotate>
          <div className="card2 d-flex card border-0 px-4 py-3">
          <div className="row">
            <div className="row">
            <h6>Contact with 
            <FaLinkedin size={30} color='blue' className='ms-2'/>
            <FaGithub size={30}className='ms-2' color='black'/>
            <FaFacebook size={30}className='ms-2' color='blue'/>
            <FaInstagram  size={30}className='ms-2'
            color='#FCAF45' />
            </h6>
            </div>
           
         
          <div className="row px-3 mb-4">
            <div className="line">
              <small className="or text-center">OR</small>
              <div className="line">
                </div>
                <div className="row px-3">
                  <input type="text" name='name' placeholder='Enter your name' className='mb-3' />
                </div>
                <div className="row px-3">
                  <input type="email" name='email' placeholder='Enter your email' className='mb-3' />
                </div>
                <div className="row px-3">
                  <textarea type="text" name='msg' placeholder='Enter your name' className='mb-3' />
                </div>
                <div className="row mb-3">
                  <button className='btn' type='submit'>SEND MESSAGE</button>
                </div>
            </div>
           
          </div>
          </div>
          
          </div>
          </Rotate>
         </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact