// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          navigate('/home');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className='d-flex justify-content-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center"> {/* Centered container for buttons */}
            <button type="submit" className="btn btn-primary rs-100 rounded-0">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-3"> {/* Centered container for sign-up button */}
          <p>Don't have an Account</p>
          <Link to="/register" className="btn btn-secondary rounded-0">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
