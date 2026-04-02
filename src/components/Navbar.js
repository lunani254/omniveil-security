'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,12,23,0.95)] backdrop-blur-md border-b border-[rgba(0,229,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width="34" height="34" viewBox="0 0 90 90" fill="none">
            <defs>
              <radialGradient id="nlg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="45" cy="45" r="42" fill="url(#nlg)" />
            <polygon
              points="45,5 80,25 80,65 45,85 10,65 10,25"
              stroke="#00e5ff"
              strokeWidth="1.5"
              opacity="0.35"
            />
            <circle cx="45" cy="45" r="28" fill="#001522" />
            <circle cx="45" cy="45" r="28" stroke="#00e5ff" strokeWidth="2" opacity="0.85" />
            <circle cx="45" cy="45" r="8" fill="#00e5ff" />
            <circle cx="45" cy="45" r="3.5" fill="white" />
            <line x1="17" y1="45" x2="30" y2="45" stroke="#00e5ff" strokeWidth="1.2" opacity="0.6" />
            <line x1="60" y1="45" x2="73" y2="45" stroke="#00e5ff" strokeWidth="1.2" opacity="0.6" />
            <line x1="45" y1="17" x2="45" y2="30" stroke="#00e5ff" strokeWidth="1.2" opacity="0.6" />
            <line x1="45" y1="60" x2="45" y2="73" stroke="#00e5ff" strokeWidth="1.2" opacity="0.6" />
          </svg>
          <div>
            <div className="font-black tracking-[4px] text-[15px] leading-none text-white">
              OMNIVEIL
            </div>
            <div
              className="text-[8px] text-[#00e5ff] tracking-[5px] leading-none mt-1"
              style={{ fontWeight: 300 }}
            >
              SECURITY
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[2px] text-gray-500 uppercase">
          <a href="#services" className="hover:text-[#00e5ff] transition-colors duration-200">Services</a>
          <a href="#products" className="hover:text-[#00e5ff] transition-colors duration-200">Products</a>
          <a href="#why" className="hover:text-[#00e5ff] transition-colors duration-200">Why Us</a>
          <a href="#contact" className="hover:text-[#00e5ff] transition-colors duration-200">Contact</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+254700000000"
            className="hidden md:block text-[11px] tracking-[1px] text-gray-500 hover:text-[#00e5ff] transition-colors duration-200"
          >
            +254 700 000 000
          </a>
          <Link
            href="/products"
            className="text-[11px] tracking-[2px] uppercase bg-[#00e5ff] text-[#080c17] font-black px-5 py-2.5 hover:opacity-90 transition-opacity duration-200"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}