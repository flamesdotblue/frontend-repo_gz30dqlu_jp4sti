import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amelia R.',
    role: 'CFO, Horizon Labs',
    text: 'FinVault feels like liquid glass – smooth, fast, and incredibly secure. Our audits are a breeze now.'
  },
  {
    name: 'Daniel K.',
    role: 'Founder, Oak & Co',
    text: 'The UI is stunning and responsive. We cut reconciliation time by 40% the first month.'
  },
  {
    name: 'Priya S.',
    role: 'Head of Finance, Nova',
    text: 'Bank‑grade controls with consumer‑grade polish. Our team actually enjoys using it.'
  },
  {
    name: 'Leo M.',
    role: 'CTO, Quanta',
    text: 'Integrations were seamless and the insights are spot on. Five stars across the board.'
  },
  {
    name: 'Sofia L.',
    role: 'COO, Northwind',
    text: 'Beautiful, reliable, and secure. The best fintech dashboard experience we have used.'
  }
];

function ReviewCard({ name, role, text }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return (
    <div className="shrink-0 w-[360px] md:w-[420px]">
      <div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 md:p-6">
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 text-white grid place-items-center font-semibold">
            {initials}
          </div>
          <div className="">
            <div className="text-sm font-medium text-white">{name}</div>
            <div className="text-xs text-white/60">{role}</div>
          </div>
          <div className="ml-auto flex items-center gap-0.5 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" className="text-orange-400" />
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{text}</p>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  // Duplicate list to create continuous marquee effect
  const row = [...reviews, ...reviews];
  return (
    <section className="relative bg-black py-16 border-t border-white/10">
      <style>{`
        @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            What customers say
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trusted by modern finance teams</h2>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="[animation:marqueeLeft_28s_linear_infinite] hover:[animation-play-state:paused] flex w-[200%] gap-6 will-change-transform">
          {row.map((r, i) => (
            <ReviewCard key={`row1-${i}-${r.name}`} {...r} />
          ))}
        </div>
        <div className="mt-6 [animation:marqueeRight_32s_linear_infinite] hover:[animation-play-state:paused] flex w-[200%] gap-6 will-change-transform">
          {row.map((r, i) => (
            <ReviewCard key={`row2-${i}-${r.name}`} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
