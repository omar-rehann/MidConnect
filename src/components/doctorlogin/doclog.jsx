import React from 'react';
import "./doclog.css"
import { Link } from 'react-router-dom';
function DocLog() {
  return (
    <div className="login">
      <h4>Doctor Login</h4>

      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="email"  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder='Enter  your Email'
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
                        placeholder='Enter  your Password'

            id="password"
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
<p className='mt-4'>
  Admin Login ? 
  <Link to="/adminlogin" className="ms-2">
    Click Here
  </Link>
</p>
      
     
    </div>
  );
}

export default DocLog;