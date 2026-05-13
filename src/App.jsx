import Header from './components/Header';
import FeatureCards from './components/FeatureCards';
import NotifyCard from './components/NotifyCard';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-container">
      <Header />
      <main className="hero" id="hero">
        <section className="hero__content">
          <h1 className="hero__title">
            We <span className="hero__title-accent">Build</span>, What You Think
          </h1>
          <p className="hero__subtitle">
            We build high-performance web apps, SaaS platforms, UI/UX designs, 
            and digital experiences that help businesses grow, scale, 
            and lead in the digital world.
          </p>
          
          <FeatureCards />
          <NotifyCard />
          <ContactInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
