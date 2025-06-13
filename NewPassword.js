import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {

    navigate('/password-reset-success');
  };

  return (
    <div>
      <h2>Set New Password</h2>
      <input type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
}

export default NewPassword;
