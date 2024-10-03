import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function RegistrationForm() {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      createdAt: new Date(),
      first_name: '',
      last_name: '',
      emailId: '',
      age: '',
      gender: '',
      mobilenumber: '',
      pan_no: '',
      adhaar_no: '',
      status: true
    }
  });

  function onSubmit(values) {
    console.log(values);
    setBtnDisabled(true);

    // Make the POST request to the API
    axios.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', values)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        reset();
        toast.success('Thank you, we will contact you shortly!!');
        setBtnDisabled(false);
      })
      .catch(error => {
        console.error('There was an error submitting the data:', error);
        toast.error('Something went wrong!!');
        setBtnDisabled(false);
      });
  }

  return (
    <div id='contact' className="container my-5 p-5 border rounded-lg shadow-lg bg-white">
      <h6 className='small-heading text-center mb-3 text-gray-600'>Contact Us</h6>
      <h2 className="service-cards-heading text-center mb-5 text-2xl font-bold text-gray-800">
      Contact Us by completing the form below.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="row">
          {/* First Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="first_name" className="form-label font-medium text-gray-700">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              {...register("first_name", { required: "First name is required", minLength: { value: 2, message: "First name must be at least 2 characters" } })}
              type="text"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="first_name"
              placeholder="First_Name"
            />
            {errors.first_name && <p className="text-danger text-red-600">{errors.first_name.message}</p>}
          </div>

          {/* Last Name */}
          <div className="col-md-6 mb-3">
            <label htmlFor="last_name" className="form-label font-medium text-gray-700">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              {...register("last_name", { required: "Last name is required", minLength: { value: 2, message: "Last name must be at least 2 characters" } })}
              type="text"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="last_name"
              placeholder="Last_Name"
            />
            {errors.last_name && <p className="text-danger text-red-600">{errors.last_name.message}</p>}
          </div>
        </div>

        <div className="row">
          {/* Email Address */}
          <div className="col-md-6 mb-3">
            <label htmlFor="emailId" className="form-label font-medium text-gray-700">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              {...register("emailId", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              type="email"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="emailId"
              placeholder="first.last@example.com"
            />
            {errors.emailId && <p className="text-danger text-red-600">{errors.emailId.message}</p>}
          </div>

          {/* Mobile Number */}
          <div className="col-md-6 mb-3">
            <label htmlFor="mobilenumber" className="form-label font-medium text-gray-700">
              Mobile Number <span className="text-danger">*</span>
            </label>
            <input
              {...register("mobilenumber", { required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })}
              type="tel"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="mobilenumber"
              placeholder="1234567890"
            />
            {errors.mobilenumber && <p className="text-danger text-red-600">{errors.mobilenumber.message}</p>}
          </div>
        </div>

        <div className="row">
          {/* Age */}
          <div className="col-md-4 mb-3">
            <label htmlFor="age" className="form-label font-medium text-gray-700">
              Age <span className="text-danger">*</span>
            </label>
            <input
              {...register("age", { required: "Age is required", valueAsNumber: true, min: { value: 18, message: "You must be at least 18 years old" } })}
              type="number"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="age"
            />
            {errors.age && <p className="text-danger text-red-600">{errors.age.message}</p>}
          </div>

          {/* Gender */}
          <div className="col-md-4 mb-3">
            <label htmlFor="gender" className="form-label font-medium text-gray-700">
              Gender <span className="text-danger">*</span>
            </label>
            <select {...register("gender", { required: "Gender is required" })} className="form-select border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-danger text-red-600">{errors.gender.message}</p>}
          </div>

          {/* PAN Number */}
          <div className="col-md-4 mb-3">
            <label htmlFor="pan_no" className="form-label font-medium text-gray-700">
              PAN Number <span className="text-danger">*</span>
            </label>
            <input
              {...register("pan_no", { required: "PAN number is required", pattern: { value: /^[A-Z]{5}[0-9]{4}[A-Z]$/, message: "Invalid PAN number" } })}
              type="text"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="pan_no"
              placeholder="ABCDE1234F"
            />
            {errors.pan_no && <p className="text-danger text-red-600">{errors.pan_no.message}</p>}
          </div>
        </div>

        <div className="row">
          {/* Aadhaar Number */}
          <div className="col-md-6 mb-3">
            <label htmlFor="adhaar_no" className="form-label font-medium text-gray-700">
              Aadhaar Number <span className="text-danger">*</span>
            </label>
            <input
              {...register("adhaar_no", { required: "Aadhaar number is required", pattern: { value: /^[0-9]{12}$/, message: "Invalid Aadhaar number" } })}
              type="text"
              className="form-control border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="adhaar_no"
              placeholder="123456789012"
            />
            {errors.adhaar_no && <p className="text-danger text-red-600">{errors.adhaar_no.message}</p>}
          </div>
        </div>

        <div className='text-center pt-3'>
          <button disabled={btnDisabled} type="submit" className="btn btn-primary px-6 py-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
