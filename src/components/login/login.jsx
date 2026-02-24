import React from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="login">
      <h4>Admin Login</h4>

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
  Doctor Login ?
  <Link to="/doctorlogin" className="btn btn-primary outsidenav ms-2">
    Create Account
  </Link>
</p>

      
     
    </div>
  );
}

export default Login;