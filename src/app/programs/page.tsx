import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Flight Programs | Five X Five Flight',
  description: 'Flight training programs at Five X Five Flight Academy in Conroe, Texas — Private Pilot, Instrument Rating, Commercial, Multi-Engine, and CFI.',
}

const programs = [
  {
    code: 'PPL',
    title: 'Private Pilot Certificate',
    hours: '40+',
    price: 'From $8,500',
    desc: 'Your entry point into the world of aviation. The Private Pilot Certificate allows you to fly single-engine aircraft day and night, carry passengers, and fly cross-country.',
    requirements: ['17 years old minimum', 'Third-class medical certificate', 'Pass FAA written exam', 'Pass checkride with DPE'],
    curriculum: ['Pre-flight procedures', 'Basic maneuvers', 'Navigation', 'Cross-country flying', 'Night operations', 'Emergency procedures'],
    duration: '3-6 months typical',
  },
  {
    code: 'IFR',
    title: 'Instrument Rating',
    hours: '50+',
    price: 'From $6,500',
    desc: 'Fly through clouds, low visibility, and challenging weather conditions with confidence. The Instrument Rating makes you a more versatile, capable, and safer pilot.',
    requirements: ['Private Pilot Certificate', 'Second-class medical', '50 hours PIC cross-country', 'Pass IFR written exam'],
    curriculum: ['IFR procedures', 'Approach procedures', 'En-route navigation', 'IFR charts and plates', 'ATC communication', 'Weather decision making'],
    duration: '2-4 months typical',
  },
  {
    code: 'CPL',
    title: 'Commercial Pilot Certificate',
    hours: '250',
    price: 'From $18,000',
    desc: 'Get paid to fly. The Commercial Pilot Certificate opens doors to professional aviation careers — from charter flights to corporate aviation and beyond.',
    requirements: ['Private Pilot Certificate', 'Second-class medical', '250 total flight hours', 'Pass CPL written exam'],
    curriculum: ['Commercial maneuvers', 'Complex aircraft operations', 'High-performance training', 'Advanced navigation', 'CRM and automation', 'Professional standards'],
    duration: '6-12 months typical',
  },
  {
    code: 'MEL',
    title: 'Multi-Engine Rating',
    hours: '10+',
    price: 'From $3,500',
    desc: 'Add multi-engine privileges to your existing certificate. Fly twins and expand your capabilities for professional and personal flying.',
    requirements: ['Private Pilot or higher', 'Current medical certificate', 'Pass multi-engine checkride'],
    curriculum: ['Multi-engine aerodynamics', 'Engine-out procedures', 'Seminole systems', 'Performance calculations', 'Emergency procedures'],
    duration: '1-2 weeks intensive',
  },
  {
    code: 'CFI',
    title: 'Certified Flight Instructor',
    hours: '25+',
    price: 'From $4,500',
    desc: 'Share your passion for aviation and help build the next generation of pilots. The CFI certificate is also an excellent path to building flight hours quickly.',
    requirements: ['Commercial Pilot Certificate', 'Instrument Rating', 'Pass FOI and FIA written exams', 'CFI practical test'],
    curriculum: ['Fundamentals of instruction', 'Teaching techniques', 'Spin training', 'Student evaluation', 'Endorsements', 'Logbook review'],
    duration: '1-3 months typical',
  },
  {
    code: 'GND',
    title: 'Advanced Ground School',
    hours: '40',
    price: 'From $650',
    desc: 'Comprehensive ground training program covering all FAA knowledge areas. Prepare for written exams and build the aeronautical knowledge every serious pilot needs.',
    requirements: ['No prerequisites', 'Any level pilot'],
    curriculum: ['Aerodynamics', 'Aircraft systems', 'Weather', 'Navigation', 'Regulations', 'Aeronautical decision making'],
    duration: '4-6 weeks part-time',
  },
]

export default function Programs() {
  return (
    <main className="bg-space min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="hud-bracket-tl absolute" style={{ top: 80, left: 24 }} />
        <div className="hud-bracket-tr absolute" style={{ top: 80, right: 24 }} />
        <div className="container mx-auto px-6">
          <div className="monospace-display text-xs mb-4 opacity-60">TRAINING CATALOG · KCXO · FIVE X FIVE FLIGHT</div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-widest mb-4">PROGRAMS</h1>
          <p className="font-body text-silver text-lg max-w-2xl">
            From your first flight to becoming a certified instructor — we have the program to get you there.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            {programs.map((prog, i) => (
              <div key={prog.code} className="program-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="monospace-display text-aviation-blue/60">{prog.code}</span>
                        <h2 className="font-display text-3xl text-white uppercase tracking-wider">{prog.title}</h2>
                      </div>
                    </div>
                    <p className="font-body text-silver leading-relaxed mb-6">{prog.desc}</p>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="monospace-display text-xs mb-3 opacity-60">REQUIREMENTS</h4>
                        <ul className="space-y-1">
                          {prog.requirements.map((r) => (
                            <li key={r} className="font-body text-silver/70 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-aviation-sky rounded-full" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="monospace-display text-xs mb-3 opacity-60">CURRICULUM</h4>
                        <ul className="space-y-1">
                          {prog.curriculum.map((c) => (
                            <li key={c} className="font-body text-silver/70 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-danger rounded-full" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="space-y-3 mb-6">
                      <div className="border border-aviation-blue/20 p-4">
                        <div className="monospace-display text-xs mb-1 opacity-60">FLIGHT HOURS</div>
                        <div className="font-display text-3xl text-white">{prog.hours}</div>
                      </div>
                      <div className="border border-aviation-blue/20 p-4">
                        <div className="monospace-display text-xs mb-1 opacity-60">INVESTMENT</div>
                        <div className="font-display text-2xl text-danger">{prog.price}</div>
                      </div>
                      <div className="border border-aviation-blue/20 p-4">
                        <div className="monospace-display text-xs mb-1 opacity-60">TIMELINE</div>
                        <div className="font-body text-white text-sm">{prog.duration}</div>
                      </div>
                    </div>
                    <Link href="/admissions" className="w-full py-3 bg-danger hover:bg-danger-light text-white font-body font-bold text-xs uppercase tracking-widest text-center transition-colors block">
                      APPLY FOR THIS PROGRAM
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
