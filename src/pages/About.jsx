import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Shoe Categories' },
    { number: '100%', label: 'Kenyan Made' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We source only the highest quality materials and workmanship for every pair of shoes.'
    },
    {
      icon: '🇰🇪',
      title: 'Kenyan Pride',
      description: 'Supporting local manufacturers and showcasing authentic Kenyan craftsmanship.'
    },
    {
      icon: '💝',
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We provide excellent customer service and support.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and sustainable footwear.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CoolClads
            </h1>
            <p className="text-xl md:text-2xl text-kenyan-light-blue max-w-3xl mx-auto">
              A Kenyan brand for stylish, durable, and affordable shoes with quick delivery across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded with a passion for quality footwear and Kenyan pride, CoolClads has been 
                  serving customers across Kenya since 2019. We started as a small local business 
                  with a simple mission: to provide stylish, durable, and affordable shoes to every Kenyan.
                </p>
                <p>
                  Today, we've grown into one of Kenya's leading online shoe retailers, offering 
                  a wide range of footwear for men, women, and children. Our commitment to quality, 
                  customer service, and supporting local manufacturers has made us a trusted name 
                  in Kenyan footwear.
                </p>
                <p>
                  We believe that everyone deserves to step out in style, regardless of their budget. 
                  That's why we work directly with local manufacturers to bring you premium quality 
                  shoes at prices that won't break the bank.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-blue rounded-2xl p-8 text-white">
                <div className="text-6xl mb-4">👟</div>
                <h3 className="text-2xl font-bold mb-4">Quick Delivery</h3>
                <p className="text-kenyan-light-blue">
                  We deliver across all major cities in Kenya within 2-3 business days. 
                  Free delivery on orders over KSh 5,000!
                </p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our commitment and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-kenyan-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Step Up Your Style?
            </h2>
            <p className="text-xl text-kenyan-light-blue mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CoolClads for their footwear needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-kenyan-blue px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
