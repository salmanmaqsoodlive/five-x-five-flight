'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  code: string
  title: string
  hours: string
  duration: string
  price: string
  desc: string
  requirements: string[]
  index?: number
}

export default function ProgramCard({ code, title, hours, duration, price, desc, requirements, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ borderColor: 'rgba(255,51,51,0.3)' }}
      className="program-card border border-steel-blue/10 p-7 transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="monospace-display text-danger text-xs block mb-1">{code}</span>
          <h3 className="font-display text-white uppercase tracking-wider">{title}</h3>
        </div>
        <div className="text-right">
          <div className="font-display text-white text-lg">{price}</div>
          <div className="text-silver text-xs">{hours} hrs</div>
        </div>
      </div>
      <p className="text-silver text-sm leading-relaxed mb-4">{desc}</p>
      <div className="flex items-center gap-4 mb-4 text-xs">
        <div>
          <span className="font-display text-danger text-[10px] tracking-widest uppercase block">Duration</span>
          <span className="text-silver">{duration}</span>
        </div>
      </div>
      <ul className="space-y-1.5">
        {requirements.slice(0, 3).map(r => (
          <li key={r} className="flex items-center gap-2 text-silver/70 text-xs">
            <div className="w-1 h-1 bg-danger/60 rounded-full" />
            {r}
          </li>
        ))}
      </ul>
      <Link href="/admissions" className="inline-flex items-center gap-1.5 text-danger text-xs font-display uppercase tracking-widest mt-4 hover:text-white transition-colors">
        Apply →
      </Link>
    </motion.div>
  )
}
