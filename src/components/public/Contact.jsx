import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Footer from "../../components/common/customer/Footer";
import Navbar from "../../components/common/customer/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-25">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Have any questions? Feel free to reach out to us. We're here to help
          you plan your perfect trip to Nepal!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-teal-800 text-2xl" />
              <p className="text-gray-700 text-lg">+977 9801234567</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-teal-800 text-2xl" />
              <p className="text-gray-700 text-lg">info@travelenepal.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-teal-800 text-2xl" />
              <p className="text-gray-700 text-lg">
                Kathmandu, Nepal - 44800
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
              <button
                type="submit"
                className="bg-teal-800 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Our Location
          </h2>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0512679363854!2d85.3164857752088!3d27.711539576134594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1906c94e7f0f%3A0xa2c0b6d1f3dd8bb9!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1708456141816!5m2!1sen!2snp"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
