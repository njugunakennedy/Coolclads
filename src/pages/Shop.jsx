import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import FloatingButtons from '../components/FloatingButtons';
import { loadImagesFromFolder, generatePrice, categories } from '../utils/imageLoader';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    const allProducts = [];
    
    Object.keys(categories).forEach(categoryKey => {
      const category = categories[categoryKey];
      const images = loadImagesFromFolder(category.folder);
      
      images.forEach(image => {
        allProducts.push({
          ...image,
          category: category.name,
          categoryKey,
          price: generatePrice()
        });
      });
    });
    
    setProducts(allProducts);
    setLoading(false);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.categoryKey === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const categoryTabs = [
    { key: 'all', name: 'All Products', count: products.length },
    ...Object.keys(categories).map(key => ({
      key,
      name: categories[key].name,
      count: products.filter(p => p.categoryKey === key).length
    }))
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Shoe Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of premium footwear for men, women, and kids
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === tab.key
                  ? 'bg-kenyan-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-kenyan-light-blue hover:text-kenyan-blue border border-gray-200'
              }`}
            >
              {tab.name}
              <span className="ml-2 text-sm opacity-75">({tab.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kenyan-blue"></div>
          </div>
        )}

        {/* Products Grid */}
        {!loading && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`${product.categoryKey}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProductCard
                  image={product.src}
                  title={`${product.category} - ${product.name}`}
                  price={product.price}
                  category={product.category}
                  categoryKey={product.categoryKey}
                  onProductClick={handleProductClick}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* No Products Message */}
        {!loading && filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">👟</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              We're working on adding more products to this category
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-blue rounded-xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-kenyan-light-blue mb-6">
            Contact us and we'll help you find the perfect pair of shoes
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-kenyan-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

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

export default Shop;
