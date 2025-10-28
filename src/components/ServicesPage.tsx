import { Home, Building2, Wrench, HeadphonesIcon, FlaskConical, Settings } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Water Softeners',
      description: 'Complete water softening solutions designed specifically for homes of all sizes. From apartments to large estates, we have the perfect system for your needs.',
      features: ['Custom sizing', 'Professional installation', 'Energy-efficient models', 'Smart monitoring'],
    },
    {
      icon: Building2,
      title: 'Commercial Solutions',
      description: 'Industrial-grade water softening systems for businesses, hotels, restaurants, and commercial properties requiring high-capacity water treatment.',
      features: ['High-volume capacity', 'Minimal downtime', 'Cost-effective operation', '24/7 monitoring'],
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Expert installation by certified technicians ensuring optimal performance and longevity of your water softening system.',
      features: ['Licensed technicians', 'Quality guarantee', 'Same-day service', 'Full system testing'],
    },
    {
      icon: Settings,
      title: 'Maintenance & Repair',
      description: 'Regular maintenance and prompt repair services to keep your system running at peak efficiency year after year.',
      features: ['Annual maintenance', 'Emergency repairs', 'Genuine parts', 'Extended warranties'],
    },
    {
      icon: FlaskConical,
      title: 'Water Testing',
      description: 'Comprehensive water quality testing to determine hardness levels and recommend the ideal softening solution for your specific needs.',
      features: ['Free testing', 'Detailed analysis', 'Custom recommendations', 'Follow-up testing'],
    },
    {
      icon: HeadphonesIcon,
      title: 'Customer Support',
      description: 'Dedicated customer support team available to answer questions, provide guidance, and ensure your complete satisfaction.',
      features: ['24/7 availability', 'Expert guidance', 'Quick response', 'Ongoing assistance'],
    },
  ];

  return (
    <div id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive water softening solutions tailored to your unique requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are here to help. Get a free consultation and water quality assessment to find
            the perfect solution for your home or business.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
