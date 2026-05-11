'use client'

import { useEffect, useRef } from 'react'

interface Props {
  size?: number
  blipCount?: number
}

export default function RadarWidget({ size = 200, blipCount = 5 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const angleRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const center = size / 2
    const radius = center - 10
    const blips = Array.from({ length: blipCount }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist: 0.3 + Math.random() * 0.65,
      alpha: 0,
    }))

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, size, size)

      // Background
      ctx.fillStyle = '#050a14'
      ctx.beginPath()
      ctx.arc(center, center, radius, 0, Math.PI * 2)
      ctx.fill()

      // Rings
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath()
        ctx.arc(center, center, (radius / 4) * i, 0, Math.PI * 2)
        ctx.strokeStyle = '#00ff8815'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Cross hairs
      ctx.strokeStyle = '#00ff8815'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(center - radius, center)
      ctx.lineTo(center + radius, center)
      ctx.moveTo(center, center - radius)
      ctx.lineTo(center, center + radius)
      ctx.stroke()

      // Sweep gradient
      const grad = ctx.createConicGradient
        ? ctx.createConicGradient(angleRef.current - Math.PI / 3, center, center)
        : null

      const sweepAngle = angleRef.current
      for (let i = 0; i < 60; i++) {
        const a = sweepAngle - (i / 60) * (Math.PI / 2)
        const alpha = (60 - i) / 60 * 0.4
        ctx.beginPath()
        ctx.moveTo(center, center)
        ctx.arc(center, center, radius, a, a + 0.06)
        ctx.closePath()
        ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`
        ctx.fill()
      }

      // Sweep line
      ctx.beginPath()
      ctx.moveTo(center, center)
      ctx.lineTo(
        center + Math.cos(sweepAngle) * radius,
        center + Math.sin(sweepAngle) * radius,
      )
      ctx.strokeStyle = '#00ff88'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Blips
      blips.forEach(blip => {
        const angleDiff = ((blip.angle - sweepAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2)
        if (angleDiff < 0.15) blip.alpha = 1
        else blip.alpha = Math.max(0, blip.alpha - 0.008)

        if (blip.alpha > 0) {
          const bx = center + Math.cos(blip.angle) * blip.dist * radius
          const by = center + Math.sin(blip.angle) * blip.dist * radius
          ctx.beginPath()
          ctx.arc(bx, by, 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 255, 136, ${blip.alpha})`
          ctx.fill()
        }
      })

      angleRef.current = (angleRef.current + 0.025) % (Math.PI * 2)
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [size, blipCount])

  return (
    <div className="relative inline-block">
      <canvas ref={canvasRef} width={size} height={size} className="rounded-full" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 monospace-display text-[9px] opacity-50">KCXO RADAR</div>
    </div>
  )
}
