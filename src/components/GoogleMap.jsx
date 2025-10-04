import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GoogleMap = ({ apiKey, center, zoom = 15, markerTitle, infoWindowContent }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Load Google Maps API
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setMapLoaded(true);
      script.onerror = () => setMapError(true);
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, [apiKey]);

  // Initialize map when Google Maps is loaded
  useEffect(() => {
    if (mapLoaded && window.google) {
      const mapOptions = {
        center,
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#0066CC' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#0066CC' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#333333' }]
          }
        ]
      };

      const map = new window.google.maps.Map(document.getElementById('google-map'), mapOptions);
      
      // Add marker for location
      const marker = new window.google.maps.Marker({
        position: center,
        map: map,
        title: markerTitle,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#0066CC" stroke="#ffffff" stroke-width="4"/>
              <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial" font-size="20" font-weight="bold">👟</text>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40)
        }
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: infoWindowContent
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
  }, [mapLoaded, center, zoom, markerTitle, infoWindowContent]);

  if (mapError) {
    return (
      <div className="bg-gray-200 h-64 flex items-center justify-center rounded-2xl">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-lg">Unable to load map</p>
          <p className="text-sm">Please check your internet connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      {!mapLoaded ? (
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kenyan-blue mx-auto mb-4"></div>
            <p className="text-lg">Loading map...</p>
            <p className="text-sm">📍 Thika, Kenya</p>
          </div>
        </div>
      ) : (
        <div 
          id="google-map" 
          className="w-full h-64 md:h-80 rounded-2xl"
          style={{ minHeight: '256px' }}
        />
      )}
      
      {/* Map overlay with additional info */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-kenyan-blue rounded-full"></div>
          <span className="text-sm font-medium text-gray-800">CoolClads Location</span>
        </div>
      </div>
      
      {/* Directions button */}
      <div className="absolute bottom-4 right-4">
        <motion.a
          href={`https://www.google.com/maps/dir//${center.lat},${center.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-kenyan-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-kenyan-dark-blue transition-colors duration-300 shadow-lg flex items-center space-x-2"
        >
          <span>🗺️</span>
          <span>Get Directions</span>
        </motion.a>
      </div>
    </div>
  );
};

export default GoogleMap;
