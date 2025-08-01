import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaInstagram, FaGlobe, FaFacebook } from 'react-icons/fa';
import tie from '../image/tie.png';
import mobileApp from '../image/lgnSuit.jpg'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock user credentials
    const mockUsername = 'admin';
    const mockPassword = 'password';

    if (username === mockUsername && password === mockPassword) {
      navigate('/students');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-4xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-gray-500 text-white">
          <div className="flex justify-center">
            <img src={tie} alt="Attire Scanner" className="w-[100px] h-12" />
          </div>
          <h2 className="text-3xl font-bold text-center mt-4">Attire Scanner</h2>
          <p className="text-xl text-center mt-2">LOG IN</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-l text-white">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-l text-white">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <a href="/forgot-password" className="text-xl text-gray-800 hover:text-gray-200">Forgot Password?</a>
              <button type="submit" className="px-6 py-2 text-white hover:text-gray-800 bg-gray-600 rounded-lg mt-[20px] hover:bg-gray-400">
                Submit
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-white">or continue with</p>
            <div className="flex justify-center mt-3">
              <button className="flex items-center justify-center w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-200">
                Continue Using Google
              </button>
            </div>
            <div className="flex justify-center mt-3">
              <button className="flex items-center justify-center w-full px-4 py-2 bg-gray-800 text-white-800 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-gray-800">
                Continue Using X (Twitter)
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-200 p-8">
          <img src={mobileApp} alt="Mobile App" className="w-full h-auto object-cover" />
          <h2 className="text-2xl font-semibold text-center mt-4">Attire Scanner</h2>
          <p className="text-center mt-2">Scan your attire for the rest of your day!</p>
          <p className="text-center mt-2">Be at your right attire for each establishment!</p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full text-center py-4 bg-gray-100">
        <p className="text-sm text-gray-500">© Attire Scanner 2024 All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="mailto:AttireScanner@attrs.com" className="text-gray-500 hover:text-gray-700 flex items-center">
            <FaEnvelope className="mr-2" /> AttireScanner@attrs.com
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700 flex items-center">
            <FaFacebook className="mr-2" /> Attire Scanner
          </a>
          <a href="https://scanattire.org" className="text-gray-500 hover:text-gray-700 flex items-center">
            <FaGlobe className="mr-2" /> scanattire.org
          </a>
          <a href="https://twitter.com/Attire_Scanner" className="text-gray-500 hover:text-gray-700 flex items-center">
            <FaTwitter className="mr-2" /> @Attire_Scanner
          </a>
          <a href="https://instagram.com/AttireScanner" className="text-gray-500 hover:text-gray-700 flex items-center">
            <FaInstagram className="mr-2" /> @AttireScanner
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
