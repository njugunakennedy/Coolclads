# CoolClads E-commerce Site

A modern, responsive e-commerce website built with React, TailwindCSS, and Vite.

## Features

- **Modern UI/UX**: Clean, professional design with TailwindCSS
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Product Catalog**: Browse footwear, clothing, and accessories
- **Shopping Cart**: Add, remove, and manage cart items
- **Interactive Chat**: Customer support chat widget
- **Contact Form**: Functional contact form with validation
- **FAQ Section**: Expandable FAQ accordion
- **Search & Filter**: Product search and category filtering

## Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   ├── ProductCard.jsx # Product display card
│   ├── ChatWidget.jsx  # Customer support chat
│   └── FAQ.jsx         # FAQ accordion
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with product grid
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact form page
│   └── Cart.jsx        # Shopping cart page
├── data/               # Data files
│   └── products.js     # Product data and categories
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and TailwindCSS
```

## Features Overview

### Home Page
- Hero section with call-to-action
- Product grid with search and filtering
- Category-based product organization
- Responsive product cards with ratings

### About Page
- Company story and values
- Team member profiles
- Comprehensive FAQ section

### Contact Page
- Contact form with validation
- Business information and hours
- Quick FAQ answers

### Shopping Cart
- Add/remove products
- Quantity adjustment
- Order summary with tax calculation
- Checkout functionality (placeholder)

### Global Features
- Responsive navigation with mobile menu
- Floating chat widget for customer support
- Cart icon with item count
- Modern footer with links and contact info

## Customization

### Adding New Products
Edit `src/data/products.js` to add new products. Each product should include:
- `id`: Unique identifier
- `name`: Product name
- `price`: Product price
- `category`: Product category (footwear, clothing, accessories)
- `image`: Path to product image
- `description`: Product description
- `inStock`: Availability status
- `rating`: Product rating (1-5)

### Styling
The project uses TailwindCSS with custom configuration in `tailwind.config.js`. You can:
- Modify color schemes in the `colors` section
- Add custom fonts in the `fontFamily` section
- Extend the theme as needed

### Images
Place product images in the `public/images/` directory and reference them in the products data file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
