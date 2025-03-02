import React from "react";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigation function
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper relative z-[10]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row items-center justify-between px-20 py-20 bg-gray-300">
          {/* Text Section */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Discover Your Next Adventure
            </h1>
            <p className="text-lg text-gray-800 mb-6">
            Explore breathtaking destinations and plan your dream vacation with ease.
            </p>
            <button onClick={() => navigate("/packages")} className="bg-teal-800 text-white py-3 px-8 text-xl rounded-lg hover:bg-teal-600 transition duration-300">
            Explore Packages
            </button>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img src="/src/assets/images/login2.jpg" alt="Healthy" className="w-full max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row items-center justify-between px-20 py-20 bg-gray-300">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hassle-Free Travel Planning
            </h1>
            <p className="text-lg text-gray-800 mb-6">
            Book flights, hotels, and activities in just a few clicks.
            </p>
            <button onClick={() => navigate("/order")} className="bg-teal-800 text-white py-3 px-8 text-xl rounded-lg hover:bg-teal-600 transition duration-300">
            Start Booking
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/src/assets/images/login2.jpg" alt="Fresh" className="w-full max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="flex flex-col md:flex-row items-center justify-between px-20 py-20 bg-gray-300">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Travel with Confidence
            </h1>
            <p className="text-lg text-gray-800 mb-6">
            Get 24/7 support and seamless trip management.
            </p>
            <button onClick={() => navigate("/contact")} className="bg-teal-800 text-white py-3 px-8 text-xl rounded-lg hover:bg-teal-600 transition duration-300">
            Contact Us
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/src/assets/images/login2.jpg" alt="Quick" className="w-full max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;