import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Placeholder anchor sections for nav links */}
        <section id="security" className="bg-black py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Security you can trust</h2>
                <p className="mt-3 text-white/70">We combine encryption-at-rest, end-to-end TLS, and robust operational controls to keep your data safe. Every action is logged and monitored, with alerts for suspicious activity.</p>
                <ul className="mt-6 space-y-2 text-white/80 list-disc list-inside">
                  <li>ISO 27001 aligned practices</li>
                  <li>Hardware Security Module (HSM) support</li>
                  <li>Continuous backup and disaster recovery</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-black/40 border border-white/10 p-6">
                    <div className="text-3xl font-extrabold text-orange-500">99.99%</div>
                    <div className="text-sm text-white/70 mt-1">Uptime SLA</div>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-white/10 p-6">
                    <div className="text-3xl font-extrabold text-orange-500">AES‑256</div>
                    <div className="text-sm text-white/70 mt-1">Encryption</div>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-white/10 p-6">
                    <div className="text-3xl font-extrabold text-orange-500">24/7</div>
                    <div className="text-sm text-white/70 mt-1">Monitoring</div>
                  </div>
                  <div className="rounded-lg bg-black/40 border border-white/10 p-6">
                    <div className="text-3xl font-extrabold text-orange-500">SOC 2</div>
                    <div className="text-sm text-white/70 mt-1">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-black py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-white/10 p-8 bg-gradient-to-br from-orange-500/10 via-black to-black">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Start with FinVault today</h3>
                  <p className="text-white/70 mt-2 max-w-2xl">Simple, transparent pricing for teams of all sizes. Scale securely as your finances grow.</p>
                </div>
                <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-orange-600 hover:bg-orange-500 text-black font-semibold px-6 py-3 transition">
                  Create your vault
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
