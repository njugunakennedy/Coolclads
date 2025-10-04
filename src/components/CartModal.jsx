import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const savedCart = JSON.parse(localStorage.getItem('coolclads-cart') || '[]');
      setCartItems(savedCart);
      calculateTotal(savedCart);
    }
  }, [isOpen]);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return sum + (price * item.quantity);
    }, 0);
    setTotal(totalAmount);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(index);
      return;
    }

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('coolclads-cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('coolclads-cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('coolclads-cart');
    setTotal(0);
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleOrderAll = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const orderMessage = cartItems.map(item => 
      `${item.title} - Size: ${item.size} - Qty: ${item.quantity} - ${item.price}`
    ).join('\n');

    const fullMessage = `I'd like to order the following items:\n\n${orderMessage}\n\nTotal: KSh ${total.toLocaleString()}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/+254707747433?text=${encodedMessage}`, '_blank');
  };

  const handleCallOrder = () => {
    window.open('tel:+254707747433', '_self');
  };

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
              <h2 className="text-2xl font-bold text-gray-800">
                Shopping Cart ({cartItems.length})
              </h2>
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
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500">Add some products to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 line-clamp-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                        <p className="text-kenyan-blue font-bold">{item.price}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-gray-800">Total:</span>
                      <span className="text-2xl font-bold text-kenyan-blue">
                        KSh {total.toLocaleString()}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={handleOrderAll}
                        className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>📱</span>
                        <span>Order All via WhatsApp</span>
                      </button>
                      
                      <button
                        onClick={handleCallOrder}
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>📞</span>
                        <span>Call to Order All</span>
                      </button>
                      
                      <button
                        onClick={clearCart}
                        className="w-full border border-red-500 text-red-500 py-3 px-6 rounded-lg font-medium hover:bg-red-50 transition-colors"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
