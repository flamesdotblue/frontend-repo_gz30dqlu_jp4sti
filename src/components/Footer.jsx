export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} FinVault. All rights reserved.</p>
        <div className="text-white/60 text-sm flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#security" className="hover:text-white transition">Security</a>
        </div>
      </div>
    </footer>
  );
}
