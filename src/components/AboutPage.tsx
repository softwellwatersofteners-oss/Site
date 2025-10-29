import { Users, Target, Heart, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction and well-being are at the heart of everything we do.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality, delivering only the best products and services.',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Building long-term relationships based on trust, transparency, and reliability.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly evolving with the latest technology to serve you better.',
    },
  ];

  const achievements = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '50+', label: 'Expert Technicians' },
  ];

  return (
    <div id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Softwell Water Softeners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the way in water softening solutions with passion, expertise, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
  <div>
    <img
      src="https://images.pexels.com/photos/247765/pexels-photo-247765.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Our Team"
      className="rounded-2xl shadow-2xl"
    />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a vision to bring soft water to every household, Softwell Water Softeners has been transforming
              lives for over 15 years. What started as a small operation has grown into a trusted name in water
              softening solutions across the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand the frustration of dealing with hard water problems. That's why we've dedicated ourselves
              to providing cutting-edge water softening systems that are reliable, efficient, and affordable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of certified professionals brings decades of combined experience, ensuring every installation
              meets the highest standards of quality and performance.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 mb-20 text-white">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                To become the most trusted water softening company, making soft water accessible to every home
                and business, while setting new standards in quality, service, and innovation.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                To deliver superior water softening solutions that improve health, protect investments, and enhance
                quality of life through advanced technology, exceptional service, and unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
