import Header from './components/Header';
import AnimatedWord from './components/AnimatedWord';
import NotifyCard from './components/NotifyCard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-container">
      <Header />
      <main className="hero" id="hero">
        <section className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-static">The Best Choice For</span>
            <AnimatedWord />
          </h1>
          <p className="hero__subtitle">
            We craft premium digital experiences — from blazing-fast web apps
            to scalable SaaS platforms. Something extraordinary is on the way.
          </p>
          <NotifyCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}
