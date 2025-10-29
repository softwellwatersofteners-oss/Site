import HeroCarousel from './HeroCarousel';
import { Sparkles, Shield, Leaf, Clock, Heart, Home, FileDown, Droplets, Wrench, RefreshCcw, Hourglass, Award, Shirt, ShieldCheck, ThermometerSun } from 'lucide-react';

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
  {
    icon: Droplets,
    title: 'Zero Water Wastage',
    description: 'Efficient design ensures absolutely no water is wasted during operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Installation',
    description: 'Quick and hassle-free setup that works seamlessly with your existing plumbing.',
  },
  {
    icon: RefreshCcw,
    title: 'Removes Previous Scale',
    description: 'Effectively dissolves and eliminates old limescale buildup in your pipes and fixtures.',
  },
  {
    icon: Hourglass,
    title: 'Long Life Span',
    description: 'Built to last with a life expectancy of 25+ years for lasting performance.',
  },
  {
    icon: Award,
    title: '3-Year Manufacturing Warranty',
    description: 'Comes with a comprehensive 3-year warranty for your peace of mind.',
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
  {
    icon: Shirt,
    title: 'Keep Your Clothes Soft & Bright',
    description: 'Soft water protects fabric fibers, keeping your clothes cleaner, brighter, and softer after every wash.',
  },
  {
    icon: Droplets,
    title: 'Eliminate Limescale Buildup',
    description: 'Prevents hard water deposits and limescale from forming on faucets, showerheads, and other plumbing fixtures.',
  },
  {
    icon: ShieldCheck,
    title: 'Extend Plumbing System Life',
    description: 'Protects pipes, fittings, and appliances from corrosion and mineral accumulation—extending your system’s lifespan.',
  },
  {
    icon: ThermometerSun,
    title: 'Faster Water Heating',
    description: 'Scale-free surfaces allow your water heater to warm water more efficiently, reducing heating time and energy costs.',
  },
  ];

  return (
    <div id="home">
      <HeroCarousel />

      <section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Why Choose Softwell Water Softeners?
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Hard water affects millions of homes, causing scale buildup, dry skin, and reduced appliance efficiency.
        <span className="font-semibold text-blue-600"> Softwell transforms your water quality</span>,
        delivering soft, pure water that protects your home, saves you money, and improves your daily life.
        Experience the difference that premium water softening technology can make.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">
      {/* Problem Card */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl flex flex-col">
        <img
          src="prb.jpeg"
          alt="Hard water limescale buildup on faucet"
          className="rounded-xl shadow-lg mb-6 object-cover w-full h-56"
          loading="lazy"
        />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
        <p className="text-gray-700 leading-relaxed">
          Hard water contains high levels of minerals such as calcium and magnesium, which can create serious
          problems in homes, buildings, and industries. When hard water flows through pipes and appliances, it forms
          limescale deposits that block pipelines, reduce water flow, and lower the efficiency of heaters and washing
          machines. Over time, this buildup can lead to higher energy consumption, frequent maintenance, and costly
          repairs. Hard water also affects personal care — it leaves skin dry, hair rough, and clothes dull after
          washing. It causes white stains on taps, tiles, and utensils, and reduces the lathering of soaps and
          detergents, resulting in more water and cleaning products being wasted.
        </p>
      </div>

      {/* Solution Card */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl flex flex-col">
        <img
          src="sol.jpeg"
          alt="Spotless bathroom and clean fixtures after soft water use"
          className="rounded-xl shadow-lg mb-6 object-cover w-full h-56"
          loading="lazy"
        />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
        <p className="text-gray-700 leading-relaxed">
          The most effective way to overcome hard water problems is with Softwell Water Softeners. Our advanced,
          chemical-free technology removes hardness minerals like calcium and magnesium that cause scaling, stains,
          and dry skin. Softwell Water Softeners protect your plumbing, appliances, and bathroom fittings from
          limescale while giving you softer skin, smoother hair, and brighter clothes. With zero maintenance, zero
          water wastage, and eco-friendly operation, Softwell provides a long-lasting, cost-effective, and smart
          solution for both homes and industries. Experience the purity and comfort of soft water — only with
          Softwell Water Softeners.
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

          <section id="benefits" className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Experience the Benefits of Soft Water
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        See the difference soft water makes in your home — from cleaner surfaces and brighter
        clothes to healthier skin and lower energy bills.
      </p>
    </div>

    {/* Then & Now Comparison Section */}
    <div className="grid md:grid-cols-2 gap-8 mb-20 items-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">Before Softwell</h3>
        <img
          src="./public/hairfall.jpeg"
          alt="Before using soft water - limescale buildup"
          className="rounded-2xl shadow-lg object-cover w-full h-64"
        />
        <img
          src="./public/showerb.jpeg"
          alt="Before using soft water - limescale buildup"
          className="rounded-2xl shadow-lg object-cover w-full h-64"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-800">After Softwell</h3>
        <img
          src="./public/hairfull.jpeg"
          alt="After using soft water - spotless bathroom"
          className="rounded-2xl shadow-lg object-cover w-full h-64"
        />
        <img
          src="./public/shower.jpeg"
          alt="After using soft water - spotless bathroom"
          className="rounded-2xl shadow-lg object-cover w-full h-64"
        />
      </div>
    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div
            key={benefit.title}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
      href="#"
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
