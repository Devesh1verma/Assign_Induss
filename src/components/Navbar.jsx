import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    setIsopen(!isOpen); // Simplified toggle logic
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='container-fluid py-4 navbar-container d-lg-block d-none'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-5">
                <div>
                  <h4>
                    <Link to="/" className="logo-text"> {/* Use Link instead of a */}
                      Brainwave.io
                    </Link>
                  </h4>
                </div>
                <div>
                  <ul className="list-unstyled d-flex gap-3">
                    <li>
                      <Link to="/demo" className="nav-links">Demo</Link>
                    </li>
                    <li>
                      <Link to="/pages" className="nav-links">Pages</Link>
                    </li>
                    <li>
                      <Link to="/support" className="nav-links">Support</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-links">Contact</Link> {/* Use Link */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end align-items-center">
                <button className="main-btn">Get started a project</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="container-fluid py-4 navbar-container d-lg-none d-block">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="d-flex align-items-center gap-5">
                <span onClick={ToggleSidebar}>
                  <TbMenu2 size="32" />
                </span>
                <div>
                  <h4>
                    <Link to="/" className="logo-text"> {/* Use Link */}
                      Brainwave.io
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-6 d-none d-sm-block">
              <div className="d-flex justify-content-end align-items-center">
                <button className="main-btn">Get started a project</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className={`sidebar ${isOpen ? "active" : ""}`}>
            <div className="sd-header">
              <div>
                <h4>
                  <Link to="/" className="logo-text text-white">
                    Brainwave.io
                  </Link>
                </h4>
              </div>
              <div onClick={ToggleSidebar}>
                <span><RxCross1 color="#FFF" /></span>
              </div>
            </div>
            <div className="sd-body">
              <ul>
                <li>
                  <Link
                    to="/"
                    className="nav-links text-white"
                    onClick={() => setIsopen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/demo"
                    className="nav-links text-white"
                    onClick={() => setIsopen(false)}
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages"
                    className="nav-links text-white"
                    onClick={() => setIsopen(false)}
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="nav-links text-white"
                    onClick={() => setIsopen(false)}
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="nav-links text-white"
                    onClick={() => setIsopen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`sidebar-overlay ${isOpen ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
