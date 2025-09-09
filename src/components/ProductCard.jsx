import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'

const ProductCard = ({ product, addToCart }) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="card group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={toggleLike}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-200 ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
        <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
          {product.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.rating})
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            Ksh {product.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className="btn-primary flex items-center space-x-2 hover:bg-primary-700 transition-colors duration-200"
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
        
        <div className="mt-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
