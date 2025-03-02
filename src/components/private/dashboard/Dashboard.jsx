import React from "react";
import { FaBook, FaCalendarAlt, FaDollarSign, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  // Mock Data (Replace with API Fetch)
  const stats = [
    { id: 1, title: "Total Users", value: "1,240", icon: <FaUsers size={24} />, color: "bg-teal-500" },
    { id: 2, title: "Total Packages", value: "58", icon: <FaBook size={24} />, color: "bg-green-500" },
    { id: 3, title: "Total Bookings", value: "3,542", icon: <FaCalendarAlt size={24} />, color: "bg-yellow-500" },
    { id: 4, title: "Total Revenue", value: "$125,430", icon: <FaDollarSign size={24} />, color: "bg-red-500" },
  ];

  const recentBookings = [
    { id: 1, user: "John Doe", package: "Paris Getaway", status: "Confirmed", date: "2025-02-17" },
    { id: 2, user: "Jane Smith", package: "Thailand Adventure", status: "Pending", date: "2025-02-16" },
    { id: 3, user: "Michael Lee", package: "Bali Retreat", status: "Canceled", date: "2025-02-15" },
  ];

  return (
    <div className="space-y-6">
      {/* Dashboard Title */}
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className={`p-4 rounded-lg text-white shadow-md flex items-center gap-4 ${stat.color}`}>
            {/* Match background color of icon to container */}
            <div className={`p-3 ${stat.color} rounded-full`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{stat.value}</h3>
              <p className="text-sm opacity-80">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-700">
              <th className="py-2">User</th>
              <th className="py-2">Package</th>
              <th className="py-2">Status</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking) => (
              <tr key={booking.id} className="border-b hover:bg-gray-100">
                <td className="py-2">{booking.user}</td>
                <td className="py-2">{booking.package}</td>
                <td className={`py-2 font-semibold ${booking.status === "Confirmed" ? "text-green-500" : booking.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                  {booking.status}
                </td>
                <td className="py-2">{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
