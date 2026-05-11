'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Do I need any prior experience to enroll?', a: 'No experience is necessary for our Private Pilot program. We start from the very beginning — ground school, preflight, and your first flight lesson.' },
  { q: 'How long does it take to get a Private Pilot License?', a: 'Most students complete their PPL in 3–6 months flying 3-4 times per week. The FAA requires a minimum of 40 flight hours, though the national average is closer to 60–70 hours.' },
  { q: 'What are the medical requirements?', a: 'A 3rd Class Medical Certificate is required for private pilots. FAA BasicMed is also accepted. We can provide referrals to Aviation Medical Examiners (AMEs) in the area.' },
  { q: 'Can I finance my flight training?', a: 'Yes. We partner with several aviation financing programs including Pilot Finance and AOPA Finance. Payment plans are available for multi-program enrollments.' },
  { q: 'What happens if the weather is bad?', a: 'Safety is paramount. All flights may be rescheduled due to weather at no charge. Ground instruction or simulator time can often be substituted on weather days.' },
  { q: 'Do you offer accelerated or full-time programs?', a: 'Yes. Our accelerated tracks are designed for students who can fly 5+ days per week. Contact us to build a custom full-time training schedule.' },
]

const requirements = [
  { program: 'Private Pilot (PPL)', age: '17', english: 'Yes', medical: '3rd Class', hours: '40 min (avg 60–70)' },
  { program: 'Instrument Rating (IFR)', age: '17 (PPL required)', english: 'Yes', medical: '3rd Class', hours: '50 actual/simulated IMC' },
  { program: 'Commercial Pilot (CPL)', age: '18', english: 'Yes', medical: '2nd Class', hours: '250 total' },
  { program: 'Multi-Engine (MEL)', age: 'CPL required', english: 'Yes', medical: 'Current', hours: 'Varies' },
  { program: 'CFI Certification', age: '18 (CPL required)', english: 'Yes', medical: '2nd Class', hours: '250 total' },
]

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-space min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-danger" />
            <span className="font-display text-danger text-xs tracking-[0.4em] uppercase">Enrollment</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wider leading-none mb-4">ADMISSIONS</h1>
          <p className="text-silver text-lg max-w-2xl">
            Requirements, FAQs, and how to get started. The path to your wings begins here.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {[
              { step: '01', title: 'Discovery Flight', desc: 'Book a 1-hour intro flight. Get in the cockpit, feel the controls, and decide if aviation is for you — no commitment required.' },
              { step: '02', title: 'Enrollment Consult', desc: 'Meet with our chief instructor to choose the right program, review scheduling options, and discuss financing.' },
              { step: '03', title: 'Begin Training', desc: 'Complete your medical, purchase your materials, and start flying. Most students take off within 2 weeks of enrollment.' },
            ].map(s => (
              <div key={s.step} className="program-card border border-aviation-blue/10 p-7">
                <div className="font-display text-danger/30 text-6xl leading-none mb-3">{s.step}</div>
                <h3 className="font-display text-white uppercase tracking-wider mb-3">{s.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-8">Program Requirements</h2>
          <div className="overflow-x-auto mb-20">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-aviation-blue/10">
                  <th className="text-left font-display text-danger text-xs tracking-widest uppercase py-3 pr-6">Program</th>
                  <th className="text-left font-display text-danger text-xs tracking-widest uppercase py-3 pr-6">Min Age</th>
                  <th className="text-left font-display text-danger text-xs tracking-widest uppercase py-3 pr-6">English</th>
                  <th className="text-left font-display text-danger text-xs tracking-widest uppercase py-3 pr-6">Medical</th>
                  <th className="text-left font-display text-danger text-xs tracking-widest uppercase py-3">Minimum Hours</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((r, i) => (
                  <tr key={r.program} className={`border-b border-aviation-blue/5 ${i % 2 === 0 ? '' : 'bg-white/2'}`}>
                    <td className="text-white text-sm py-4 pr-6 font-display uppercase tracking-wider">{r.program}</td>
                    <td className="text-silver text-sm py-4 pr-6">{r.age}</td>
                    <td className="text-silver text-sm py-4 pr-6">{r.english}</td>
                    <td className="text-silver text-sm py-4 pr-6">{r.medical}</td>
                    <td className="text-silver text-sm py-4">{r.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3 mb-20">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-aviation-blue/10 overflow-hidden">
                <button className="w-full text-left p-5 flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-display text-white uppercase tracking-wider text-sm">{faq.q}</span>
                  <span className="text-danger text-lg">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                    className="px-5 pb-5">
                    <p className="text-silver text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center border border-danger/20 p-12">
            <div className="font-display text-danger text-xs tracking-[0.4em] uppercase mb-3">Ready for Takeoff?</div>
            <h3 className="font-display text-4xl text-white uppercase tracking-wider mb-4">APPLY NOW</h3>
            <p className="text-silver mb-8 max-w-md mx-auto">Fill out our short application and we'll be in touch within 24 hours to schedule your discovery flight.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-danger text-white font-display uppercase tracking-widest text-sm hover:bg-red-700 transition-all">
              Start Application
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
