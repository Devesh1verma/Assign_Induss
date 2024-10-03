import React from 'react'

export default function CallToAction({ textColor }) {
  return (
    <div style={{ borderBottom:  textColor ? 'none' : '1px solid #272B39' }} className="py-5">
      <div className="container">
        <div className="row align-items-center" style={{ color: textColor ? textColor : '#FFF'}}>
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Ready to launch your next project?</h2>
            <p className="lead mb-0">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <button className="main-btn">
              Get started a project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}