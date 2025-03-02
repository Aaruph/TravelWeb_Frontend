import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../common/customer/Footer";
import Navbar from "../common/customer/Navbar";

const Myprofile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

        if (!userId) {
          console.error("User ID not found in local storage");
          return;
        }

        const response = await axios.get(`http://localhost:3000/api/v1/auth/getCustomer/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data.data); // Updated to use response.data.data
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-25 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Profile</h1>

        {loading ? (
          <p className="text-gray-800 text-lg">Loading profile...</p>
        ) : user ? (
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-center">
            <img
              src={user.image || "https://via.placeholder.com/150"}
              // alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-teal-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {user.fname} {user.lname}
            </h2>
            <p className="text-gray-800 mt-1">{user.email}</p>
            <p className="text-gray-800">{user.phone}</p>

            <button className="mt-6 bg-teal-800 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300">
              Edit Profile
            </button>
          </div>
        ) : (
          <p className="text-gray-800 text-lg">Failed to load profile.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Myprofile;
