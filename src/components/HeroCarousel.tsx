import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Eye, Zap, Shield, Award } from 'lucide-react';
import WaterWaves from './WaterWaves';

const slides = [
  {
    id: 1,
    title: 'Soft Water, Pure Life',
    subtitle: 'Welcome to Softwell Water Softeners',
    description: 'Transform your hard water into soft water with our cutting-edge water softening solutions. Experience the difference in every drop.',
    hasWaterWaves: true,
    bgGradient: 'from-blue-600 via-cyan-500 to-blue-700',
  },
  {
    id: 2,
    title: 'Our Vision & Mission',
    subtitle: 'Building a Healthier Tomorrow',
    description: 'Our vision is to provide every home with access to premium quality soft water. Our mission is to deliver innovative, eco-friendly water softening solutions that enhance health and well-being.',
    icon: Eye,
    bgImage: 'https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    id: 3,
    title: 'The Transformation',
    subtitle: 'Before & After',
    description: 'See the dramatic difference in pipe cleanliness and efficiency. Hard water leaves mineral deposits that clog pipes. Our softeners eliminate scale buildup, extending the life of your plumbing.',
    bgImage: 'https://images.pexels.com/photos/12726229/pexels-photo-12726229.jpeg',
  },
  {
    id: 4,
    title: 'Advanced Technology',
    subtitle: 'Innovation at Its Finest',
    description: 'State-of-the-art ion exchange technology removes calcium and magnesium ions, delivering consistently soft water throughout your home with minimal maintenance.',
    icon: Zap,
    bgImage: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    id: 5,
    title: 'Trusted Excellence',
    subtitle: 'Your Water, Our Priority',
    description: 'Join thousands of satisfied customers who trust Softwell Water Softeners for their water softening needs. Professional installation, reliable service, and exceptional results.',
    icon: Award,
    bgImage: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.hasWaterWaves ? (
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}>
                <WaterWaves />
              </div>
            ) : (
              <div className="absolute inset-0">
                <img
                  src={slide.bgImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            )}

            <div className="relative h-full flex items-center justify-center px-4">
              <div className="max-w-4xl text-center text-white">
                {Icon && (
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Icon className="h-16 w-16" />
                    </div>
                  </div>
                )}
                <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl font-light mb-6 text-blue-100">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Explore Our Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
