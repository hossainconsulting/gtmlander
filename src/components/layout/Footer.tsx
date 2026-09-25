export default function Footer() {
  return (
    <footer className="border-t border-brand-cyan/20 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6 text-sm text-gray-400">
        <p>&copy; 2026 Hossain Consulting · GTM Agents product concept</p>
        <nav aria-label="Footer" className="flex gap-6">
          <a href="#product">Product</a>
          <a href="#solution">Workflow</a>
          <a href="#pricing">Proposed plans</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </footer>
  )
}
