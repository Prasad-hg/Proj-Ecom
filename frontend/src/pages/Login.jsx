
import React, { useState, useContext } from 'react';
import api from '../api/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await api.post('/users/login', { email, password });
      login(res.data.token, res.data.user);
      navigate('/');
    } catch (error) {
      setErr(error?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card-header">
          <h2>Login</h2>
          <p className="auth-subtitle">Welcome back! Sign in to continue shopping.</p>
        </div>

        <form onSubmit={submit} className="auth-form">
          <input
            className="auth-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            autoComplete="current-password"
          />
          <button type="submit" className="btn btn-primary auth-btn">
            Login
          </button>
          {err && <p className="auth-error">{err}</p>}
        </form>

        <p className="auth-footer">
          New to eKart? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
