'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const carouselSlides = [
  {
    image: '/images/armored-lexus-lx-600.jpg',
    title: 'Executive Protection',
    subtitle: 'Luxury Armored SUVs',
    description: 'Experience the perfect blend of luxury and security with our executive armored vehicles, featuring B7 ballistic protection and premium amenities.',
    features: ['B7 Ballistic Protection', 'Blast-Resistant Underbody', 'Premium Interior', 'Advanced Security Systems']
  },
  {
    image: '/images/armored-cadillac escalade-esv.jpg',
    title: 'Special Purpose Vehicles',
    subtitle: 'Custom Security Solutions',
    description: 'Tailored armored vehicles designed for specific security requirements, featuring advanced protection systems and specialized equipment.',
    features: ['Custom Armoring', 'Specialized Equipment', 'Advanced Communication', 'Enhanced Mobility']
  },
  {
    image: '/images/Armored-Mercede-Maybach-S580.webp',
    title: 'Luxury Sedans',
    subtitle: 'Discreet Protection',
    description: 'High-end armored sedans offering discreet protection without compromising on comfort and style.',
    features: ['Discreet Armoring', 'Luxury Interior', 'Advanced Driver Assistance', 'Premium Sound System']
  },
  {
    image: '/images/Toyota-Land-Cruiser-3Armored-Vehicle-BR6-BR7-BR4.jpg',
    title: 'VIP Transport',
    subtitle: 'Maximum Security',
    description: 'State-of-the-art armored vehicles designed for VIP transport, featuring the highest level of protection and comfort.',
    features: ['B7+ Protection Level', 'Run-Flat Tires', 'Emergency Systems', 'Comfort Features']
  },
  {
    image: '/images/security-fleet.jpg',
    title: 'Security Fleet',
    subtitle: 'Comprehensive Protection',
    description: 'Complete fleet solutions for security operations, featuring versatile armored vehicles for various security needs.',
    features: ['Fleet Management', 'Versatile Configurations', 'Rapid Deployment', 'Maintenance Support']
  }
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !isPlaying || isHovered) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, isPlaying, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section 
      className="relative h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {carouselSlides.map((slide, index) => (
            <div 
              key={index} 
              className={`embla__slide flex-[0_0_100%] relative h-full transition-opacity duration-500 ${selectedIndex === index ? '' : 'opacity-75'}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
              <div className="relative z-20 h-full flex items-center justify-center text-center">
                <div className="max-w-4xl px-4 transform transition-all duration-500"
                     style={{ 
                       opacity: selectedIndex === index ? 1 : 0,
                       transform: `translateY(${selectedIndex === index ? '0' : '20px'})`
                     }}>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
                    {slide.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 text-white/90 transform transition-all duration-300 hover:scale-105"
                      >
                        <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto">
                    <Link
                      href="/vehicles"
                      className="group inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105"
                    >
                      View Our Fleet
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      Request Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex gap-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? 'bg-red-600 scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
      </div>
    </section>
  );
} 