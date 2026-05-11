import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Fleet | Five x Five Flight Academy',
  description: 'Modern, well-maintained training aircraft at Five x Five Flight Academy — Cessna 172s, Piper Arrows, and twin-engine trainers.',
}

const fleet = [
  {
    model: 'Cessna 172 Skyhawk',
    tail: 'N4872S / N3190J',
    role: 'Primary Trainer',
    img: 'https://images.unsplash.com/photo-1570914827750-3c9a3dd78044?w=900&q=80',
    engine: 'Lycoming IO-360 (180 HP)',
    avionics: 'Garmin G1000 Glass Panel',
    range: '640 nm',
    ceiling: '14,000 ft',
    programs: ['Private Pilot', 'Instrument Rating', 'Commercial (PVT)'],
    desc: 'The most popular training aircraft in the world. Our two 172s feature full Garmin G1000 avionics suites, giving students hands-on experience with modern glass cockpit technology from day one.',
  },
  {
    model: 'Piper PA-28R Arrow',
    tail: 'N8144X',
    role: 'Complex / Commercial',
    img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80',
    engine: 'Lycoming IO-360 (200 HP)',
    avionics: 'Garmin GTN 650 + Aspen PFD',
    range: '900 nm',
    ceiling: '16,800 ft',
    programs: ['Commercial Pilot', 'Complex Endorsement'],
    desc: 'With retractable gear, constant-speed prop, and fuel injection, the Arrow gives students the complex endorsement required for commercial certificates. A significant step up from fixed-gear trainers.',
  },
  {
    model: 'Piper PA-44 Seminole',
    tail: 'N2219P',
    role: 'Multi-Engine',
    img: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=80',
    engine: '2x Lycoming O-360 (180 HP ea.)',
    avionics: 'Garmin G500 + GTN 750',
    range: '920 nm',
    ceiling: '15,000 ft',
    programs: ['Multi-Engine Rating', 'MEI Training'],
    desc: 'Our twin-engine Seminole is the industry standard for multi-engine training. Counter-rotating engines simplify single-engine emergency procedures, making it ideal for MEL and MEI candidates.',
  },
]

export default function Fleet() {
  return (
    <main className="bg-space min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-danger" />
            <span className="font-display text-danger text-xs tracking-[0.4em] uppercase">Training Aircraft</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wider leading-none mb-4">OUR FLEET</h1>
          <p className="text-silver text-lg max-w-2xl">
            Modern, meticulously maintained aircraft equipped with current avionics. Learn in the same glass-panel technology used by regional airlines.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {fleet.map((a, i) => (
              <div key={a.model} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden group ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image src={a.img} alt={a.model} width={600} height={420} className="object-cover w-full h-72 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-space/70 to-transparent" />
                  <div className="absolute top-4 left-4 hud-bracket-tl w-6 h-6 opacity-60" />
                  <div className="absolute top-4 right-4 hud-bracket-tr w-6 h-6 opacity-60" />
                  <div className="absolute bottom-4 left-4 hud-bracket-bl w-6 h-6 opacity-60" />
                  <div className="absolute bottom-4 right-4 hud-bracket-br w-6 h-6 opacity-60" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 monospace-display text-xs opacity-80">{a.tail}</div>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <span className="font-display text-danger text-xs tracking-[0.4em] uppercase block mb-2">{a.role}</span>
                  <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-2">{a.model}</h2>
                  <p className="text-silver leading-relaxed mb-6">{a.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'Engine', val: a.engine },
                      { label: 'Avionics', val: a.avionics },
                      { label: 'Range', val: a.range },
                      { label: 'Service Ceiling', val: a.ceiling },
                    ].map(spec => (
                      <div key={spec.label} className="border border-aviation-blue/10 p-3">
                        <div className="font-display text-danger text-xs tracking-widest uppercase mb-1">{spec.label}</div>
                        <div className="text-silver text-sm">{spec.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="font-display text-white text-xs tracking-widest uppercase mb-3">Used For</div>
                    <div className="flex flex-wrap gap-2">
                      {a.programs.map(p => (
                        <span key={p} className="text-xs px-3 py-1 border border-danger/30 text-danger font-display uppercase tracking-wider">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border border-danger/20 p-12 text-center">
            <div className="font-display text-danger text-xs tracking-[0.4em] uppercase mb-3">KCXO · Conroe, Texas</div>
            <h3 className="font-display text-4xl text-white uppercase tracking-wider mb-4">Ready to Fly?</h3>
            <p className="text-silver mb-8">Schedule a discovery flight and get in the cockpit within days.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-danger text-white font-display uppercase tracking-widest text-sm hover:bg-red-700 transition-all">
              Schedule Discovery Flight
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
