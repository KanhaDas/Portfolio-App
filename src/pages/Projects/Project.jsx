import React from 'react'
import "./project.css"
import Spin from 'react-reveal/Spin';
const Project = () => {
  return (
   <div className="container project">
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top recent projects</h2>
    <hr />
    <p className='pb-3 text-center'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel aspernatur saepe, officiis nulla quibusdam debitis ducimus, laborum totam eligendi deleniti, quidem fuga tempore distinctio. Sint unde tempora recusandae, vitae explicabo hic distinctio qui esse fuga atque dolore error quam optio corporis reprehenderit enim harum incidunt dignissimos voluptatem saepe quo dicta?
    </p>
      
      {/* card design */}
    <div className="row" id='ads'>
      <Spin left>
      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Full stack</span>
            <img src="https://tse2.mm.bing.net/th?id=OIP.dk1JP9y_4dKLS_snU8NXSgHaEo&pid=Api&P=0&h=180" alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">react</span>
              <span className="card-detail-badge">Mongodb</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase ">Shopping cart</h5>
              </div>
              <a href="#" className='ad-btn'>View</a>
            
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Full stack</span>
            <img src="https://tse2.mm.bing.net/th?id=OIP.dk1JP9y_4dKLS_snU8NXSgHaEo&pid=Api&P=0&h=180" alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">react</span>
              <span className="card-detail-badge">Mongodb</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase ">Shopping cart</h5>
              </div>
              <a href="#" className='ad-btn'>View</a>
           </div>
        </div>
        </div>
       

        <div className="col-md-4">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Full stack</span>
            <img src="https://tse2.mm.bing.net/th?id=OIP.dk1JP9y_4dKLS_snU8NXSgHaEo&pid=Api&P=0&h=180" alt="project1" />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">react</span>
              <span className="card-detail-badge">Mongodb</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase ">Shopping cart</h5>
              </div>
              <a href="view" className='ad-btn'>View</a>
           </div>
        </div>
        </div>
        </Spin>
    </div>
   
   </div>
  )
}

export default Project