import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to send login data to API
  const loginUser = async (userData) => {
    const response = await axios.post("http://localhost:3000/api/v1/auth/login", userData);
    return response.data;
  };

  // useMutation for handling login
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      alert("Login successful! 🎉");
      console.log("User logged in:", data);
      localStorage.setItem("userId", data.userId); // Save the user ID
      // Save the token and role to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // Save the role

      // Check the user's role and redirect accordingly
      if (data.role === "admin") {
        window.location.href = "/admin/dashboard"; // Redirect to Admin Dashboard
      } else if (data.role === "customer") {
        navigate("/"); // Redirect to User Dashboard
      } else {
        navigate("/"); // Default redirect if no role matches
      }
    },
    onError: (error) => {
      alert("Login failed. Please check your credentials.");
      console.error("Login error:", error.response?.data || error.message);
    },
  });

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white relative">
      <div className="absolute top-5 left-5">
        <img src="/src/assets/images/logo.png" alt="Travel Logo" className="h-25" />
      </div>

      <div className="relative w-full max-w-5xl flex overflow-hidden rounded-xl bg-teal-900/80 backdrop-blur-lg border border-white/20 shadow-xl p-10">
        <div className="hidden w-1/2 lg:block">
          <img src="/src/assets/images/login2.jpg" alt="Travel Background" className="h-full w-full object-cover opacity-80 rounded-lg" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center px-10">
          <div className="flex justify-end">
            <button className="text-gray-200 hover:underline">Register</button>
          </div>

          <h2 className="text-3xl font-bold text-white">Welcome</h2>
          <p className="mb-6 text-gray-300">Login with Email</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email"
              placeholder="Enter Email or Username"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="text-sm text-teal-300 hover:underline">Forgot your password?</a>

            <button 
              type="submit" 
              className="w-full rounded-lg bg-teal-700 px-4 py-2 text-white hover:bg-teal-800"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Logging in..." : "LOGIN"}
            </button>
          </form>

          <div className="my-6 flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-gray-500"></span>
            <span className="text-gray-400">OR</span>
            <span className="h-px w-16 bg-gray-500"></span>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="rounded-full border border-gray-500 p-3 text-teal-300 hover:bg-teal-700"><FaGoogle size={20} /></button>
            <button className="rounded-full border border-gray-500 p-3 text-teal-300 hover:bg-teal-700"><FaFacebook size={20} /></button>
            <button className="rounded-full border border-gray-500 p-3 text-teal-300 hover:bg-teal-700"><FaApple size={20} /></button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-300">
            Don't have an account? <a href="/register" className="text-teal-300 hover:underline">Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
