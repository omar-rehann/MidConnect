import React from 'react';
import "./loghere.css"
import Choose from '../choose/choose';
function Loginhere() {
  return (
    <>
    <div className="login">
      <h4> Login</h4>
      <h5>Please log In to Book Appontiments</h5>

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

      
     
    </div>
    <Choose/>
    </>
    
  );
}

export default Loginhere;