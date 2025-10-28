import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import TechnologyPage from './components/TechnologyPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <TechnologyPage />
      <ContactPage />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
