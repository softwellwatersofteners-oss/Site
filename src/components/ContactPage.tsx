import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const whatsappMessage = `New Contact Form Submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
    const whatsappNumber = '919392052243';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    try {
      window.open(whatsappUrl, '_blank');
      alert('Redirecting to WhatsApp...');
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-16 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team. We're here to help with all your water softening needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  placeholder="+91 9392052243"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your water softening needs..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 9392052243</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      softwellwatersofteners@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Plot No.18, Second Floor, Venkateswar Colony,<br />
                      Sri Laxmi Narayana Nilayam, Uppal,<br />
                      Medchal Malkajgiri, Hyderabad, Telangana, 500039
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday - Sunday: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Emergency Service</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base leading-relaxed">
                Need urgent assistance? Our emergency service team is available 24/7 for critical issues.
              </p>
              <a
                href="tel:+919392052243"
                className="inline-block bg-white text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="h-64 sm:h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3806.492154472049!2d78.5611397!3d17.3988761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Softwell Water Softeners Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
