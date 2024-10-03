import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { images } from "../constant"
import Navbar from "./Navbar"

const Hero = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)




  return (
    <div className='container-fluid hero-container'>
      {/* <Navbar/> */}
      <div className='container py-5'>
        <div className='row gx-0'>
          <div className="col-xl-1 p-0"></div>
          <div className="col-xl-10 p-0">
            <div className='row'>
              <div className="col-lg-6 pe-5 ps-0">
                <h6 className="small-heading text-left mb-3">Let's shift your business</h6>

                <h2 className="fw-bold mb-3" ref={headingRef}>
                  Shift your business fast with Shade Pro.
                </h2>
                <p className="lead mb-0 pt-3" ref={paragraphRef}>
                  With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </p>
          
                <div className="mt-5" ref={buttonRef}>
                  <button className="main-btn">
                    Get started a project
                  </button>
                </div>
              </div>
              <div className="col-lg-6 ps-5 pe-0">
                <img className="img-fluid" src={images.heroImage} alt="Hero" ref={imageRef} />
              </div>
            </div>
          </div>
          <div className="col-xl-1 p-0"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero