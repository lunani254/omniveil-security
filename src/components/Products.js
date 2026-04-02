import Link from 'next/link'

const PRODUCTS = [
  {
    id: 1,
    code: 'OV-101',
    name: 'Indoor WiFi Dome',
    category: 'WIFI / INDOOR',
    desc: 'Compact wireless dome for homes, offices and retail spaces. Zero blind spots, instant setup.',
    specs: ['2MP Full HD', 'Night Vision', 'WiFi 2.4GHz', 'Motion Alerts'],
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
  },
  {
    id: 2,
    code: 'OV-202',
    name: 'Outdoor Bullet Camera',
    category: 'IR / OUTDOOR',
    desc: 'Weatherproof casing with long-range infrared night vision. Built for perimeter defence.',
    specs: ['4MP Ultra HD', 'IR Range 30m', 'IP67 Rated', 'Smart Detection'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 3,
    code: 'OV-303',
    name: 'PTZ Speed Dome',
    category: 'PTZ / 360',
    desc: 'Intelligent pan-tilt-zoom with auto-tracking. Follows movement across your property automatically.',
    specs: ['4MP', '360 Coverage', 'Auto-Track', '25x Optical Zoom'],
    img: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
  },
  {
    id: 4,
    code: 'OV-404',
    name: '4K Ultra HD Bullet',
    category: '4K / ENTERPRISE',
    desc: 'Cinema-grade 8MP clarity. Read plates, identify faces, capture everything in perfect detail.',
    specs: ['8MP 4K', 'ColorVu', 'IR Range 50m', 'H.265+ Codec'],
    img: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&q=80',
  },
  {
    id: 5,
    code: 'OV-505',
    name: 'Night Vision Turret',
    category: 'HYBRID / OUTDOOR',
    desc: 'Smart hybrid lighting switches between full-colour and IR automatically at dusk.',
    specs: ['2MP', 'Smart IR', 'Full Colour Night', 'Turret Form'],
    img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
  },
  {
    id: 6,
    code: 'OV-606',
    name: '360 Fisheye Camera',
    category: '360 / INDOOR',
    desc: 'One camera. Entire room. No blind spots, no excuses. Built for retail and warehouses.',
    specs: ['6MP', '360 Panoramic', 'Dewarping', 'Wide-Angle Lens'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

export default function Products({ inView }) {
  return (
    <section id="products" className="py-28 px-6 bg-[#080c17]">
      <div className="max-w-7xl mx-auto">

        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <div className="text-[10px] tracking-[5px] text-[#00e5ff] uppercase font-mono mb-4">
              Product Range
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] font-black leading-tight tracking-tight text-white">
              Every Angle.<br />Every Environment.
            </h2>
          </div>
          <Link
            href="/products"
            className="self-start md:self-auto border border-[rgba(0,229,255,0.2)] text-[#00e5ff] text-[10px] tracking-[3px] uppercase px-6 py-3 hover:bg-[rgba(0,229,255,0.06)] transition-colors duration-200 font-mono whitespace-nowrap"
          >
            View Full Catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(0,229,255,0.06)]">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className={`relative bg-[#080c17] group overflow-hidden hover:bg-[#0d1425] transition-colors duration-300 ${inView ? `animate-scale-in delay-${(i + 1) * 100}` : 'opacity-0'}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, #080c17, rgba(8,12,23,0.3), transparent)' }}
                />

                {/* Camera code */}
                <div className="absolute top-3 left-3 font-mono text-[9px] text-[#00e5ff] opacity-60 tracking-widest">
                  {p.code}
                </div>

                {/* Category */}
                <div className="absolute top-3 right-3 border border-[rgba(0,229,255,0.25)] bg-[rgba(8,12,23,0.75)] text-[#00e5ff] font-mono text-[8px] tracking-widest px-2 py-1">
                  {p.category}
                </div>

                {/* Corner brackets on hover */}
                <svg className="absolute top-0 left-0 w-8 h-8 text-[#00e5ff] opacity-0 group-hover:opacity-50 transition-opacity duration-300" viewBox="0 0 32 32" fill="none">
                  <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute top-0 right-0 w-8 h-8 text-[#00e5ff] opacity-0 group-hover:opacity-50 transition-opacity duration-300" viewBox="0 0 32 32" fill="none">
                  <path d="M32 16 L32 0 L16 0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute bottom-0 left-0 w-8 h-8 text-[#00e5ff] opacity-0 group-hover:opacity-50 transition-opacity duration-300" viewBox="0 0 32 32" fill="none">
                  <path d="M0 16 L0 32 L16 32" stroke="currentColor" strokeWidth="1" />
                </svg>
                <svg className="absolute bottom-0 right-0 w-8 h-8 text-[#00e5ff] opacity-0 group-hover:opacity-50 transition-opacity duration-300" viewBox="0 0 32 32" fill="none">
                  <path d="M32 16 L32 32 L16 32" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-black text-lg tracking-wide mb-2 text-white">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.specs.map((spec) => (
                    <span
                      key={spec}
                      className="border border-[rgba(0,229,255,0.12)] text-gray-500 font-mono text-[9px] tracking-[1px] px-2 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href="/products"
                  className="text-[10px] tracking-[3px] text-[#00e5ff] uppercase font-mono hover:opacity-70 transition-opacity duration-200 flex items-center gap-3"
                >
                  View and Order
                  <div className="w-8 h-px bg-[#00e5ff] group-hover:w-14 transition-all duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}