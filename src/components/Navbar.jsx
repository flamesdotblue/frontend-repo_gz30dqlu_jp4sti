import { Rocket, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 supports-[backdrop-filter]:bg-black/40 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 grid place-items-center shadow-[0_0_40px_-10px_rgba(234,88,12,0.7)]">
            <Shield size={18} className="text-black" />
          </div>
          <span className="font-semibold tracking-tight text-lg">Fin<span className="text-orange-500">Vault</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#get-started" className="hover:text-white transition">Get Started</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-white/80 hover:text-white transition">Log in</button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 text-white font-medium px-4 py-2 text-sm transition backdrop-blur-xl">
            Get Started
            <Rocket size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}
