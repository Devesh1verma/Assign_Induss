import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../constant";
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const caseStudies1 = [
  {
    title: "Aura Branding Design",
    category: "Graphic Design",
    image: images.brandingImage,
  },
  {
    title: "AB.S Snack Packaging",
    category: "Graphic Design",
    image: images.snack,
  },
];

const caseStudies2 = [
  {
    title: "Gradient Website Development",
    category: "Web Development",
    image: images.webDevImage,
  },
  {
    title: "Magazine Content Writing",
    category: "Content Writing",
    image: images.magzine,
  },
];

export default function CaseStudiesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    const button = buttonRef.current;

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

    // Cards animation
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

    // Button animation
    gsap.fromTo(
      button,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: section, start: "center 80%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="container py-5">
      <div ref={headingRef}>
        <h6 className="small-heading text-center mb-3">CASE STUDIES</h6>
        <h2 className="service-cards-heading text-center mb-5">
          Our works describe why we are
          <br />
          the best in the business
        </h2>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                {caseStudies1.map((study, index) => (
                  <div
                    key={index}
                    className="col-12 py-3 pe-4"
                    ref={(el) => (cardsRef.current[index] = el)}
                  >
                    <div className="card h-auto border-0 shadow-sm">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6 className="text-muted">{study.category}</h6>
                        <h5 className="card-title">{study.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="row">
                {caseStudies2.map((study, index) => (
                  <div
                    key={index}
                    className="col-12 py-3 ps-4"
                    ref={(el) => (cardsRef.current[index + 2] = el)}
                  >
                    <div className="card h-auto border-0 shadow-sm">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6 className="text-muted">{study.category}</h6>
                        <h5 className="card-title">{study.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="text-center mt-5" ref={buttonRef}>
        <a href="#">
          <button className="card-btn">
            See all works{" "}
            <span className="ms-3">
              <FaArrowRight style={{ color: "var(--color-blue)" }} />
            </span>
          </button>
        </a>
      </div>
    </section>
  );
}