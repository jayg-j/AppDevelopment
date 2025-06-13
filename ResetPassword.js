import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Normally, trigger OTP email here
    navigate('/otp');
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Send OTP</button>
    </div>
  );
}

export default ResetPassword;
