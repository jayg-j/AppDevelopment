import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ firstName: '', lastName: '', gender: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios.post('/api/register', form);
    navigate('/account-created');
  };

  return (
    <div>
      <h2>Create New Account</h2>
      <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
      <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
      <input placeholder="Gender" onChange={e => setForm({ ...form, gender: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}

export default Register;
