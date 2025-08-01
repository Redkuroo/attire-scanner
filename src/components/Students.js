import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaSearch, FaBars, FaCalendarAlt, FaChartBar, FaUpload, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Notification from './Notification';

const Students = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const entriesPerPage = 15; // Set the number of entries per page
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const allEntries = [
    { name: 'Angel Platicomoraniga', uniform: 'PE Uniform', date: 'April 25, 2024', status: 'Approved', percentage: '100%', height: '170 cm', weight: '72 kg', bodyTemperature: '24.9°C', attireStatus: { upper: true, lower: true, footwear: true, image: '/assets/img/uni.png' } },
    { name: 'John Albert Villamina', uniform: 'PE Uniform', date: 'April 25, 2024', status: 'Warning', percentage: '80%', height: '180 cm', weight: '80 kg', bodyTemperature: '25.1°C', attireStatus: { upper: true, lower: false, footwear: true, image: '/assets/img/status.png' } },
    { name: 'Ashley Alexa', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '160 cm', weight: '65 kg', bodyTemperature: '23.5°C', attireStatus: { upper: false, lower: true, footwear: false, image: '/assets/img/status.png' } },
    { name: 'JS Mella', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: '/assets/img/status.png' } },
    { name: 'Elijah Brown', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: '/assets/image/neutral.jpg' } },
    { name: 'Olivia Johnson', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: '/assets/image/neutral.jpg' } },
    { name: 'Emma Garcia', uniform: 'PE Uniform', date: 'April 25, 2024', status: 'Approved', percentage: '100%', height: '170 cm', weight: '72 kg', bodyTemperature: '24.9°C', attireStatus: { upper: true, lower: true, footwear: true, image: './image/image7.jpg' } },
    { name: 'Michael Smith', uniform: 'PE Uniform', date: 'April 25, 2024', status: 'Warning', percentage: '80%', height: '180 cm', weight: '80 kg', bodyTemperature: '25.1°C', attireStatus: { upper: true, lower: false, footwear: true, image: './image/image8.jpg' } },
    { name: 'Micahel Jordan', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '160 cm', weight: '65 kg', bodyTemperature: '23.5°C', attireStatus: { upper: false, lower: true, footwear: false, image: './image/image9.jpg' } },
    { name: 'Anthony Edwards', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image10.jpg' } },
    { name: 'Anthony Towns', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image11.jpg' } },
    { name: 'Luka Doncic', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image12.jpg' } },
    { name: 'Kyrie Irving', uniform: 'PE Uniform', date: 'April 25, 2024', status: 'Approved', percentage: '100%', height: '170 cm', weight: '72 kg', bodyTemperature: '24.9°C', attireStatus: { upper: true, lower: true, footwear: true, image: './image/image13.jpg' } },
    { name: 'Rudy Gobert', uniform: 'PE Uniform', date: 'April 25, 2024', status: 'Warning', percentage: '80%', height: '180 cm', weight: '80 kg', bodyTemperature: '25.1°C', attireStatus: { upper: true, lower: false, footwear: true, image: './image/image14.jpg' } },
    { name: 'PJ Washngton', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '160 cm', weight: '65 kg', bodyTemperature: '23.5°C', attireStatus: { upper: false, lower: true, footwear: false, image: './image/image15.jpg' } },
    { name: 'Riane Billera', uniform: 'Faculy Uniform', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image16.jpg' } },
    { name: 'Lorence Maranga', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image17.jpg' } },
    { name: 'Ok Kokey', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image18.jpg' } },
    { name: 'Owen Pilongo', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image19.jpg' } },
    { name: 'Lebron James', uniform: 'Civilian Attire', date: 'April 25, 2024', status: 'Not Approved', percentage: '60%', height: '175 cm', weight: '70 kg', bodyTemperature: '24.7°C', attireStatus: { upper: false, lower: false, footwear: true, image: './image/image20.jpg' } },
    // Add more entries here as needed
  ];

  const totalPages = Math.ceil(allEntries.length / entriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowClick = (entry) => {
    setSelectedEntry(entry);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const selectedEntries = allEntries.slice(startIndex, startIndex + entriesPerPage);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-width duration-300 ${isExpanded ? 'w-1/6' : 'w-16'} bg-gray-800 text-white flex-col p-4 min-h-screen`}>
        <div className="flex justify-between items-center mb-8">
          {isExpanded && <div className="text-2xl font-bold">Students</div>}
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FaBars className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/students" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaUserCircle className="inline-block mr-2"/>Students</span>}
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaChartBar className="inline-block mr-2"/>Dashboard</span>}
          </Link>
          <Link to="/calendar" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaCalendarAlt className="inline-block mr-2"/>Calendar</span>}
          </Link>
          <Link to="/fileupload" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaUpload className="inline-block mr-2"/>Upload</span>}
          </Link>
          <Link to="/scanner" className="text-gray-300 hover:bg-gray-700 p-2 rounded">
            {isExpanded && <span><FaPlayCircle className="inline-block mr-2" />Live</span>}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between mb-8">
          <div className="relative w-1/2">
            <FaSearch className="absolute top-2 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-gray-400"
            />
          </div>
          <div className="flex items-center space-x-4">
       
              <button onClick={toggleModal} className="relative p-2 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring">
                <FaBell className="text-gray-500" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
              </button>
           
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 bg-gray-200 p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">List of Entries</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Uniform</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedEntries.map((entry, index) => (
                    <tr key={index} onClick={() => handleRowClick(entry)} className="cursor-pointer hover:bg-gray-100">
                      <td className="py-2 px-4 border-b">{entry.name}</td>
                      <td className="py-2 px-4 border-b">{entry.uniform}</td>
                      <td className="py-2 px-4 border-b">{entry.date}</td>
                      <td className={`py-2 px-4 border-b ${entry.status === 'Approved' ? 'text-green-500' : entry.status === 'Warning' ? 'text-yellow-500' : 'text-red-500'}`}>{entry.status}</td>
                      <td className="py-2 px-4 border-b">{entry.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={handlePrevPage} className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={currentPage === 1}>Previous</button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            {selectedEntry ? (
              <>
                <h2 className="text-white font-bold mb-4">{selectedEntry.name}</h2>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-white">Height</p>
                    <p className="text-white">{selectedEntry.height}</p>
                  </div>
                  <div>
                    <p className="text-white">Weight</p>
                    <p className="text-white">{selectedEntry.weight}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-white">Body Temperature</p>
                  <p className="text-white">{selectedEntry.bodyTemperature}</p>
                  <p className="text-green-500">Healthy</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="text-white">Scanned Attire</p>
                  <p className="text-gray-500">Last checked 2 hours ago</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-bold">{selectedEntry.uniform}</p>
                  <div className="flex justify-around mt-4">
                    <div className="text-center">
                      <p className="text-gray-500">Upper</p>
                      <p className={selectedEntry.attireStatus.upper ? "text-green-500" : "text-red-500"}>{selectedEntry.attireStatus.upper ? "✓" : "✗"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Lower</p>
                      <p className={selectedEntry.attireStatus.lower ? "text-green-500" : "text-red-500"}>{selectedEntry.attireStatus.lower ? "✓" : "✗"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Footwear</p>
                      <p className={selectedEntry.attireStatus.footwear ? "text-green-500" : "text-red-500"}>{selectedEntry.attireStatus.footwear ? "✓" : "✗"}</p>
                    </div>
                  </div>
                </div>
                {selectedEntry.attireStatus.image && (
                  <div className="mb-4">
                    <p className="text-white"></p>
                    <img src={selectedEntry.attireStatus.image} alt={`${selectedEntry.name}'s attire`} className="rounded-lg" />
                  </div>
                )}
              </>
            ) : (
              <p className="text-white">Select an entry to see details</p>
            )}
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onClose={toggleModal}>
        <Notification />
      </Modal>
    </div>
    
  );
};

export default Students;
