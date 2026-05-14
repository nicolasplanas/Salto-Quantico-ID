import Header   from '../../components/common/Header/Header';
import Hero     from '../../components/home/Hero/Hero';
import About    from '../../components/home/About/About';
import Services from '../../components/home/Services/Services';
import Tech     from '../../components/home/Tech/Tech';
import Contact  from '../../components/home/Contact/Contact';
import Footer   from '../../components/common/Footer/Footer';

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