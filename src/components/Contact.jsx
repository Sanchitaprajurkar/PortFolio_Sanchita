import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Message sent! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="w-full bg-black py-16 text-white">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact Me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-8">
          {/* Contact Information Section */}
          <div className="bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4 text-blue-400" />
                <span className="text-gray-300">9022636092</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-blue-400" />
                <span className="text-gray-300">
                  rajurkarsanchita@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-4 text-blue-400" />
                <span className="text-gray-300">
                  Saee Hostel, Amruthdham, Nashik, Maharashtra
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 shadow-lg rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              Send Me a Message
            </h3>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
