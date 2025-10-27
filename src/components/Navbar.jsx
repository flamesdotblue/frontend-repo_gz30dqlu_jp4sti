import { Rocket, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 grid place-items-center">
            <Shield size={18} className="text-black" />
          </div>
          <span className="font-semibold tracking-tight text-lg">Fin<span className="text-orange-500">Vault</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-white/80 hover:text-white transition">Log in</button>
          <button className="inline-flex items-center gap-2 rounded-md bg-orange-600 hover:bg-orange-500 text-black font-medium px-4 py-2 text-sm transition">
            Get Started
            <Rocket size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}
