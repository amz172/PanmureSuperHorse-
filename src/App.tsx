import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-warm-50 font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
