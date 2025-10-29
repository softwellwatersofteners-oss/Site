import {
  Zap,
  Droplets,
  Cpu,
  Leaf,
  Wrench,
  ShieldCheck,
  Ruler,
  Recycle,
  Clock,
  BadgeCheck,
  Atom,
  Waves,
  ThermometerSun,
} from 'lucide-react';

export default function TechnologyPage() {
  const technologies = [
    {
      icon: Atom,
      title: 'Electro-Coagulation Principle',
      description:
        'Softwell Electrode Water Softener operates on an advanced electro-coagulation principle to eliminate scale without adding any chemicals.',
    },
    {
      icon: Zap,
      title: 'Oxidant Generation',
      description:
        'Generates oxidants within the water, which effectively prevent corrosion, bio-fouling, microbial growth, scaling, and airborne bacteria—ensuring a cleaner, safer water system.',
    },
    {
      icon: Droplets,
      title: 'Localized High-pH Zone',
      description:
        'Creates a high pH near the cathode where scale-forming minerals like calcium and magnesium are separated and collected inside the reactor chamber.',
    },
    {
      icon: Waves,
      title: 'Electro Softening Chamber (ESC)',
      description:
        'Accelerates the precipitation of scale-forming particles such as calcium, magnesium, silica, iron, and manganese under controlled conditions, preventing adhesion to surfaces.',
    },
    {
      icon: ThermometerSun,
      title: 'Energy Efficiency',
      description:
        'Even a 1 mm scale layer can increase energy consumption by 30%. Continuous prevention of deposits ensures efficient heat transfer and reduced power usage.',
    },
    {
      icon: Recycle,
      title: 'Self-Cleaning & Sustainable Design',
      description:
        'Through ionization and electrochemical reactions, scale particles are kept suspended and flushed out. Existing scales gradually dissolve, ensuring long-term descaling.',
    },
    {
      icon: ShieldCheck,
      title: 'Enhanced System Longevity',
      description:
        'By maintaining clean surfaces and efficient water flow, the system extends the life of condensers, pipelines, and heating equipment.',
    },
    {
      icon: Cpu,
      title: 'Smart System Control',
      description:
        'Automated controls manage voltage, flow, and electrochemical reactions for consistent performance with minimal maintenance.',
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Chemical-Free Operation',
      description:
        'Provides a completely salt-free and chemical-free softening process—eco-friendly and safe for all applications.',
    },
    {
      icon: Wrench,
      title: 'Low Maintenance',
      description:
        'Requires minimal maintenance thanks to its self-cleaning design and automated control features.',
    },
    {
      icon: ShieldCheck,
      title: 'Durable and Reliable Build',
      description:
        'Constructed using corrosion-resistant materials, ensuring long-term reliability and consistent water quality.',
    },
    {
      icon: Ruler,
      title: 'Tailored Configurations',
      description:
        'Available in multiple capacities and sizes to suit both residential and industrial requirements.',
    },
    {
      icon: Recycle,
      title: 'Environmentally Friendly',
      description:
        'Reduces scaling, energy waste, and chemical usage—promoting a sustainable and efficient water system.',
    },
    {
      icon: Clock,
      title: 'Product Life Span: 25+ Years',
      description:
        'Engineered for durability, offering more than two decades of dependable performance.',
    },
    {
      icon: BadgeCheck,
      title: 'Manufacturing Warranty: 3 Years',
      description:
        'Comes with a 3-year manufacturer warranty, ensuring confidence and long-term support.',
    },
  ];

  return (
    <div id="technology" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Softwell Electrode Softening Technology provides a chemical-free, energy-efficient, and
            eco-friendly solution for scale prevention and water treatment.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mb-20 flex justify-center">
          <img
            src="/1.jpeg"
            alt="Softwell Electrode Softening Technology"
            className="w-full max-w-3xl rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Working Principle Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
            The Softwell system operates by generating a gentle electric current between two
            electrodes—an anode and a cathode—within the Electrolytic Chamber. This creates a
            localized high-pH zone that converts hardness minerals like calcium and magnesium into
            harmless solid particles. These are collected on the cathode surface and flushed out
            during cleaning.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-4">
            This process effectively prevents scale buildup in pipelines, heaters, condensers, and
            other components. Over time, even existing scale deposits are gradually removed,
            restoring system efficiency and reducing energy consumption.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-4">
            As a result, maintenance costs are minimized, heat transfer performance remains optimal,
            and the overall system life is extended—making it a sustainable and cost-effective water
            treatment solution.
          </p>
        </div>

        {/* Technology Cards Section */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
