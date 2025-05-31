'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

// This would typically come from an API or database
const products = [
  {
    id: 1,
    name: 'Mansory Carbon Fiber Kit',
    image: '/images/product1.jpg',
    price: '$25,000',
    category: 'Exterior',
    description: 'Complete carbon fiber body kit for enhanced aerodynamics and style.',
    features: [
      'Full carbon fiber construction',
      'Enhanced aerodynamics',
      'Perfect fitment',
      'Includes installation guide',
      '2-year warranty',
    ],
    specifications: {
      material: 'Carbon Fiber',
      weight: '15 kg',
      compatibility: 'Universal',
      installation: 'Professional recommended',
    },
  },
  // Add more products as needed
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800"
          >
            Return to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <p className="text-2xl font-bold mb-6">{product.price}</p>
              <p className="text-gray-700 mb-8">{product.description}</p>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-16 text-center border-t border-b"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 border rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>

              {/* Features */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <dl className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-gray-600 capitalize">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 