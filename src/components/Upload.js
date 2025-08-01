import React, { useState, useRef } from 'react';
import { FaBell, FaUserCircle, FaBars, FaCalendarAlt, FaChartBar, FaUpload, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Upload = () => {
  const [name, setName] = useState('CET Departmental Shirt');
  const [attireType, setAttireType] = useState('Accepted');
  const [date, setDate] = useState({ month: 'December', day: '20', year: '2023' });
  const [uploader, setUploader] = useState('Owen Pilongo');
  const fileInputRef = useRef(null);
  const [ setSelectedFile] = useState(null);

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-width duration-300 ${isExpanded ? 'w-1/6' : 'w-16'} h-screen bg-gray-800 text-white flex flex-col p-4`}>
        <div className="flex justify-between items-center mb-8">
          {isExpanded && <div className="text-2xl font-bold">Students</div>}
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FaBars className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/students" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaUserCircle className="inline-block mr-2" />Students</span>}
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaChartBar className="inline-block mr-2" />Dashboard</span>}
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
      <div className="flex-1 p-8">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold">Upload</h1>
          <button className="relative p-2 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring">
            <FaBell className="text-gray-500" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
          </button>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg flex space-x-8">
          <div className="flex-1">
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Name*</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400 text-lg"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Attire Type*</label>
                <select
                  value={attireType}
                  onChange={(e) => setAttireType(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400 text-lg"
                >
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Date Added*</label>
                <div className="grid grid-cols-3 gap-4">
                  <select
                    value={date.month}
                    onChange={(e) => setDate({ ...date, month: e.target.value })}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400 text-lg"
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <select
                    value={date.day}
                    onChange={(e) => setDate({ ...date, day: e.target.value })}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400 text-lg"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select
                    value={date.year}
                    onChange={(e) => setDate({ ...date, year: e.target.value })}
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400 text-lg"
                  >
                    {Array.from({ length: 5 }, (_, i) => 2023 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Name of Uploader*</label>
                <input
                  type="text"
                  value={uploader}
                  onChange={(e) => setUploader(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-gray-400 text-lg"
                />
              </div>
              <div className="flex space-x-4">
                <button type="button" className="bg-black text-white px-6 py-3 rounded-md text-lg">CREATE</button>
                <button type="button" className="bg-gray-200 text-black px-6 py-3 rounded-md text-lg">DISCARD CHANGES</button>
                <button type="button" className="bg-gray-200 text-black px-6 py-3 rounded-md text-lg">CANCEL</button>
              </div>
            </form>
          </div>
          <div className="w-1/3">
            <div className="border rounded-lg p-6">
              <img src="https://via.placeholder.com/200x200" alt="Uploaded file" className="w-full mb-6" />
              <button
                className="w-full bg-gray-200 text-black px-6 py-3 rounded-md flex items-center justify-center text-lg"
                onClick={handleFileUploadClick}
              >
                <FaUpload className="mr-2" /> REPLACE ANOTHER FILE
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
