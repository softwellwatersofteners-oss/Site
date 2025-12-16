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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Advanced Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Softwell Electrode Softening Technology provides a chemical-free,
            energy-efficient, and eco-friendly solution for scale prevention and water treatment.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Softwell Electrode Softening Technology – How It Works
          </h2>

          {[
            `Softwell Electrode Water Softener works on an advanced electro-coagulation principle to eliminate scale without adding any chemicals.`,
            `During operation, an electrical potential is created between the positive and negative electrodes.`,
            `The Electro Softening Chamber (ESC) accelerates the precipitation of all scale-forming particles.`,
            `Even a 1 mm thick scale layer can increase energy consumption by up to 30%.`,
            `Scale particles precipitate in suspension and are flushed out.`,
            `Energy consumption is reduced, system life is extended, and maintenance costs are minimized.`,
          ].map((text, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-4"
            >
              {text}
            </p>
          ))}

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 text-center">
            The Electrolytic Chamber
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
            The Electrolytic Chamber is a DC-powered unit containing an anode and cathode that
            converts hardness minerals into harmless solid particles.
          </p>
        </div>

        {/* Banner */}
        <div className="mb-20 flex justify-center">
          <img
            src="/1.jpeg"
            alt="Softwell Electrode Softening Technology"
            className="w-full max-w-3xl rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.title}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Applications */}
        <div className="space-y-6 mb-20">
          {[
            ['Agriculture Sector', 'Nourishes crops without mineral residue.', 'agri.jpeg'],
            ['Industrial Sector', 'Protects machinery and boilers.', 'indus.jpeg'],
            ['Apartment', 'Keeps plumbing scale-free.', 'apart.jpeg'],
            ['Houses', 'Protects fixtures and softens water.', 'hus.jpeg'],
          ].map(([title, desc, img]) => (
            <div key={title}>
              <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
              <p className="text-lg text-gray-500 mb-2">{desc}</p>
              <img
                src={img}
                alt={title}
                className="rounded-2xl shadow-lg object-cover w-full h-64"
              />
            </div>
          ))}
        </div>

        {/* Features */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Installations */}
        <div id="installations" className="py-16 mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Some Installations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['i1.jpeg', 'i2.jpeg', 'i3.jpeg'].map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                alt={`Installation ${i + 1}`}
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
