export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-cyan/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-cyan transition">Features</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition">Pricing</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition">Demo</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-cyan transition">About</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition">Blog</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-cyan transition">Privacy</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition">Terms</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-cyan transition">Twitter</a></li>
            <li><a href="#" className="hover:text-brand-cyan transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-cyan/20 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 Hossain Consulting. All rights reserved.</p>
      </div>
    </footer>
  )
}
