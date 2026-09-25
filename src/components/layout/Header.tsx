export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-navy/80 backdrop-blur border-b border-brand-cyan/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-cyan">GTM Agents</h1>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="hover:text-brand-cyan transition">Product</a>
          <a href="#faq" className="hover:text-brand-cyan transition">FAQ</a>
          <a href="#pricing" className="hover:text-brand-cyan transition">Pricing</a>
        </nav>
        <button className="px-6 py-2 bg-brand-cyan text-brand-navy font-bold rounded-lg hover:shadow-lg hover:shadow-brand-cyan/50 transition">
          Start Free Trial
        </button>
      </div>
    </header>
  )
}
