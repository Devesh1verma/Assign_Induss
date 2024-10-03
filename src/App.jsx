import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import OurServices from './components/OurServices.jsx';
import OurStorySection from './components/OurStory.jsx';
import Features from './components/Features.jsx';
import CaseStudiesSection from './components/CaseStudies.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';
import RegistrationForm from './components/Contact.jsx'; // Import the RegistrationForm component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Hero />
        <OurServices />
        <OurStorySection />
        <Features />
        <CaseStudiesSection />
        <Testimonial />
        <Footer />
        <ToastContainer />
      </>
    ),
    errorElement:<Error/>
  },
  {
    path: '/contact',
    element: <RegistrationForm />, // Route for the contact page
    errorElement:<Error/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
