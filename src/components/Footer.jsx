import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'WhatsApp', icon: '💬', url: '#' },
  ];

  return (
    <footer className="gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">CoolClads</h3>
              <p className="text-kenyan-light-blue max-w-md">
                Proudly Kenyan brand offering stylish, durable, and affordable footwear 
                with quick delivery across Kenya.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-kenyan-light-blue hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/shop" className="text-kenyan-light-blue hover:text-white transition-colors">Shop</Link></li>
                <li><Link to="/about" className="text-kenyan-light-blue hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-kenyan-light-blue hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-kenyan-light-blue">
                <p>📍 Thika, Kenya</p>
                <p>☎️ +254 707 747 433</p>
                <p>✉️ support@coolclads.com</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-kenyan-light-blue border-opacity-30 mt-8 pt-8 text-center text-kenyan-light-blue"
        >
          <p>&copy; 2025 CoolClads. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
