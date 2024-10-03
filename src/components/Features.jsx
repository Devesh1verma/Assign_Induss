import React, { useEffect, useRef } from 'react';
import { featureData } from "../../data";
import CallToAction from "./CallToAction";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const featureCardsRef = useRef([]);

  useEffect(() => {
    // Set initial states
    gsap.set([headingRef.current, subheadingRef.current, ...featureCardsRef.current], {
      opacity: 1,
      y: 0
    });

    // Animate heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
    });

    // Animate subheading
    gsap.from(subheadingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: subheadingRef.current,
        start: 'top 80%',
      },
    });

    // Animate feature cards
    featureCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      });
    });
  }, []);

  return (
    <div
      className="container-fluid py-5 features-container"
      style={{ backgroundColor: "#F4F7FA" }}
    >
      <div style={{ borderBottom: '1px solid rgba(231, 233, 237, 1)'}} className="container py-5">
        <div className="row gx-0">
          <h6 className="small-heading text-center" ref={headingRef}>Why choose us</h6>
          <h1 className="service-cards-heading mb-3 text-center" ref={subheadingRef}>
            People choose us because <br /> we serve the best for everyone
          </h1>

          <div className="row py-5">
            <div className="col-xl-2 p-0"></div>
            <div className="col-xl-8 p-0">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 row-gap-5">
                {featureData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="feature-card"
                    ref={el => featureCardsRef.current[index] = el}
                  >
                    <div>
                      <div className='icon-container' style={{backgroundColor: "#473BF01A"}}>
                        <img src={item.iconImage} alt={item.title} />
                      </div>
                    </div>
                    <div>
                      <p className="title mb-1">{item.title}</p>
                      <p className="text-left desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-2 p-0"></div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <CallToAction textColor={'#161C2D'}/>
      </div>
    </div>
  );
};

export default Features;