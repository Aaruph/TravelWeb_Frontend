import React from "react";
import Footer from "../../components/common/customer/Footer";
import Navbar from "../../components/common/customer/Navbar";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-25">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📜 Terms & Conditions</h2>

        <div className="bg-white p-6 shadow-md rounded-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">1. Introduction</h3>
          <p className="text-gray-800 mb-4">
            By using our website and services, you agree to comply with the following terms and conditions. Please read them carefully.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">2. Booking & Payments</h3>
          <p className="text-gray-800 mb-4">
            - All bookings must be made through our official website.<br />
            - Payments should be completed using the available payment methods.<br />
            - Prices are subject to change without prior notice.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">3. Cancellations & Refunds</h3>
          <p className="text-gray-800 mb-4">
            - Cancellations made 48 hours before departure are eligible for a partial refund.<br />
            - No refunds will be issued for last-minute cancellations.<br />
            - Processing fees may apply for all cancellations.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">4. Travel Documents</h3>
          <p className="text-gray-800 mb-4">
            - Customers must carry valid travel documents (passport, visa, ID, etc.).<br />
            - We are not responsible for any travel restrictions or entry denials.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">5. Liability & Responsibility</h3>
          <p className="text-gray-800 mb-4">
            - We are not liable for any delays, accidents, or losses during the trip.<br />
            - Customers are responsible for their own safety and belongings.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">6. Modifications</h3>
          <p className="text-gray-800 mb-4">
            - We reserve the right to modify these terms at any time.<br />
            - Continued use of the website constitutes acceptance of the updated terms.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">7. Contact Us</h3>
          <p className="text-gray-800">
            If you have any questions about these terms, please contact our support team at{" "}
            <a href="mailto:support@travelease.com" className="text-teal-800 hover:underline">support@travelease.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
