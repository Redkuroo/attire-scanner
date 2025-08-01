// NotificationContent.js
import React, { useState } from 'react';

const notificationsData = [
  { id: 1, message: 'Student wearing revealing clothing', time: 'on April 28, 2024 at 6:00 pm', read: false },
  { id: 2, message: 'Student Jayson Radores has a high temperature', time: 'on April 28, 2024 at 4:20 pm', read: false },
  { id: 3, message: 'Student wearing clothing with gang affiliations', time: 'on April 28, 2024 at 1:20 pm', read: false },
  { id: 4, message: 'Student wearing inappropriate footwear', time: 'on April 28, 2024 at 10:34 am', read: false },
  { id: 5, message: 'Student wearing clothing with rips', time: 'on April 28, 2024 at 10:34 am', read: false },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-black text-white flex justify-between items-center">
        <span className="text-xl font-bold">Notifications</span>
        <button onClick={markAllAsRead} className="text-red-500 text-lg">Mark all as read</button>
      </div>
      <div className="divide-y divide-gray-300">
        {notifications.map((notification) => (
          <div key={notification.id} className={`p-6 ${notification.read ? 'bg-gray-300' : 'hover:bg-gray-100'}`}>
            <p className="text-black font-semibold text-lg">{notification.message}</p>
            <p className="text-gray-500 text-md">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
