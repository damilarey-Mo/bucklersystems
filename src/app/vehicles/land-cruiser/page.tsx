import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Shield, Lock, ArrowRight } from 'lucide-react';

export default function LandCruiserPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src="/images/Toyota-Land-Cruiser-3Armored-Vehicle-BR6-BR7-BR4.jpg"
          alt="Armored Toyota Land Cruiser"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Armored Toyota Land Cruiser</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The armored Toyota Land Cruiser combines legendary off-road capability with advanced ballistic protection, 
              making it the perfect choice for high-profile clients who demand both luxury and security. 
              Built to withstand high-impact situations while remaining fully operational and discreet.
            </p>
          </div>
        </div>
      </section>

      {/* Protection and Specs Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Protection */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                Protection Features
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Multi-layer Ballistic glass</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>360º perimeter protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Battery & ECM armoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Fuel Tank protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Overlap System</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Reinforced suspension</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Runflat System</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Reinforced hinges</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Door travel retainers</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Driver-side operable window</span>
                </li>
              </ul>
            </div>
            {/* Specs (using example data for now)*/}
            <div>
               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lock className="h-6 w-6 text-red-600" />
                Vehicle Specifications
              </h3>
               <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Engine: 3.5L V6</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Horsepower: 409 HP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Transmission: 10-Speed Automatic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Drive System: 4WD</span>
                </li>
                 <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Armoring Level: B7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Equipment Section */}
       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Optional Equipment & Accessories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Security Upgrades</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Engine bay armoring</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Engine bay fire suppression system</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Exhaust pipe protection</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Radiator protection</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Roof escape hatch</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Tactical Add-Ons</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> CCTV + GPS system with 360º view</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Advanced nightvision camera</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Siren/PA system, optional intercom</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> LED strobe lights, front and/or rear</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Enhancements</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Door assist mechanism</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Heavy duty wheels</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Oxygen filtration system</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Reinforced bumpers, front and rear</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Additional operable windows</li>
                         <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600 flex-shrink-0" /> Blackout package</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Customize Your Armored Land Cruiser?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to discuss your specific requirements and get a personalized quote.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
} 