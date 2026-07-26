'use client';

import React from 'react';

export const JsonLd: React.FC = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Lanka Luxe Journeys',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier luxury travel management company in Sri Lanka specializing in bespoke itineraries, PGA golf holidays, private helicopter transfers, and Korean VIP concierges.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 34, World Trade Center, Echelon Square',
      addressLocality: 'Colombo 01',
      addressCountry: 'LK',
    },
    telephone: '+94770008899',
    priceRange: '$$$$',
    url: 'https://lankaluxejourneys.com',
    sameAs: [
      'https://instagram.com/lankaluxejourneys',
      'https://facebook.com/lankaluxejourneys',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
