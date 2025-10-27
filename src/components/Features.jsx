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
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for modern finance</h2>
          <p className="mt-3 text-white/70">Everything you need to secure, manage, and scale your financial operations.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-orange-500/50 transition">
              <div className="h-10 w-10 rounded-lg bg-orange-500/10 border border-orange-500/30 grid place-items-center mb-4">
                <f.icon className="text-orange-500" size={20} />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
