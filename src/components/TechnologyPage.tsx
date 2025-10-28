import { Zap, Droplets, Cpu, Leaf, Wrench, ShieldCheck, Ruler, Recycle, Clock, BadgeCheck, Atom, Waves, ThermometerSun } from 'lucide-react';

export default function TechnologyPage() {
  const technologies = [
    {
      icon: Atom,
      title: 'Electro-Coagulation Activity',
      description:
        'Utilizes electro-coagulation technology to eliminate scaling by destabilizing hardness ions—without adding any chemicals or salts.',
    },
    {
      icon: Zap,
      title: 'Oxidant Generation',
      description:
        'Generates oxidants within the water that actively reduce corrosion, biofouling, microbial growth, and airborne contaminants.',
    },
    {
      icon: Droplets,
      title: 'High-pH Reactor Zone',
      description:
        'Creates a localized high-pH zone near the negative electrode, where scale-forming minerals precipitate and are trapped within the reactor instead of your piping system.',
    },
    {
      icon: Waves,
      title: 'Scale Prevention Mechanism',
      description:
        'Reduces the concentration of scale-forming particles—magnesium, calcium, silica, iron, and manganese—to prevent precipitation in the water distribution network.',
    },
    {
      icon: ShieldCheck,
      title: 'Anti-Fouling and Corrosion Protection',
      description:
        'Prevents scale and slime formation on condensers and cooling towers, maintaining clean surfaces and consistent heat transfer efficiency.',
    },
    {
      icon: ThermometerSun,
      title: 'Energy-Efficient Operation',
      description:
        'Just 1mm of scale can increase energy use by up to 30%. By eliminating deposits, ESC technology preserves optimal Delta T, saving significant power over time.',
    },
    {
      icon: Recycle,
      title: 'Self-Cleaning & Sustainable Design',
      description:
        'Ionization ensures precipitated scale never adheres to surfaces; existing scales gradually strip off—achieving continuous descaling and long-term system health.',
    },
    {
      icon: Cpu,
      title: 'Smart System Control',
      description:
        'Automated ESC control optimizes voltage, flow, and ionization cycles to maintain performance while minimizing maintenance and downtime.',
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Zero Salts / Chemicals',
      description:
        'Delivers pure water without using salts or harsh chemicals, promoting health and sustainability.',
    },
    {
      icon: Wrench,
      title: 'Low Maintenance',
      description:
        'Designed for minimal upkeep and hassle-free operation for years to come.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable and Long Lasting',
      description:
        'Built from premium, corrosion-resistant materials ensuring consistent, long-term performance.',
    },
    {
      icon: Ruler,
      title: 'Customized Sizes',
      description:
        'Available in various capacities and dimensions tailored to your specific needs.',
    },
    {
      icon: Cpu,
      title: 'Automatic Control System',
      description:
        'Smart digital controls manage the process automatically for optimal efficiency.',
    },
    {
      icon: Recycle,
      title: 'Eco Friendly',
      description:
        'Environmentally conscious design reduces water and energy waste.',
    },
    {
      icon: Clock,
      title: 'Life Span of Product: 20+ Years',
      description:
        'Durable construction guarantees over two decades of reliable use.',
    },
    {
      icon: BadgeCheck,
      title: 'Warranty of Product: 2 Years',
      description:
        'Comes with a full 2-year warranty for peace of mind and quality assurance.',
    },
  ];

  return (
    <div id="technology" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge water softening technology that delivers superior performance and efficiency
          </p>
        </div>

        {/* Banner Image Section */}
        
         <div className="mb-20 flex justify-center"> <img src="/1.jpeg" alt="HM Scalenor Technology" className="w-full max-w-3xl rounded-3xl shadow-2xl object-cover" /> </div>


        {/* Existing Technologies Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Remaining sections (How it works, features, why our tech) stay the same */}
      </div>
    </div>
  );
}
