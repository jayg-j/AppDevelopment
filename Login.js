import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post('/api/login', { email, password });
      navigate('/feed');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>LOG-IN</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Sign In</button>
      <button onClick={() => navigate('/reset-password')}>Forgot Password?</button>
      <button onClick={() => navigate('/register')}>Create Account</button>
    </div>
  );
}

export default Login;
