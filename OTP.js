import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OTP() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === '1234') navigate('/new-password'); // Example OTP check
    else alert('Incorrect OTP');
  };

  return (
    <div>
      <h2>Enter 4-digit OTP</h2>
      <input maxLength="4" onChange={e => setOtp(e.target.value)} />
      <button onClick={handleVerify}>Reset Password</button>
    </div>
  );
}

export default OTP;
