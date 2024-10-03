import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCardsData } from "../../data";
import { FaArrowRight } from "react-icons/fa6";
import ReviewCard from "./ReviewCard";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const reviewCardRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    const reviewCard = reviewCardRef.current;

    // Heading animation
    gsap.fromTo(
      heading,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );

    // Service cards animation
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 * index,
          scrollTrigger: { trigger: section, start: "top 60%" },
        }
      );
    });

    // Review card animation
    gsap.fromTo(
      reviewCard,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: reviewCard, start: "top 80%" },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="container py-5 my-5">
      <div ref={headingRef}>
        <h6 className="small-heading text-center mb-3">OUR SERVICES</h6>
        <h2 className="service-cards-heading text-center mb-5">
          We provide great services for our<br />customers based on needs
        </h2>
      </div>
      
      <div className="row gx-0 ">
        <div className="col-xl-1 p-0"></div>

        <div className="col-xl-10">
          <div className="row gx-0 service-cards">
            {serviceCardsData.map((service, index) => (
              <div 
                key={service.id} 
                className='col-lg-4 px-lg-2 py-2 py-lg-0'
                ref={el => cardsRef.current[index] = el}
              >
                <div className="card h-100 text-white" style={{backgroundColor: service.color}}>
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-4">
                      <img className="cards-image" src={service.image} alt={service.title}  />
                    </div>
                    <h3 className="card-title text-center mb-3">{service.title}</h3>
                    <p className="card-text text-center flex-grow-1">
                      With lots of unique blocks, you can easily build a page without coding. 
                      Build your next landing page.
                    </p>
                    <div className="text-center mt-auto">
                      <button className="card-btn">
                        Learn more <span className="ms-3"><FaArrowRight/></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={reviewCardRef}>
            <ReviewCard/>
          </div>
        </div>

        <div className="col-xl-1 p-0"></div>
      </div>
    </div>
  )
}