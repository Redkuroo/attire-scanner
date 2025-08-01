import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { FaBell, FaUserCircle, FaBars, FaCalendarAlt, FaChartBar, FaUpload, FaPlayCircle } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Modal from './Modal';
import Notification from './Notification';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [students, setStudents] = useState([]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    setStudents(studentsData[month]);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Number of students who violated the dress code in 2024',
        data: [230, 50, 75, 100, 125, 50, 30, 20, 50, 75, 80, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const statistics = {
    Jan: { scanned: 1200, approved: 11000, warnings: 1300, violations: 100 },
    Feb: { scanned: 1400, approved: 11500, warnings: 1250, violations: 110 },
    Mar: { scanned: 1300, approved: 11200, warnings: 1280, violations: 105 },
    Apr: { scanned: 1350, approved: 11800, warnings: 1290, violations: 102 },
    May: { scanned: 1415, approved: 12121, warnings: 1312, violations: 103 },
    Jun: { scanned: 1200, approved: 11000, warnings: 1300, violations: 100 },
    Jul: { scanned: 1250, approved: 11300, warnings: 1270, violations: 101 },
    Aug: { scanned: 1230, approved: 11150, warnings: 1260, violations: 100 },
    Sep: { scanned: 1220, approved: 11200, warnings: 1250, violations: 98 },
    Oct: { scanned: 1260, approved: 11400, warnings: 1240, violations: 99 },
    Nov: { scanned: 1270, approved: 11500, warnings: 1230, violations: 101 },
    Dec: { scanned: 1280, approved: 11600, warnings: 1220, violations: 102 },
  };

const studentsData = {
  Jan: ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'David Lee', 'Eva Martinez', 'Frank Wilson', 'Grace Taylor', 'Henry Harris', 'Ivy Anderson', 'Jack Thompson'],
  Feb: ['Liam Roberts', 'Olivia Clark', 'Noah Martinez', 'Ava Turner', 'William Scott', 'Isabella Walker', 'James King', 'Sophia Green', 'Benjamin Baker', 'Charlotte Hill'],
  Mar: ['Mia Nelson', 'Ethan Cooper', 'Amelia Rivera', 'Lucas Reed', 'Harper Stewart', 'Alexander Ward', 'Evelyn Butler', 'Logan Diaz', 'Avery Coleman', 'Mason Wright'],
  Apr: ['Emily Phillips', 'Michael Evans', 'Abigail Perry', 'Daniel Carter', 'Ella Foster', 'Matthew Price', 'Elizabeth Brooks', 'Ryan Bailey', 'Sofia Murphy', 'Jackson Hayes'],
  May: ['Aiden Richardson', 'Grace Diaz', 'Madison Powell', 'Lucy Kelly', 'Elijah Mitchell', 'Scarlett Long', 'Nathan Rivera', 'Chloe Scott', 'Gabriel Cooper', 'Zoe Ross'],
  Jun: ['Lily Morgan', 'Connor Hughes', 'Aria Patterson', 'Jacob Gonzales', 'Emma Stewart', 'Logan Ramirez', 'Avery Sanders', 'Carter Price', 'Mia Collins', 'Jayden Carter'],
  Jul: ['Hannah Wood', 'David Reed', 'Victoria Cook', 'Christopher Gonzalez', 'Samantha Bell', 'Jackson Howard', 'Audrey Coleman', 'Luke Sanders', 'Penelope Hill', 'Eli Torres'],
  Aug: ['Madelyn Murphy', 'Owen Baker', 'Riley Stewart', 'Levi Foster', 'Addison Mitchell', 'Wyatt Rivera', 'Natalie Edwards', 'Julian Ward', 'Brooklyn Gray', 'Isaac Martinez'],
  Sep: ['Hailey Turner', 'Caleb Russell', 'Eleanor Long', 'Gabriel Flores', 'Avery Butler', 'Eliana Martinez', 'Isaiah Hayes', 'Layla Morgan', 'Landon Sanchez', 'Zoey Baker'],
  Oct: ['Peyton Reed', 'Samuel Rivera', 'Hazel Simmons', 'Andrew Torres', 'Leah Perry', 'Luke King', 'Mila Flores', 'Henry Nelson', 'Nova Ramirez', 'Hudson Wood'],
  Nov: ['Aurora Hughes', 'Grayson Powell', 'Nora Ward', 'Jaxon Bailey', 'Violet Hill', 'Daniel Garcia', 'Bella Clark', 'Maxwell Brooks', 'Stella Lopez', 'Ezra Wright'],
  Dec: ['Emilia Adams', 'Gabriel Bennett', 'Alice Roberts', 'Christian Collins', 'Zoey Coleman', 'Xavier Hughes', 'Skylar Cooper', 'Oscar Ward', 'Ruby Mitchell', 'Micah Patterson']
};


  const { scanned, approved, warnings, violations } = statistics[selectedMonth];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-width duration-300 ${isExpanded ? 'w-1/6' : 'w-16'} bg-gray-800 text-white flex flex-col p-4 min-h-screen`}>
        <div className="flex justify-between items-center mb-8">
          {isExpanded && <div className="text-2xl font-bold">Dashboard</div>}
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FaBars className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
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
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-1/2"></div>
          <div className="flex items-center space-x-4">
     
          <button onClick={toggleModal} className="relative p-2 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring">
                <FaBell className="text-gray-500" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
              </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-200 shadow rounded-lg p-6">
            <div className="text-gray-500">Total Scanned</div>
            <div className="text-2xl font-bold">{scanned}</div>
            <div className="text-green-500">↑ 1.2% from last month</div>
          </div>
          <div className="bg-gray-200 shadow rounded-lg p-6">
            <div className="text-gray-500">Total Approved</div>
            <div className="text-2xl font-bold">{approved}</div>
            <div className="text-red-500">↓ 10% decrease from last month</div>
          </div>
          <div className="bg-gray-200 shadow rounded-lg p-6">
            <div className="text-gray-500">Total Warnings</div>
            <div className="text-2xl font-bold">{warnings}</div>
            <div className="text-green-500">↑ 8% increase from last month</div>
          </div>
          <div className="bg-gray-200 shadow rounded-lg p-6">
            <div className="text-gray-500">Total Violations</div>
            <div className="text-2xl font-bold">{violations}</div>
            <div className="text-green-500">↑ 2% increase from last month</div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-center mb-4">
            {data.labels.map((month) => (
              <button
                key={month}
                onClick={() => handleMonthClick(month)}
                className={`mx-2 p-2 rounded ${selectedMonth === month ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {month}
              </button>
            ))}
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Bar data={data} />
          </div>
        </div>

        {students.length > 0 && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Students who violated the dress code in {selectedMonth}</h3>
            <ul className="list-disc pl-5">
              {students.map((student, index) => (
                <li key={index} className="text-gray-700">{student}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Modal show={isModalOpen} onClose={toggleModal}>
        <Notification />
      </Modal>
    </div>
    
  );
};

export default Dashboard;
