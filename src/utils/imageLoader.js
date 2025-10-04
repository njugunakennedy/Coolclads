// Function to dynamically import images from a folder
export const loadImagesFromFolder = (folderPath) => {
  const images = [];
  
  // Import all images from the specified folder
  const imageModules = require.context('../images', true, /\.(jpg|jpeg|png|webp)$/);
  
  imageModules.keys().forEach((key) => {
    if (key.includes(folderPath.replace('../images/', ''))) {
      images.push({
        src: imageModules(key).default || imageModules(key),
        name: key.split('/').pop().split('.')[0],
        path: key
      });
    }
  });
  
  return images;
};

// Predefined categories with their folder paths
export const categories = {
  'men-shoes': {
    name: 'Men Shoes',
    folder: 'men shoes',
    description: 'Stylish and comfortable shoes for men'
  },
  'women-shoes': {
    name: 'Women Shoes', 
    folder: 'women shoes',
    description: 'Elegant and trendy shoes for women'
  },
  'kids-shoes': {
    name: 'Kids Shoes',
    folder: 'kids shoes', 
    description: 'Fun and durable shoes for kids'
  },
  'sneakers': {
    name: 'Sneakers',
    folder: 'sneakers',
    description: 'Comfortable athletic and casual sneakers'
  },
  'boots': {
    name: 'Boots',
    folder: 'boots',
    description: 'Durable boots for all seasons'
  },
  'canvas': {
    name: 'Canvas Shoes',
    folder: 'canvas',
    description: 'Lightweight and versatile canvas footwear'
  },
  'official-shoes': {
    name: 'Official Shoes',
    folder: 'official shoes',
    description: 'Professional shoes for formal occasions'
  }
};

// Generate random price for demo purposes (KSh 1,000 - 3,500)
export const generatePrice = () => {
  const minPrice = 1000;
  const maxPrice = 3500;
  const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
  return `KSh ${randomPrice.toLocaleString()}`;
};

// Get sizes based on category
export const getSizesByCategory = (categoryKey) => {
  const sizeRanges = {
    'men-shoes': Array.from({ length: 9 }, (_, i) => i + 36), // 36-44
    'women-shoes': Array.from({ length: 7 }, (_, i) => i + 35), // 35-41
    'kids-shoes': Array.from({ length: 7 }, (_, i) => i + 22), // 22-28
    'sneakers': Array.from({ length: 9 }, (_, i) => i + 36), // 36-44
    'boots': Array.from({ length: 9 }, (_, i) => i + 36), // 36-44
    'canvas': Array.from({ length: 9 }, (_, i) => i + 36), // 36-44
    'official-shoes': Array.from({ length: 9 }, (_, i) => i + 36) // 36-44
  };
  
  return sizeRanges[categoryKey] || Array.from({ length: 9 }, (_, i) => i + 36); // Default to 36-44
};