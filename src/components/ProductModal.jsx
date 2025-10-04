import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSizesByCategory } from '../utils/imageLoader';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const sizes = getSizesByCategory(product?.categoryKey);
  const phoneNumber = '+254707747433';
  const whatsappNumber = '+254707747433';

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first!');
      return;
    }
    
    const cartItem = {
      ...product,
      size: selectedSize,
      quantity: quantity
    };
    
    // Store in localStorage
    const existingCart = JSON.parse(localStorage.getItem('coolclads-cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('coolclads-cart', JSON.stringify(existingCart));
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
    
    alert(`Added to cart: ${product.title} (Size ${selectedSize})`);
    onClose();
  };

  const handleOrderNow = () => {
    if (!selectedSize) {
      alert('Please select a size first!');
      return;
    }
    
    const orderMessage = `I'd like to order: ${product.title} - Size: ${selectedSize} - Quantity: ${quantity} - Price: ${product.price}`;
    const encodedMessage = encodeURIComponent(orderMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCallOrder = () => {
    if (!selectedSize) {
      alert('Please select a size first!');
      return;
    }
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppInquiry = () => {
    const inquiryMessage = `Hi! I'm interested in: ${product.title} - Price: ${product.price}. Can you tell me more about this product?`;
    const encodedMessage = encodeURIComponent(inquiryMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-3xl font-bold text-kenyan-blue mb-4">{product.price}</p>
                    <p className="text-gray-600">{product.category}</p>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Size *
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`p-3 text-center border rounded-lg font-medium transition-all ${
                            selectedSize === size
                              ? 'border-kenyan-blue bg-kenyan-blue text-white'
                              : 'border-gray-300 hover:border-kenyan-blue hover:bg-kenyan-light-blue'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-lg font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-kenyan-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-kenyan-dark-blue transition-colors"
                    >
                      Add to Cart
                    </button>
                    
                    <button
                      onClick={handleOrderNow}
                      className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>📱</span>
                      <span>Order via WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={handleCallOrder}
                      className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>📞</span>
                      <span>Call to Order</span>
                    </button>
                    
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="w-full border border-green-500 text-green-500 py-3 px-6 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>💬</span>
                      <span>Ask Questions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
