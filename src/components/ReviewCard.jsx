
import { BsFillStarFill } from "react-icons/bs";
import { images } from "../constant";
export default function ReviewCard() {
  return (
 <div style={{ borderBottom: "1px solid #E7E9ED"}} className="py-lg-5 py-3 px-lg-4 px-0">

        <div className="review-card py-5">
          <div className="row g-0 align-items-center">
            <div className="col-md-2 p-0 text-center">
              <img
                src={images.userImage}
                alt="Franklin Hicks"
                width={150}
                height={150}
                className="rounded-circle"
              />
            </div>
            <div className="col-md-1 p-0"></div>
            <div className="col-md-9 p-0 pt-md-0 pt-5">
              <div className="card-body d-flex flex-column gap-md-3 gap-2">
                <div className="d-flex align-items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <BsFillStarFill key={i} className="me-1" style={{ color: "#FC0" }}/>
                  ))}
                </div>
                <p className="card-desc">
                  "OMG! I cannot believe that I have got a brand new landing page
                  after getting Albino. It was super easy to edit and publish."
                </p>
                <h4 className="card-title mb-0">Franklin Hicks <small className="ms-2 text-muted fw-light">Web Developer</small></h4>
              </div>
            </div>
          </div>
        </div>
        </div>
       
  )
}