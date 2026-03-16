import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Tech from '../components/home/Tech';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}