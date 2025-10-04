import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import FloatingButtons from '../components/FloatingButtons';
import { loadImagesFromFolder, generatePrice, categories } from '../utils/imageLoader';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load featured products from different categories in specified order
    const featured = [];
    const categoryKeys = ['boots', 'canvas', 'kids-shoes', 'men-shoes', 'official-shoes', 'sneakers', 'women-shoes'];
    
    categoryKeys.forEach(categoryKey => {
      const category = categories[categoryKey];
      const images = loadImagesFromFolder(category.folder);
      
      // Take first 2 images from each category
      images.slice(0, 2).forEach(image => {
        featured.push({
          ...image,
          category: category.name,
          price: generatePrice()
        });
      });
    });
    
    setFeaturedProducts(featured);
  }, []);

  const scrollToShop = () => {
    const shopSection = document.getElementById('featured-products');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 gradient-blue">
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Step Up in Style with
              <span className="block text-yellow-300">CoolClads</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-kenyan-light-blue"
          >
            Proudly Kenyan | Affordable Quality Footwear
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <button
              onClick={scrollToShop}
              className="btn-primary text-lg px-8 py-4"
            >
              Shop Now
            </button>
            <div className="flex justify-center items-center space-x-4 text-kenyan-light-blue">
              <span>🇰🇪</span>
              <span>Quick Delivery within an hour Across Kenya</span>
              <span>🇰🇪</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-yellow-300 rounded-full opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-yellow-300 rounded-full opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-yellow-300 rounded-full opacity-50" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium footwear from top Kenyan brands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  image={product.src}
                  title={`${product.category} - ${product.name}`}
                  price={product.price}
                  category={product.category}
                  onProductClick={handleProductClick}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/shop" className="btn-secondary">
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose CoolClads?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best footwear experience in Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🇰🇪',
                title: 'Proudly Kenyan',
                description: 'Supporting local businesses and showcasing authentic Kenyan style'
              },
              {
                icon: '🚚',
                title: 'Quick Delivery',
                description: 'Fast and reliable delivery across all major cities in Kenya'
              },
              {
                icon: '💰',
                title: 'Affordable Quality',
                description: 'Premium quality shoes at prices that won\'t break the bank'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-xl bg-gradient-light hover:shadow-lg transition-all duration-300"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default Home;
