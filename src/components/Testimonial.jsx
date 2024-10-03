import { images } from "../constant";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { testimonialData } from "../../data";

const Testimonial = ({ }) => {

    const renderDescription = (desc) => {
        return desc.split('<br/>').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < desc.split('<br/>').length - 1 && <br />}
          </React.Fragment>
        ));
      };


  return (
    <div className="container-fluid testimonial-container">
      <div className="row pt-5">
        <div className="col-12">
          <div className="" style={{ color: "#fff" }}>
            <h5 className="testimonial-text text-center mb-4">TESTIMONIAL</h5>


            <Swiper
              spaceBetween={50}
              speed={1200}
              slidesPerView={1}
              pagination={{ clickable: true }}
            //   autoplay={{ delay: 3500 }}
              loop={true}
              modules={[Pagination, Autoplay]}
            >

              {
                testimonialData.map((item) => (
                    <SwiperSlide key={item.id}>
                <div className="d-flex flex-column align-items-center gap-5 pb-5 p-0">
                  <h2 className="testimonial-desc text-center">
                    {renderDescription(item.desc)}
                  </h2>
                  <div className="d-flex flex-column align-items-center gap-4">
                    <div className="">
                      <img src={images.profile} alt="profile-img" className="" />
                    </div>
                    <div className="ms-4">
                      <h6>{item.username}</h6>
                      <p style={{ color: 'gray' }}>{item.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                ))
              }



            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
