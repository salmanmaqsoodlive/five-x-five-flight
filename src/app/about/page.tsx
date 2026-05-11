import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Five x Five Flight Academy',
  description: 'FAA-approved flight training academy in Conroe, Texas. Learn who we are, our mission, and our instructors.',
}

const team = [
  { name: 'Capt. James Holloway', cert: 'ATP, CFI, CFII, MEI', hours: '12,000+', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Former Air Force pilot with 12,000+ flight hours. Specializes in commercial and ATP-level training.' },
  { name: 'Lt. Sarah Morrow', cert: 'ATP, CFII, MEI', hours: '8,500+', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Regional airline captain and instrument rating expert. Brings real-world airline experience to every lesson.' },
  { name: 'David Reyes', cert: 'CPL, CFI, CFII', hours: '4,200+', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'Passionate about training first-time students. Specializes in private pilot and instrument certification.' },
  { name: 'Maria Chen', cert: 'CFI, Ground Instructor', hours: '2,800+', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Ground school expert and CFI. Known for making complex aerodynamics and regulations easy to understand.' },
]

const values = [
  { label: 'Safety First', desc: 'Every decision — from aircraft maintenance to training protocol — prioritizes safety above all else.' },
  { label: 'FAA Standards', desc: 'Our curriculum meets and exceeds FAA requirements. Every graduate is ready for certification on their first attempt.' },
  { label: 'Real-World Ready', desc: 'We train for the skies you\'ll actually fly — not just the checkride. Practical skills for real conditions.' },
  { label: 'Student Success', desc: 'Our pass rate exceeds national averages. We don\'t release students until they\'re truly ready.' },
]

export default function About() {
  return (
    <main className="bg-space min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-danger" />
            <span className="font-display text-danger text-xs tracking-[0.4em] uppercase">Our Story</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wider leading-none mb-4">ABOUT</h1>
          <p className="text-silver text-lg max-w-2xl">
            Founded by pilots, built for pilots. Five x Five Flight Academy exists to produce the next generation of confident, capable aviators.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="font-display text-danger text-xs tracking-[0.4em] uppercase mb-4">Our Mission</div>
              <h2 className="font-display text-4xl text-white uppercase tracking-wider mb-6">Five by Five.</h2>
              <p className="text-silver leading-relaxed mb-4">
                "Five by Five" — aviation slang for a perfect radio signal, loud and clear. That's our standard for every graduate: clear thinking, clear communication, total readiness.
              </p>
              <p className="text-silver leading-relaxed mb-4">
                Founded at Lone Star Executive Airport (KCXO) in Conroe, Texas, we've trained hundreds of pilots from zero experience to professional certificates. Our FAA-approved curriculum is built around real-world flying, not just checkride preparation.
              </p>
              <p className="text-silver leading-relaxed">
                Whether you're pursuing a career in commercial aviation or flying for the love of it, we have the programs, aircraft, and instructors to get you there.
              </p>
            </div>
            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" alt="Aircraft cockpit" width={600} height={450} className="object-cover w-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-space/60 to-transparent" />
              <div className="absolute top-4 left-4 hud-bracket-tl w-8 h-8" />
              <div className="absolute top-4 right-4 hud-bracket-tr w-8 h-8" />
              <div className="absolute bottom-4 left-4 hud-bracket-bl w-8 h-8" />
              <div className="absolute bottom-4 right-4 hud-bracket-br w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {values.map(v => (
              <div key={v.label} className="program-card border border-aviation-blue/10 p-5">
                <div className="font-display text-danger text-xs tracking-[0.3em] uppercase mb-3">{v.label}</div>
                <p className="text-silver text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-4xl text-white uppercase tracking-wider text-center mb-12">Our Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {team.map(m => (
              <div key={m.name} className="program-card border border-aviation-blue/10 group">
                <div className="relative overflow-hidden">
                  <Image src={m.img} alt={m.name} width={300} height={300} className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-space/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-white uppercase tracking-wider text-sm mb-1">{m.name}</h3>
                  <div className="font-display text-danger text-xs tracking-widest uppercase mb-1">{m.cert}</div>
                  <div className="text-silver text-xs mb-3">{m.hours} hours</div>
                  <p className="text-silver/70 text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-danger text-white font-display uppercase tracking-widest text-sm hover:bg-red-700 transition-all">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
