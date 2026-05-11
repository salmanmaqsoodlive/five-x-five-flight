'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-space-900/95 backdrop-blur-xl border-b border-aviation-blue/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none border-l-2 border-danger pl-3 group-hover:border-aviation-sky transition-colors">
              <span className="font-display text-3xl text-white tracking-widest">5X5</span>
              <span className="font-body text-aviation-sky text-xs tracking-[0.25em] uppercase font-medium">FLIGHT</span>
            </div>
          </Link>

          {/* Callsign badge */}
          <div className="hidden xl:flex items-center gap-2 border border-aviation-blue/30 px-3 py-1">
            <div className="w-1.5 h-1.5 bg-radar rounded-full animate-pulse" />
            <span className="monospace-display text-xs">KCXO · CONROE, TX</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-body text-sm font-medium uppercase tracking-military transition-colors relative group ${
                  pathname === link.href ? 'text-aviation-sky' : 'text-silver hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-aviation-sky"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="px-6 py-2.5 bg-danger hover:bg-danger-light text-white font-body text-sm font-bold uppercase tracking-widest transition-colors shadow-danger-glow"
            >
              APPLY NOW
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            <motion.div className="flex flex-col gap-1.5">
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-danger block" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-silver block" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-danger block" />
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-space-900/99 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl text-white hover:text-aviation-sky transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link href="/admissions" onClick={() => setMenuOpen(false)} className="mt-4 px-8 py-3 bg-danger text-white font-body font-bold uppercase tracking-widest shadow-danger-glow">
                  APPLY NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
