# CoolClads - Kenyan Online Shoe Shop

A modern, responsive React website for CoolClads, a Kenyan online shoe retailer. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## 🌟 Features

- **Modern Design**: Elegant blue and white theme with Kenyan pride elements
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Product Gallery**: Dynamic image loading from local folders
- **Multiple Pages**: Home, Shop, About, and Contact pages
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Kenyan Focus**: Local pride elements and Kenya-specific content

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coolclads
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Footer.jsx      # Footer with contact info and links
│   ├── ProductCard.jsx # Product display card
│   └── BackToTop.jsx   # Scroll to top button
├── pages/              # Main page components
│   ├── Home.jsx        # Landing page with hero and featured products
│   ├── Shop.jsx        # Product catalog with filtering
│   ├── About.jsx       # Company information and values
│   └── Contact.jsx     # Contact form and information
├── utils/              # Utility functions
│   └── imageLoader.js  # Dynamic image loading utilities
├── images/             # Product images organized by category
│   ├── men shoes/      # Men's footwear
│   ├── women shoes/    # Women's footwear
│   ├── kids shoes/     # Children's footwear
│   ├── sneakers/       # Athletic and casual sneakers
│   ├── boots/          # Boots and heavy footwear
│   ├── canvas/         # Canvas shoes
│   └── official shoes/ # Formal and professional shoes
├── App.jsx             # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color Scheme**: Kenyan blue (#0066CC) and white with light gradients
- **Typography**: Poppins font family for clean, modern look
- **Animations**: Framer Motion for smooth transitions and hover effects
- **Responsive Grid**: Tailwind CSS grid system for all screen sizes
- **Interactive Elements**: Hover effects, button animations, and smooth scrolling

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices with touch-friendly interfaces
- **Breakpoints**: Responsive design using Tailwind's breakpoint system
- **Navigation**: Collapsible mobile menu with smooth animations
- **Images**: Responsive images that adapt to different screen sizes

## 🚀 Deployment

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify
3. Configure redirects for React Router (create `_redirects` file in `public/`):
```
/*    /index.html   200
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for SPA navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **ES6+**: Modern JavaScript features

## 📞 Contact Information

- **Location**: Thika, Kenya
- **Phone**: +254 7xx xxx xxx
- **Email**: support@coolclads.com

## 🇰🇪 Kenyan Pride

This website celebrates Kenyan craftsmanship and local pride with:
- Kenyan flag emojis and colors
- Local business focus
- Kenya-specific contact information
- Support for local manufacturers

## 📄 License

© 2025 CoolClads. All rights reserved.

---

Built with ❤️ for the Kenyan shoe market
