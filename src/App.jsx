import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ReviewsMarquee from './components/ReviewsMarquee';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ReviewsMarquee />
      </main>
    </div>
  );
}

export default App;
