import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EUGIv8h3muIGWcxR/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft gradient overlays for depth; pointer-events disabled to keep scene interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 md:pt-40">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            New: Real-time portfolio insights
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Secure your finances with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">FinVault</span>
          </h1>
          <p className="mt-5 text-lg text-white/80">
            A modern, secure vault for all your financial assets. Monitor, automate, and grow your wealth with enterprise-grade protection.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 text-white font-semibold px-5 py-3 backdrop-blur-xl transition">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="#learn-more" className="inline-flex items-center gap-2 rounded-xl border border-white/15 hover:border-white/25 text-white/90 px-5 py-3 backdrop-blur-xl bg-black/30 transition">
              Learn More
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-white/80">
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              Bank-grade encryption
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              24/7 monitoring
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} className="text-orange-500" />
              Seamless integrations
            </div>
          </div>
        </div>

        {/* Liquid glass stat panel */}
        <div className="mt-10 md:mt-14 max-w-xl">
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl p-5 text-white/90">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/70">Portfolio growth</div>
                <div className="mt-1 text-2xl font-bold text-white">+18.4%</div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-white/70">Risk</div>
                <div className="mt-1 text-2xl font-bold text-orange-500">Low</div>
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" style={{ width: '68%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
