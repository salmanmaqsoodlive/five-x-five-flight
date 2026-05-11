'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-space min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="monospace-display text-xs mb-4 opacity-60">CONTACT · KCXO CONROE TX</div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-widest mb-4">CONTACT</h1>
          <p className="font-body text-silver text-lg max-w-xl">Ready to take the next step? Reach out to our admissions team.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="monospace-display text-xs opacity-60 block mb-2">FULL NAME *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-space-700 border border-aviation-blue/20 focus:border-aviation-sky/40 text-white px-4 py-3.5 outline-none transition-colors font-body text-sm"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="monospace-display text-xs opacity-60 block mb-2">EMAIL *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-space-700 border border-aviation-blue/20 focus:border-aviation-sky/40 text-white px-4 py-3.5 outline-none transition-colors font-body text-sm"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="monospace-display text-xs opacity-60 block mb-2">PHONE</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        className="w-full bg-space-700 border border-aviation-blue/20 focus:border-aviation-sky/40 text-white px-4 py-3.5 outline-none transition-colors font-body text-sm"
                        placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="monospace-display text-xs opacity-60 block mb-2">PROGRAM INTEREST</label>
                      <select value={form.program} onChange={e => setForm({...form, program: e.target.value})}
                        className="w-full bg-space-700 border border-aviation-blue/20 focus:border-aviation-sky/40 text-white px-4 py-3.5 outline-none transition-colors font-body text-sm">
                        <option value="">Select program</option>
                        <option>Private Pilot</option>
                        <option>Instrument Rating</option>
                        <option>Commercial Pilot</option>
                        <option>Multi-Engine</option>
                        <option>CFI</option>
                        <option>Ground School</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="monospace-display text-xs opacity-60 block mb-2">MESSAGE *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-space-700 border border-aviation-blue/20 focus:border-aviation-sky/40 text-white px-4 py-3.5 outline-none transition-colors font-body text-sm resize-none"
                      placeholder="Tell us about your aviation goals..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-danger hover:bg-danger-light text-white font-body font-bold uppercase tracking-widest text-sm transition-all shadow-danger-glow">
                    SEND MESSAGE
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="border border-aviation-blue/20 bg-space-700 p-12 text-center">
                  <div className="font-display text-5xl text-aviation-sky mb-4">✈</div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-3">TRANSMISSION RECEIVED</h3>
                  <p className="text-silver font-body">We'll contact you within 24 hours. Clear skies ahead.</p>
                </motion.div>
              )}
            </div>

            <div className="space-y-4">
              {[
                { label: 'AIRPORT', value: 'Conroe North Houston Regional (KCXO)' },
                { label: 'LOCATION', value: 'Conroe, Texas' },
                { label: 'EMAIL', value: 'fly@fivexfiveflight.com' },
                { label: 'HOURS', value: 'Mon–Sat: 7am–7pm CST' },
              ].map(item => (
                <div key={item.label} className="border border-aviation-blue/15 bg-space-700 p-5">
                  <div className="monospace-display text-xs mb-1 opacity-60">{item.label}</div>
                  <div className="font-body text-white text-sm">{item.value}</div>
                </div>
              ))}
              <div className="border border-danger/20 bg-danger/5 p-5 mt-4">
                <div className="monospace-display text-xs text-danger mb-2">APPLY NOW</div>
                <p className="font-body text-silver text-sm mb-3">Ready to commit? Start your formal application today.</p>
                <a href="/admissions" className="block py-2.5 bg-danger text-white text-center font-body font-bold text-xs uppercase tracking-widest">
                  BEGIN APPLICATION →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
