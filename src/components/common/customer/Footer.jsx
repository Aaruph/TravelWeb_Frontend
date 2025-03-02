import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white-500">TravelWeb</h2>
          <p className="mt-2 text-gray-400">Your Perfect Travel Partner.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link to="/package" className="hover:text-teal-400">Packages</Link></li>
            <li><Link to="/reviews" className="hover:text-teal-400">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-teal-400">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-teal-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-teal-400">Privacy Policy</Link></li>
            <li><Link to="/aboutus" className="hover:text-teal-400">About Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: support@travelease.com</p>
          <p className="text-gray-400">Phone: +1 (123) 456-7890</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-teal-400"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-teal-400"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-teal-400"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-teal-400"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
