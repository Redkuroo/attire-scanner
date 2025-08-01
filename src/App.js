// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Notification from './components/Notification';
import Calendar from './components/Calendar';
import FileUpload from './components/FileUpload';
import Upload from './components/Upload';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Scanner from './components/Scanner';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/scanner" element={<Scanner />} />


      </Routes>
    </Router>
  );
}

export default App;
