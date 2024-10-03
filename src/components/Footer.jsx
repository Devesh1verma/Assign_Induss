import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'
import CallToAction from './CallToAction'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#161C2D" }} className="text-light py-5">

        
      <div className="container">
      <CallToAction/>
        <div className="row pt-5">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="h4 mb-3">Brainwave.io</h2>
            <p className="mb-4">With lots of unique blocks, you can <br/> easily build a page without coding.<br/> Build your next landing page.</p>
            <div className="d-flex">
              <a href="#" className="me-3 text-light">
                <Twitter size={20} />
              </a>
              <a href="#" className="me-3 text-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="me-3 text-light">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className='footer-subheading'>Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">About us</a></li>
              <li><a href="#" className="footer-links">Contact us</a></li>
              <li><a href="#" className="footer-links">Careers</a></li>
              <li><a href="#" className="footer-links">Press</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className='footer-subheading'>Product</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Features</a></li>
              <li><a href="#" className="footer-links">Pricing</a></li>
              <li><a href="#" className="footer-links">News</a></li>
              <li><a href="#" className="footer-links">Help desk</a></li>
              <li><a href="#" className="footer-links">Support</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className='footer-subheading'>Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Digital Marketing</a></li>
              <li><a href="#" className="footer-links">Content Writing</a></li>
              <li><a href="#" className="footer-links">SEO for Business</a></li>
              <li><a href="#" className="footer-links">UI Design</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className='footer-subheading'>Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-links">Privacy Policy</a></li>
              <li><a href="#" className="footer-links">Terms & Conditions</a></li>
              <li><a href="#" className="footer-links">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}