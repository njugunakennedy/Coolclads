import React from 'react';
import { motion } from 'framer-motion';
import { getSizesByCategory } from '../utils/imageLoader';

const ProductCard = ({ image, title, price, category, categoryKey, onProductClick }) => {
  const sizes = getSizesByCategory(categoryKey);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="product-card bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      onClick={() => onProductClick({ image, title, price, category, categoryKey })}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="product-image w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-kenyan-blue font-bold">{price}</span>
          <span className="text-sm text-gray-500 capitalize">{category}</span>
        </div>
        
        {/* Sizes */}
        <div className="mb-3">
          <p className="text-xs text-gray-600 mb-2">Available Sizes:</p>
          <div className="flex flex-wrap gap-1">
            {sizes.slice(0, 5).map((size) => (
              <span
                key={size}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {size}
              </span>
            ))}
            <span className="text-xs text-gray-500 px-2 py-1">
              +{sizes.length - 5} more
            </span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-kenyan-blue text-white py-2 rounded-lg font-medium hover:bg-kenyan-dark-blue transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onProductClick({ image, title, price, category, categoryKey });
          }}
        >
          Select Size & Order
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
