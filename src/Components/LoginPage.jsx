// Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'deepak' && password === '00000') {
      Cookies.set('auth', 'true');
      navigate('/');
    } else {
      toast.error('Invalid credentials!', {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#101928]">
      <img src="/LOGO2.png" alt="Logo" className="h-20 w-28 mb-8" />
  
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          className="w-full px-4 py-2 mb-4 border rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Login
        </button>
      </div>
  
      <ToastContainer />
    </div>
  );
  
};

export default LoginPage;
