'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Location {
  name: string;
  lat: number;
  lng: number;
  type: 'visited' | 'exchange' | 'internship';
  description: string;
}

const locations: Location[] = [
  { name: 'Korea', lat: 35.9078, lng: 127.7669, type: 'visited', description: 'Visited' },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605, type: 'visited', description: 'Visited' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, type: 'visited', description: 'Visited' },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213, type: 'visited', description: 'Visited' },
  { name: 'London', lat: 51.5074, lng: -0.1278, type: 'visited', description: 'Visited' },
  { name: 'Cambridge', lat: 52.2053, lng: 0.1218, type: 'visited', description: 'Visited' },
  { name: 'Oxford', lat: 51.7520, lng: -1.2577, type: 'exchange', description: 'Summer exchange at University of Oxford for computer vision course' },
  { name: 'Shenzhen', lat: 22.5431, lng: 114.0579, type: 'internship', description: 'Intern at Daimon Robotics' },
];

const WorldMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet only on client side
    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [20, 0],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true,
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom icon colors
      const createCustomIcon = (color: string) => {
        return L.divIcon({
          className: 'custom-marker',
          html: `
            <div style="
              background-color: ${color};
              width: 20px;
              height: 20px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
              <div style="
                width: 8px;
                height: 8px;
                background-color: white;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
              "></div>
            </div>
          `,
          iconSize: [20, 20],
          iconAnchor: [10, 20],
        });
      };

      // Add markers for each location
      locations.forEach((location) => {
        let color = '#3b82f6'; // Default blue for visited
        if (location.type === 'exchange') {
          color = '#10b981'; // Green
        } else if (location.type === 'internship') {
          color = '#f59e0b'; // Orange
        }

        const marker = L.marker([location.lat, location.lng], {
          icon: createCustomIcon(color),
        }).addTo(map);

        // Add popup with location info
        marker.bindPopup(`
          <div style="padding: 4px;">
            <strong style="font-size: 14px; color: ${color};">${location.name}</strong><br>
            <span style="font-size: 12px; color: #666;">${location.description}</span>
          </div>
        `);

        // Add hover tooltip
        marker.on('mouseover', function(this: any) {
          this.openPopup();
        });
      });

      mapInstanceRef.current = map;
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isClient]);

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      margin: '32px 0',
    }}>
      <div
        ref={mapRef}
        style={{ 
          width: '100%', 
          height: '600px',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
        }}
      />
    </div>
  );
};

export default WorldMap;
