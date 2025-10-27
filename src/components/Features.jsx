import { Shield, CreditCard, BarChart3, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bank‑grade Security',
    desc: 'Multi-layer encryption, biometrics, and real-time threat detection keep your assets safe.'
  },
  {
    icon: CreditCard,
    title: 'Smart Cards',
    desc: 'Virtual and physical cards with dynamic limits, spend controls, and instant freezes.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    desc: 'AI-powered analytics to forecast cash flow and optimize your portfolio performance.'
  },
  {
    icon: Lock,
    title: 'Zero‑Trust Access',
    desc: 'Role-based permissions and hardware key support for uncompromising control.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20 border-t border-white/10">
      {/* subtle orange glow background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(234,88,12,0.08),transparent_60%),radial-gradient(500px_circle_at_80%_20%,rgba(234,88,12,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Product
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Built for modern finance</h2>
          <p className="mt-3 text-white/70">Everything you need to secure, manage, and scale your financial operations.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition hover:border-orange-500/50 hover:bg-white/[0.06]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_-20px_rgba(234,88,12,0.45)]" />
              <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 grid place-items-center mb-4">
                <f.icon className="text-orange-500" size={20} />
              </div>
              <h3 className="relative text-white font-semibold">{f.title}</h3>
              <p className="relative mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
