import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/common/customer/Footer";
import Navbar from "../../components/common/customer/Navbar";

const Checkout = () => {
  const { id } = useParams(); // Get package ID from URL
  const [packageData, setPackageData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tickets: 1,
    pickupLocation: "",
    paymentMethod: "khalti",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/package/${id}`);
        setPackageData(res.data);
      } catch (err) {
        setError("Failed to load package details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Khalti Payment Configuration
  const khaltiConfig = {
    publicKey: "test_public_key_1234567890", // Replace with your actual public key
    productIdentity: id,
    productName: packageData?.title || "Travel Package",
    productUrl: window.location.href,
    eventHandler: {
      onSuccess(payload) {
        console.log("Payment Success:", payload);

        // Save booking details after payment success
        axios
          .post("http://localhost:3000/api/v1/bookings", {
            packageId: id,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            tickets: formData.tickets,
            pickupLocation: formData.pickupLocation,
            paymentMethod: "khalti",
            paymentId: payload.idx, // Save Khalti transaction ID
          })
          .then(() => {
            alert("Booking Successful! 🚀");
          })
          .catch(() => {
            alert("Booking saved failed, but payment was successful.");
          });
      },
      onError(error) {
        console.log("Payment Error:", error);
        alert("Payment Failed. Please try again.");
      },
      onClose() {
        console.log("Khalti popup closed.");
      },
    },
    paymentPreference: ["KHALTI"],
  };

  const khaltiCheckout = new KhaltiCheckout(khaltiConfig);

  const handlePayment = () => {
    const totalAmount = packageData.price * formData.tickets * 100; // Convert to paisa
    khaltiCheckout.show({ amount: totalAmount });
  };

  if (loading) return <p className="text-center py-10 text-lg">Loading checkout details...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Checkout</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Package Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📌 Booking Summary</h3>
            <div className="flex flex-col items-center">
              <img 
                src={`http://localhost:3000/uploads/${packageData.image}`} 
                alt={packageData.title} 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="mt-4 w-full">
                <h4 className="text-xl font-semibold text-gray-700">{packageData.title}</h4>
                <p className="text-gray-500">{packageData.duration}</p>
                <p className="text-gray-800 font-bold mt-2 text-lg">₹{packageData.price} / person</p>
                <p className="text-gray-600 mt-2">{packageData.description}</p>

                {/* Available Dates */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-700">📅 Available Dates</h4>
                  <ul className="text-gray-500">
                    {packageData.availableDates.map((date, index) => (
                      <li key={index}>🗓 {new Date(date).toDateString()}</li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary Section */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700">🛤 Itinerary</h4>
                  <ul className="space-y-2 mt-2">
                    {Array.isArray(packageData.itinerary) && packageData.itinerary.length > 0 ? (
                      packageData.itinerary.map((day, index) => {
                        let dayData = typeof day === "string" ? JSON.parse(day) : day;

                        return (
                          <li key={index} className="border-l-4 border-teal-500 pl-4 py-2">
                            <h5 className="text-teal-700 font-semibold">Day {index + 1}: {dayData.title || `Day ${index + 1}`}</h5>
                            <p className="text-gray-600">{dayData.description || dayData}</p>
                          </li>
                        );
                      })
                    ) : (
                      <p className="text-gray-500">No itinerary available for this package.</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">📝 Enter Details</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="number"
                name="tickets"
                placeholder="Number of Tickets"
                value={formData.tickets}
                min="1"
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-400"
                required
              />

              {/* Payment Button */}
              <button
                type="button"
                onClick={handlePayment}
                className="w-full bg-teal-800 text-white py-3 rounded-lg text-lg hover:bg-teal-700 transition duration-300"
              >
                Pay with Khalti
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
