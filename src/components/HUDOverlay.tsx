'use client'

import { motion } from 'framer-motion'

interface HUDData {
  alt?: string
  spd?: string
  hdg?: string
  fuel?: string
}

export default function HUDOverlay({ alt = '2,500', spd = '124', hdg = '270', fuel = '85%' }: HUDData) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Bracket corners */}
      <div className="absolute top-6 left-6 hud-bracket-tl w-8 h-8" />
      <div className="absolute top-6 right-6 hud-bracket-tr w-8 h-8" />
      <div className="absolute bottom-6 left-6 hud-bracket-bl w-8 h-8" />
      <div className="absolute bottom-6 right-6 hud-bracket-br w-8 h-8" />

      {/* HUD readouts */}
      <div className="absolute top-6 left-16 flex gap-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="monospace-display text-xs">
          <div className="text-radar/40 text-[9px] mb-0.5">ALT</div>
          <div>{alt} ft</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="monospace-display text-xs">
          <div className="text-radar/40 text-[9px] mb-0.5">SPD</div>
          <div>{spd} kts</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="monospace-display text-xs">
          <div className="text-radar/40 text-[9px] mb-0.5">HDG</div>
          <div>{hdg}°</div>
        </motion.div>
      </div>

      {/* Fuel indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="absolute top-6 right-16 monospace-display text-xs text-right">
        <div className="text-radar/40 text-[9px] mb-0.5">FUEL</div>
        <div>{fuel}</div>
      </motion.div>

      {/* Center reticle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border border-radar/20 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-radar/20" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-radar/20" />
          <div className="absolute inset-4 border border-radar/10 rounded-full" />
        </div>
      </div>

      {/* Bottom status bar */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 monospace-display text-[10px] text-center">
        <div className="text-radar/30">FIVE x FIVE FLIGHT ACADEMY · KCXO</div>
      </motion.div>
    </div>
  )
}
