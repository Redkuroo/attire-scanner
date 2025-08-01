import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaBars, FaCalendarAlt, FaChartBar, FaUpload, FaLive, FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';

const Sidebar = ({ isExpanded, toggleSidebar }) => (
  <div className={`transition-width duration-300 ${isExpanded ? 'w-1/6' : 'w-16'} h-screen bg-gray-800 text-white flex flex-col p-4`}>
    <div className="flex justify-between items-center mb-8">
      {isExpanded && <div className="text-2xl font-bold">Calendar</div>}
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
);

const Header = ({ handleAddEvent }) => (
  <div className="flex justify-between mb-8">
    <div className="relative w-1/2"></div>
    <div className="flex items-center space-x-4">
      <button onClick={handleAddEvent} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Add New Event</button>
      <Link to="/notification">
        <button className="relative p-2 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring">
          <FaBell className="text-gray-500" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
        </button>
      </Link>
    </div>
  </div>
);

const Calendar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([
    { date: new Date(2024, 4, 1), title: 'PE Day' },
    { date: new Date(2024, 4, 9), title: 'CET Day' },
    { date: new Date(2024, 4, 18), title: 'SBME Day' },
  ]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleAddEvent = () => {
    const eventDate = prompt('Enter event date (YYYY-MM-DD):');
    const eventTitle = prompt('Enter event title:');
    if (eventDate && eventTitle) {
      setEvents([...events, { date: new Date(eventDate), title: eventTitle }]);
    }
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex justify-between items-center my-4">
        <button onClick={prevMonth} className="focus:outline-none">
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <span className="text-lg font-bold">{format(currentMonth, dateFormat)}</span>
        <button onClick={nextMonth} className="focus:outline-none">
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eeee";
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-bold text-gray-600" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const eventsForDay = events.filter(event => isSameDay(event.date, cloneDay));

        days.push(
          <div
            className={`border border-gray-300 p-2 rounded-lg text-center cursor-pointer ${!isSameMonth(day, monthStart)
              ? "bg-gray-100 text-gray-500"
              : "bg-white text-gray-700"} ${isSameDay(day, new Date()) ? "bg-blue-200" : ""}`}
            key={day}
          >
            <span>{formattedDate}</span>
            {eventsForDay.map((event, index) => (
              <div key={index} className="text-xs bg-blue-500 text-white mt-1 rounded">{event.title}</div>
            ))}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-8">
        <Header handleAddEvent={handleAddEvent} />
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-2 bg-gray-800 text-white flex justify-between items-center">
            <h2 className="text-2xl font-bold">Calendar</h2>
          </div>
          <div className="p-4">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
