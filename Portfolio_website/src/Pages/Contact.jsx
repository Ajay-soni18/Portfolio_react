import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
              Contact Information
            </h3>

            <div className="flex items-center space-x-4">
              <Mail
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <a
                  href="mailto:ajaysoni729696@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  ajaysoni729696@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Phone
                </h4>
                <a
                  href="tel:+91 7296968841"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  +91 7296968841
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin
                className="text-indigo-600 dark:text-indigo-400"
                size={24}
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Jaipur , India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
