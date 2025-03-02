import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Footer from "../../components/common/customer/Footer";
import Navbar from "../../components/common/customer/Navbar";

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      rating: 5,
      comment: "Amazing experience! The trip to Everest Base Camp was unforgettable.",
    },
    {
      id: 2,
      name: "Sita Rana",
      rating: 4.5,
      comment: "Great service and well-organized tours. Highly recommended!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Customer Reviews
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          See what our travelers say about their experiences in Nepal!
        </p>

        {/* Review List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
              <div className="flex items-center my-2">
                {Array.from({ length: 5 }, (_, index) => {
                  if (index + 1 <= review.rating) {
                    return <FaStar key={index} className="text-yellow-500 text-lg" />;
                  } else if (index + 0.5 === review.rating) {
                    return <FaStarHalfAlt key={index} className="text-yellow-500 text-lg" />;
                  } else {
                    return <FaRegStar key={index} className="text-gray-400 text-lg" />;
                  }
                })}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
            />
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseFloat(e.target.value) })}
              required
            >
              <option value="0">Select Rating</option>
              <option value="5">★★★★★ - Excellent</option>
              <option value="4.5">★★★★½ - Very Good</option>
              <option value="4">★★★★ - Good</option>
              <option value="3.5">★★★½ - Decent</option>
              <option value="3">★★★ - Average</option>
              <option value="2">★★ - Poor</option>
              <option value="1">★ - Terrible</option>
            </select>
            <textarea
              placeholder="Your Review"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-teal-800 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
