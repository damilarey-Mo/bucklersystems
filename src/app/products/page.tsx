'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

const breakpointColumns = {
  default: 3,
  1280: 3,
  1024: 2,
  640: 1,
};

const products = [
  {
    id: 1,
    name: 'Mansory Carbon Fiber Kit',
    image: '/images/product1.jpg',
    price: '$25,000',
    category: 'Exterior',
    description: 'Complete carbon fiber body kit for enhanced aerodynamics and style.',
  },
  {
    id: 2,
    name: 'Mansory Interior Package',
    image: '/images/product2.jpg',
    price: '$35,000',
    category: 'Interior',
    description: 'Luxury interior upgrade with premium materials and custom stitching.',
  },
  {
    id: 3,
    name: 'Mansory Wheels Set',
    image: '/images/product3.jpg',
    price: '$15,000',
    category: 'Wheels',
    description: 'Forged alloy wheels with custom design and high-performance tires.',
  },
  {
    id: 4,
    name: 'Mansory Exhaust System',
    image: '/images/product4.jpg',
    price: '$12,000',
    category: 'Performance',
    description: 'High-performance exhaust system with titanium construction.',
  },
  {
    id: 5,
    name: 'Mansory Suspension Kit',
    image: '/images/product5.jpg',
    price: '$18,000',
    category: 'Performance',
    description: 'Adjustable suspension system for optimal handling and comfort.',
  },
  {
    id: 6,
    name: 'Mansory Brake Kit',
    image: '/images/product6.jpg',
    price: '$22,000',
    category: 'Performance',
    description: 'Carbon ceramic brake system with custom calipers.',
  },
];

const categories = ['All', 'Exterior', 'Interior', 'Performance', 'Wheels'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="mb-8">
              <Link href={`/products/${product.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.category}</p>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-2xl font-bold">{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
} 