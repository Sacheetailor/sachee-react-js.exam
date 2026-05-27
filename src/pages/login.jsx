import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card, Form, Button } from 'react-bootstrap';

const Login = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username !== '') {
      localStorage.setItem('user', username);
      navigate('/');
    }
  };

  return (
    <div className="container mt-5">

      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto p-4 shadow rounded"
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter Username"
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="btn btn-primary w-100">
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;