import React from 'react';
import "./create.css"   
import { Link } from 'react-router-dom';
import Choose from '../choose/choose';

function Createacount() {
  return (
    <>
    <div className="register">
        <div className="start">
            <h5>Create Account</h5>
            <h5>Please Sign up to book appointments</h5>
        </div>
       <hr />

      <form className="register-form">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your first name"
            id="firstName"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your last name"
            id="lastName"
            required
          />
        </div>

        {/* الإيميل */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* كلمة المرور */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Create a strong password"
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            id="confirmPassword"
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreeTerms"
            required
          />
          <label className="form-check-label" htmlFor="agreeTerms">
            I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Account
        </button>
      </form>
      <p className="text-start mt-3">
        Already have an account?   <Link to="/loginhere" className="btn btn-primary outsidenav ms-2">
    Login Here
  </Link>
      </p>
    </div>
    <Choose/>
    </>
    
  );
}

export default Createacount;