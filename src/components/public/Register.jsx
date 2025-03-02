import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Function to send registration data to API
  const registerUser = async (userData) => {
    const response = await axios.post("http://localhost:3000/api/v1/auth/register", userData); // Replace with your backend API
    return response.data;
  };

  // useMutation for handling form submission
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      alert("Registration successful! 🎉");
      console.log("User registered:", data);
    },
    onError: (error) => {
      alert("Registration failed. Please try again.");
      console.error("Error:", error);
    },
  });
  

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match! ❌");
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white relative">
      {/* Logo */}
      <div className="absolute top-5 left-5">
        <img src="/src/assets/images/logo.png" alt="Travel Logo" className="h-25" />
      </div>

      {/* Form Container */}
      <div className="relative w-full max-w-5xl flex overflow-hidden rounded-xl bg-teal-900/80 backdrop-blur-lg border border-white/20 shadow-xl p-10">
        
        {/* Left Section - Image */}
        <div className="hidden w-1/2 lg:block">
          <img 
            src="/src/assets/images/login2.jpg" 
            alt="Travel Background" 
            className="h-full w-full object-cover opacity-80 rounded-lg"
          />
        </div>

        {/* Right Section - Register Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold text-white">CREATE AN ACCOUNT</h2>
          <p className="mb-4 text-gray-300">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-teal-300 hover:underline">Privacy Policy</a> and{" "}
            <a href="#" className="text-teal-300 hover:underline">Terms of Use</a>.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex space-x-4">
              <input 
                type="text"
                name="fname"
                placeholder="First Name"
                className="w-1/2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                value={formData.fname}
                onChange={handleChange}
                required
              />
              <input 
                type="text"
                name="lname"
                placeholder="Last Name"
                className="w-1/2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>

            <input 
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input 
              type="tel"
              name="phone"
              placeholder="phone Number"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input 
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <input 
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button 
              type="submit" 
              className="w-full rounded-lg bg-teal-700 px-4 py-2 text-white hover:bg-teal-800"
              disabled={mutation.isLoading} // Disable button when submitting
            >
              {mutation.isLoading ? "Registering..." : "CREATE ACCOUNT"}
            </button>
          </form>

          {/* OR Divider */}
          <div className="my-6 flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-gray-500"></span>
            <span className="text-gray-400">OR</span>
            <span className="h-px w-16 bg-gray-500"></span>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="rounded-full border border-gray-500 p-3 text-teal-300 hover:bg-teal-700">
              <FaGoogle size={20} />
            </button>
            <button className="rounded-full border border-gray-500 p-3 text-teal-300 hover:bg-teal-700">
              <FaFacebook size={20} />
            </button>
            <button className="rounded-full border border-gray-500 p-3 text-teal-300 hover:bg-teal-700">
              <FaApple size={20} />
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-300">
            Already have an account?{" "}
            <a href="/login" className="text-teal-300 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};  

export default Register;
