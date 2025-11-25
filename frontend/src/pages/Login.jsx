// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import api from '../api/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={submit} style={{ maxWidth: 360 }}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={inputStyle} />
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required type="password" style={inputStyle} />
        <button type="submit" style={btnStyle}>Login</button>
        {err && <p style={{color:'red'}}>{err}</p>}
      </form>
    </div>
  );
};

const inputStyle = { display: 'block', width: '100%', padding: 8, margin: '8px 0' };
const btnStyle = { padding: '8px 12px', background: '#0b5fff', color: '#fff', borderRadius: 6, border: 'none' };

export default Login;
