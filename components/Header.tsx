import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#0a0f1d] border-b border-gray-800 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo và tên thương hiệu */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="StackEvalify Logo" 
            className="h-8 w-auto object-contain" 
          />
          <span className="text-white font-bold text-lg tracking-tight">
            StackEvalify
          </span>
        </Link>

        {/* Các liên kết điều hướng mẫu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Nút trạng thái */}
        <div>
          <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1.5 rounded-full font-medium">
            ✓ Verified Tech Evaluator
          </span>
        </div>
      </div>
    </header>
  );
}
