import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Map configuration
  const mapConfig = {
    apiKey: 'AIzaSyB0VSLwsKTXwS31TbJKdjzApXwDfMpdzAI',
    center: { lat: -1.0444, lng: 37.0829 }, // Thika, Kenya coordinates
    zoom: 15,
    markerTitle: 'CoolClads - Thika, Kenya',
    infoWindowContent: `
      <div style="padding: 10px; font-family: 'Poppins', sans-serif;">
        <h3 style="margin: 0 0 8px 0; color: #0066CC; font-weight: bold;">CoolClads</h3>
        <p style="margin: 0 0 4px 0; color: #333;">📍 Thika, Kenya</p>
        <p style="margin: 0; color: #666; font-size: 14px;">Kenya's Premier Shoe Store</p>
        <p style="margin: 8px 0 0 0; color: #0066CC; font-size: 12px;">☎️ +254 707 747 433</p>
      </div>
    `
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success message (no backend integration)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: 'Thika, Kenya',
      description: 'Serving customers across Kenya'
    },
    {
      icon: '☎️',
      title: 'Phone',
      details: '+254 707 747 433',
      description: 'Mon-Fri 8AM-6PM'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'support@coolclads.com',
      description: 'We reply within 24 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-kenyan-light-blue max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you find the perfect pair of shoes!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kenyan-blue focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kenyan-blue focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kenyan-blue focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kenyan-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-kenyan-blue text-white py-4 rounded-lg font-medium text-lg hover:bg-kenyan-dark-blue transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We'd love to hear from you! Whether you have questions about our products, 
                  need help with sizing, or want to place a custom order, our team is here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-kenyan-blue font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      How long does delivery take?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We deliver within 2-3 business days to major cities in Kenya.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Do you offer returns?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes! We offer 30-day returns for unworn shoes in original packaging.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      What payment methods do you accept?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We accept M-Pesa, Airtel Money, bank transfers, and cash on delivery.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Visit Our Store
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Thika, Kenya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GoogleMap {...mapConfig} />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
