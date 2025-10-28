import HeroCarousel from './HeroCarousel';
import { Sparkles, Shield, Leaf, Clock, Heart, Home, FileDown } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Sparkles,
      title: 'Crystal Clear Water',
      description: 'Remove impurities and enjoy sparkling clean water throughout your home.',
    },
    {
      icon: Shield,
      title: 'Appliance Protection',
      description: 'Extend the life of your appliances by preventing mineral buildup and corrosion.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce detergent usage by up to 50% and contribute to a greener planet.',
    },
    {
      icon: Clock,
      title: 'Low Maintenance',
      description: 'Set it and forget it. Our systems require minimal maintenance and attention.',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Healthier Skin & Hair',
      description: 'Soft water is gentler on your skin and leaves your hair silky smooth.',
    },
    {
      icon: Home,
      title: 'Cleaner Home',
      description: 'Say goodbye to stubborn water spots and soap scum on fixtures and surfaces.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Spend less time cleaning and more time enjoying your home.',
    },
    {
      icon: Leaf,
      title: 'Lower Bills',
      description: 'Save money on energy bills with more efficient water heating.',
    },
  ];

  return (
    <div id="home">
      <HeroCarousel />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Aqua Drop?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hard water affects millions of homes, causing scale buildup, dry skin, and reduced appliance efficiency.
              <span className="font-semibold text-blue-600"> Aqua Drop transforms your water quality</span>,
              delivering soft, pure water that protects your home, saves you money, and improves your daily life.
              Experience the difference that premium water softening technology can make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                Hard water contains high levels of calcium and magnesium minerals that wreak havoc on your plumbing,
                appliances, and even your body. Over time, this leads to expensive repairs, higher energy bills,
                and poor water quality throughout your home.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
              <p className="text-gray-700 leading-relaxed">
                Aqua Drop's advanced water softening systems use proven ion exchange technology to remove hardness minerals,
                delivering consistently soft water to every tap in your home. Protect your investment and enjoy the benefits
                of soft water every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outstanding Features
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Engineered for excellence, designed for your peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Life-Changing Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how soft water improves your daily life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
      <FileDown className="h-10 w-10 text-white" />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Want to Learn More?
    </h2>
    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Download our comprehensive guide to water softening and discover everything you need to know
      about choosing the right system for your home.
    </p>
    <a
      href="https://drive.google.com/uc?export=download&id=1HNMAQCiSjL5oUuHAdv3IGJCRXLQcpKsd"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
    >
      <FileDown className="h-5 w-5" />
      <span>Download Free PDF Guide</span>
    </a>
  </div>
</section>

    </div>
  );
}
