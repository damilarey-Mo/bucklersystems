import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Users, CheckCircle2 } from 'lucide-react';
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const featuredVehicles = [
    {
      id: 1,
      name: 'Armored Lexus LX 600',
      image: '/images/armored-lexus-lx-600.jpg',
      category: 'Armored SUV',
    },
    {
      id: 2,
      name: 'Armored Cadillac Escalade ESV',
      image: '/images/armored-cadillac escalade-esv.jpg',
      category: 'Armored SUV',
    },
    {
      id: 3,
      name: 'Armored Mercede Maybach S580',
      image: '/images/Armored-Mercede-Maybach-S580.webp',
      category: 'Armored SUV',
    },
  ];

  const whyChooseUs = [
    {
      title: 'High-quality of Armoring and Assembly',
      description: 'Buckler Systems has been producing bulletproof vehicles for almost 20 years. During this period, we have been constantly adapting our approach to armoring to ever-changing technology. We deliver high-quality of armoring and assembly through our professional staff, organizational depth, safety culture, and industry experience.',
    },
    {
      title: 'Innovative Armoring Technologies',
      description: 'Buckler Systems employs the latest line of CNC cutting and bending machines supplied by the world leader in steel processing systems. Implementation of latest technologies in laser cutting and bending, which don\'t affect the metal structure, results in our ability to supply armored vehicles that guarantee safety and security.',
    },
    {
      title: 'Highly-experienced Team',
      description: 'All Buckler Systems employees are highly skilled, well-trained and experienced professionals. Our engineers have a proven track record of designing and implementing efficient and innovative solutions, which are based on their extensive knowledge of all the aspects of the ballistic protection industry.',
    },
    {
      title: 'Certified Materials',
      description: 'At Buckler Systems, we only use certified materials for our armored vehicles. All our components are tested by independent laboratories as well as by our trained staff at the shooting range. We have been issued certifications from numerous international organizations.',
    },
  ];

  return (
    <div className="min-h-screen">
    
      <HeroCarousel />

      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            <Link href="/vehicle-builder" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/builder.jpg"
                  alt="Vehicle Builder"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center text-white">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">Vehicle Builder</h3>
                  <p className="text-[10px] sm:text-sm text-white/90 mb-2 sm:mb-4">Customize your armored vehicle</p>
                  <div className="mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/current-stock" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/stock.jpg"
                  alt="Current Stock"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center text-white">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">Current Stock</h3>
                  <p className="text-[10px] sm:text-sm text-white/90 mb-2 sm:mb-4">View available vehicles</p>
                  <div className="mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/videos" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/videos.jpg"
                  alt="See Our Videos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center text-white">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">See Our Videos</h3>
                  <p className="text-[10px] sm:text-sm text-white/90 mb-2 sm:mb-4">Watch our vehicles in action</p>
                  <div className="mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/spare-parts" className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/parts.jpg"
                  alt="Spare Parts"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-6 text-center text-white">
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3">Spare Parts</h3>
                  <p className="text-[10px] sm:text-sm text-white/90 mb-2 sm:mb-4">Genuine parts and accessories</p>
                  <div className="mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Highlight Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16">
            <div className="col-span-2 lg:col-span-1 relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Toyota-Land-Cruiser-3Armored-Vehicle-BR6-BR7-BR4.jpg"
                alt="Armored Toyota Land Cruiser"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-red-600 text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-full text-[10px] sm:text-sm font-semibold shadow-lg">
                B7 Level Protection
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-6 tracking-tight text-white">Armored Toyota Land Cruiser</h2>
              <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-10 leading-relaxed">
                The armored Toyota Land Cruiser combines legendary off-road capability with advanced ballistic protection, 
                making it the perfect choice for high-profile clients who demand both luxury and security.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-10 mb-6 sm:mb-10">
                <div>
                  <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-6 flex items-center gap-2 text-white">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                    Protection
                  </h3>
                  <ul className="space-y-2 sm:space-y-4 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">B7 Level Protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">Blast-Resistant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">Reinforced</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">Run-Flat Tires</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-6 flex items-center gap-2 text-white">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                    Specs
                  </h3>
                  <ul className="space-y-2 sm:space-y-4 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">3.5L V6 Engine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">409 HP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">10-Speed Auto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-xs sm:text-base">4WD System</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <Link
                  href="/vehicles/land-cruiser"
                  className="group inline-flex items-center justify-center gap-2 bg-red-600 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 text-xs sm:text-base"
                >
                  View Details
                  <ArrowRight className="h-3 w-3 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-md font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 text-xs sm:text-base"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 tracking-tight text-gray-900">Featured Vehicles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {featuredVehicles.map((vehicle) => (
              <Link
                key={vehicle.id}
                href={`/vehicles/${vehicle.id}`}
                className="group"
              >
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium">
                      {vehicle.category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-16">
            <Link
              href="/vehicles"
              className="group inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-base sm:text-lg"
            >
              View All Vehicles
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight text-gray-900">Why Choose Buckler Systems</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              With decades of experience in armored vehicle manufacturing, we deliver unmatched quality, 
              innovation, and security solutions to our clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    {index === 0 && <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />}
                    {index === 1 && <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />}
                    {index === 2 && <Users className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />}
                    {index === 3 && <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-16 text-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-base sm:text-lg"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-white">Ready to Enhance Your Security?</h2>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our security experts today for a confidential consultation about your protection needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+2348065555009"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
