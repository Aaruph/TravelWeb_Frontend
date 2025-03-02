import React from "react";
import Footer from "../../components/common/customer/Footer";
import Navbar from "../../components/common/customer/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-25">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Discover the beauty of Nepal with us! We specialize in crafting
          unforgettable travel experiences across the Himalayas and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/src/assets/images/login2.jpg"
              alt="Travel in Nepal"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>✅ Local expertise with deep knowledge of Nepal</li>
              <li>✅ Customized travel packages to suit your needs</li>
              <li>✅ Experienced guides and hassle-free booking</li>
              <li>✅ Commitment to responsible tourism</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our goal is to provide travelers with authentic, safe, and
            life-enriching experiences in Nepal. Whether it’s trekking in the
            Himalayas, exploring cultural heritage sites, or enjoying adventure
            sports, we ensure an unforgettable journey.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
