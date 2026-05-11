import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-space-800 border-t border-aviation-blue/15">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-aviation-blue via-aviation-sky to-danger" />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="border-l-2 border-danger pl-4 mb-6">
              <span className="font-display text-4xl text-white tracking-widest block">5X5</span>
              <span className="font-body text-aviation-sky text-sm tracking-[0.2em] uppercase">FLIGHT ACADEMY</span>
            </div>
            <p className="text-silver text-sm leading-relaxed mb-5">
              Elite flight training in Conroe, Texas. Where precision meets passion in the skies.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-radar rounded-full animate-pulse" />
              <span className="monospace-display">KCXO · CONROE, TEXAS</span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-body text-aviation-sky text-xs uppercase tracking-[0.2em] mb-5 font-semibold">Programs</h4>
            <ul className="space-y-3">
              {['Private Pilot Certificate','Instrument Rating','Commercial Pilot','Multi-Engine Rating','CFI Program','Ground School'].map((p) => (
                <li key={p}>
                  <Link href="/programs" className="text-silver text-sm hover:text-white transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h4 className="font-body text-aviation-sky text-xs uppercase tracking-[0.2em] mb-5 font-semibold">Academy</h4>
            <ul className="space-y-3">
              {['About Us','Our Fleet','Instructors','Student Success','Admissions','Contact'].map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-silver text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-aviation-sky text-xs uppercase tracking-[0.2em] mb-5 font-semibold">Contact</h4>
            <div className="space-y-3 text-sm text-silver">
              <p>Conroe North Houston<br/>Regional Airport (KCXO)</p>
              <p>Conroe, Texas</p>
              <a href="mailto:fly@fivexfiveflight.com" className="text-aviation-sky hover:text-white transition-colors block">
                fly@fivexfiveflight.com
              </a>
              <Link
                href="/admissions"
                className="inline-block mt-4 px-5 py-2.5 bg-danger hover:bg-danger-light text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-aviation-blue/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver/40 text-sm">
            © {new Date().getFullYear()} Five X Five Flight Academy. All rights reserved.
          </p>
          <span className="font-display text-aviation-blue/40 text-xl tracking-widest">FIVE X FIVE</span>
        </div>
      </div>
    </footer>
  )
}
