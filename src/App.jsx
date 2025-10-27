import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewsMarquee from './components/ReviewsMarquee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <ReviewsMarquee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
