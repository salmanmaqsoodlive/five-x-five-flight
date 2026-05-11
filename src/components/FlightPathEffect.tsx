'use client'

import { useEffect, useRef } from 'react'

export default function FlightPathEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const paths: { x: number; y: number; vx: number; vy: number; trail: { x: number; y: number }[]; alpha: number }[] = []

    for (let i = 0; i < 3; i++) {
      paths.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 0.8,
        trail: [],
        alpha: 0.3 + Math.random() * 0.4,
      })
    }

    let animId: number
    const draw = () => {
      ctx.fillStyle = 'rgba(5, 10, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      paths.forEach(p => {
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 60) p.trail.shift()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        if (p.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(p.trail[0].x, p.trail[0].y)
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y)
          }
          ctx.strokeStyle = `rgba(0, 255, 136, ${p.alpha * 0.3})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Aircraft dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 51, 51, ${p.alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  )
}
