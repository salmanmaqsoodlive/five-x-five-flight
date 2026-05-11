'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 2000, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const programs = [
  { code: 'PPL', title: 'Private Pilot', hours: '40+', price: 'From $8,500', desc: 'Your entry into the world of aviation. Learn to fly solo and cross-country.' },
  { code: 'IFR', title: 'Instrument Rating', hours: '50+', price: 'From $6,500', desc: 'Fly through clouds and low visibility conditions with precision.' },
  { code: 'CPL', title: 'Commercial Pilot', hours: '250', price: 'From $18,000', desc: 'Fly professionally and get paid to do what you love.' },
  { code: 'MEL', title: 'Multi-Engine', hours: '10+', price: 'From $3,500', desc: 'Add multi-engine rating to your certificate and expand your capabilities.' },
  { code: 'CFI', title: 'Flight Instructor', hours: '25+', price: 'From $4,500', desc: 'Share your passion and teach the next generation of pilots.' },
  { code: 'GND', title: 'Ground School', hours: '40', price: 'From $650', desc: 'Comprehensive ground training for FAA written exams.' },
]

const fleet = [
  { name: 'Cessna 172 Skyhawk', type: 'Primary Trainer', year: '2019', img: 'https://images.unsplash.com/photo-1582638948820-e25b7948d3cb?w=800&q=80', specs: '160 HP · 4 Seats · VFR/IFR Equipped' },
  { name: 'Piper PA-28 Arrow', type: 'Complex Aircraft', year: '2018', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80', specs: '200 HP · Retractable · IFR Certified' },
  { name: 'Piper PA-44 Seminole', type: 'Multi-Engine', year: '2020', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80', specs: '2x 180 HP · Twin Engine · IFR' },
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="overflow-x-hidden bg-space">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Aircraft on runway"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-900/70 via-space-900/60 to-space-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-space-900/50 to-transparent" />
        </div>

        {/* Scanlines */}
        <div className="scanlines z-[1]" />

        {/* HUD brackets */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="hud-bracket-tl" />
          <div className="hud-bracket-tr" />
          <div className="hud-bracket-bl" />
          <div className="hud-bracket-br" />
        </div>

        {/* HUD displays */}
        <div className="absolute top-24 right-8 z-[3] hidden lg:flex flex-col gap-3">
          {[
            { label: 'ALT', value: '5,500 FT' },
            { label: 'SPD', value: '120 KTS' },
            { label: 'HDG', value: '270°' },
          ].map((item) => (
            <div key={item.label} className="border border-aviation-blue/25 bg-space-900/70 px-4 py-2.5 backdrop-blur-sm">
              <div className="monospace-display text-xs opacity-60 mb-0.5">{item.label}</div>
              <div className="monospace-display text-sm">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-[4] container mx-auto px-6 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-danger rounded-full animate-pulse" />
            <span className="font-body text-danger text-xs tracking-[0.35em] uppercase font-semibold">Conroe, Texas • KCXO</span>
          </motion.div>

          {['FIVE X FIVE', 'FLIGHT', 'ACADEMY'].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={loaded ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.2 }}
                className={`font-display text-6xl sm:text-8xl md:text-[7rem] uppercase leading-none tracking-widest ${
                  i === 1 ? 'text-aviation-gradient' : 'text-white'
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1 }}
            className="font-body text-silver text-lg max-w-xl mt-6 mb-10 tracking-wide"
          >
            Elite flight training where precision meets passion. From first flight to commercial certificate — we train pilots who are ready for anything.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-danger hover:bg-danger-light text-white font-body font-bold text-sm uppercase tracking-widest transition-all shadow-danger-glow hover:-translate-y-0.5"
            >
              APPLY NOW
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 ml-2"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 border border-aviation-blue/40 text-aviation-sky hover:text-white hover:border-aviation-sky font-body font-bold text-sm uppercase tracking-widest transition-all"
            >
              View Programs
            </Link>
          </motion.div>

          {/* Callsign */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="mt-14 monospace-display text-xs"
          >
            5X5 · LOUD AND CLEAR · KCXO · CONROE, TEXAS
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <div className="py-12 bg-space-800 border-y border-aviation-blue/15">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: 500, suf: '+', label: 'GRADUATES' },
              { val: 15000, suf: '+', label: 'FLIGHT HOURS' },
              { val: 98, suf: '%', label: 'PASS RATE' },
              { val: 10, suf: '+', label: 'YEARS TRAINING' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-aviation-sky mb-1">
                  <AnimatedCounter target={s.val} suffix={s.suf} />
                </div>
                <div className="font-body text-silver/60 text-xs tracking-[0.2em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROGRAMS */}
      <section className="py-24 bg-space">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-aviation-sky" />
              <span className="font-body text-aviation-sky text-xs tracking-[0.3em] uppercase font-semibold">Training Options</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-wider">FLIGHT PROGRAMS</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="program-card p-7 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="monospace-display text-aviation-blue/60 text-sm">{prog.code}</span>
                  <span className="font-body text-danger text-sm font-bold">{prog.price}</span>
                </div>
                <h3 className="font-display text-3xl text-white uppercase tracking-widest mb-2">{prog.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-aviation-sky rounded-full" />
                  <span className="font-body text-silver/60 text-sm">{prog.hours} Hours</span>
                </div>
                <p className="font-body text-silver/50 text-sm leading-relaxed">{prog.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-aviation-sky/0 group-hover:text-aviation-sky transition-colors text-xs font-body uppercase tracking-widest">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 border border-aviation-blue/30 text-aviation-sky hover:text-white hover:border-aviation-sky font-body text-sm uppercase tracking-widest transition-all">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="py-24 bg-space-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-5xl text-white uppercase tracking-wider">OUR FLEET</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleet.map((aircraft, i) => (
              <motion.div
                key={aircraft.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer overflow-hidden bg-space-700 border border-aviation-blue/10 hover:border-aviation-blue/30 transition-all"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={aircraft.img}
                    alt={aircraft.name}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-700 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 border border-aviation-blue/30 bg-space-900/70 px-2 py-1 backdrop-blur-sm">
                    <span className="monospace-display text-xs">{aircraft.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-aviation-sky/60 text-xs font-body uppercase tracking-widest mb-1">{aircraft.type}</div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{aircraft.name}</h3>
                  <p className="monospace-display text-xs opacity-70">{aircraft.specs}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-space relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=80" alt="Airport" fill className="object-cover" />
          <div className="absolute inset-0 bg-space/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-5xl text-white uppercase tracking-wider mb-6">CONROE, TEXAS</h2>
              <p className="font-body text-silver leading-relaxed mb-6">
                Located at Conroe North Houston Regional Airport (KCXO), Five X Five Flight offers ideal training conditions year-round with excellent VFR weather and diverse airspace.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Airport', value: 'KCXO — Conroe North Houston Regional' },
                  { label: 'Location', value: 'Conroe, Texas' },
                  { label: 'Weather', value: '300+ VFR Days / Year' },
                  { label: 'Airspace', value: 'Class G/E with Class B nearby' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 items-center border-b border-aviation-blue/10 pb-3">
                    <span className="monospace-display text-xs w-24 flex-shrink-0 opacity-60">{item.label}</span>
                    <span className="font-body text-white text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              {/* Radar widget */}
              <div className="w-64 h-64 mx-auto relative">
                <div className="w-full h-full rounded-full border-2 border-radar/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-radar/15 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-radar/10 flex items-center justify-center">
                      <div className="w-2 h-2 bg-radar rounded-full shadow-radar-glow" />
                    </div>
                  </div>
                </div>
                {/* Sweep */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden animate-radar-spin origin-center"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.6))' }}
                  />
                </div>
                {/* Blips */}
                <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-radar rounded-full shadow-radar-glow animate-pulse" />
                <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-radar rounded-full shadow-radar-glow animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-radar/60 rounded-full" />
                <div className="absolute text-center w-full -bottom-10 monospace-display text-xs opacity-60">KCXO CONROE</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-space-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-glow" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="monospace-display text-sm mb-4">CLEARED FOR TAKEOFF</div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-widest mb-6">
              READY FOR TAKEOFF?
            </h2>
            <p className="font-body text-silver text-lg mb-10 max-w-xl mx-auto">
              Begin your aviation journey today. Apply now and take your first step toward the skies.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-3 px-10 py-5 bg-danger hover:bg-danger-light text-white font-display uppercase tracking-widest text-sm transition-all shadow-danger-glow hover:-translate-y-1"
            >
              APPLY NOW
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
