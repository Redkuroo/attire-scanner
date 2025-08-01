import React, { useState, useRef } from 'react';
import { FaBell, FaUserCircle, FaBars, FaCalendarAlt, FaChartBar, FaUpload, FaPlayCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('Selected file:', file);

      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        console.log('File content:', fileContent);
      };
      reader.readAsText(file);
    }
  };

  const handleManualEntryClick = () => {
    navigate('/upload');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <div className={`transition-width duration-300 ${isExpanded ? 'w-1/6' : 'w-16'} h-screen bg-gray-800 text-white flex flex-col p-4`}>
      <div className="flex justify-between items-center mb-8">
        {isExpanded && <div className="text-2xl font-bold">Dashboard</div>}
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FaBars className="text-white" />
        </button>
      </div>
      <nav className="flex flex-col space-y-4 max-h-400px">
        <Link to="/students" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
          {isExpanded && <span><FaUserCircle className="inline-block mr-2" />Students</span>}
        </Link>
        <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
          {isExpanded && <span><FaChartBar className="inline-block mr-2"/>Dashboard</span>}
        </Link>
        <Link to="/calendar" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
          {isExpanded && <span><FaCalendarAlt className="inline-block mr-2" />Calendar</span>}
        </Link>
        <Link to="/fileupload" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
          {isExpanded && <span><FaUpload className="inline-block mr-2" />Upload</span>}
        </Link>
        <Link to="/scanner" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
        {isExpanded && <span><FaPlayCircle className="inline-block mr-2" />Live</span>}
      </Link>
      </nav>
    </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-1/2"></div>
  
          <div className="flex items-center space-x-4">
            <Link to="/notification">
              <button className="relative p-2 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring">
                <FaBell className="text-gray-500" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
              </button>
            </Link>
         
    
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg p-12 max-w-2xl w-full text-center">
            <div className="mb-6">
              <svg
                className="mx-auto h-28 w-28 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16v-4a4 4 0 018 0v4m5 0v-5a7 7 0 00-14 0v5M5 16h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Drag and Drop Your File Here!</h2>
            <p className="text-gray-600 mb-8 text-lg">Please upload PDF, DOCX, DOC or XLSX files. A file maximum size should be 5 MB</p>
            <div className="flex justify-center space-x-6">
              <button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg"
                onClick={handleFileUploadClick}
              >
                Upload a File
              </button>
              <button
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-lg"
                onClick={handleManualEntryClick}
              >
                Enter Data Manually
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.xlsx"
            />
            {selectedFile && (
              <div className="mt-6">
                <h3 className="text-xl font-medium">Selected File:</h3>
                <p className="text-lg">{selectedFile.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
