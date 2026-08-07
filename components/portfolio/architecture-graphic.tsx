'use client'

import { motion } from 'framer-motion'

/**
 * Elegant abstract "architecture / pipeline" SVG used as a
 * visual placeholder for each project case study. Variant changes
 * the node arrangement so each project feels distinct.
 */
export function ArchitectureGraphic({ variant = 0 }: { variant?: number }) {
  const dash = {
    strokeDasharray: 4,
    animate: { strokeDashoffset: [16, 0] },
  }

  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full"
      role="img"
      aria-label="Abstract system architecture diagram"
    >
      <defs>
        <linearGradient id={`ag-line-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.64 0.19 285)" />
          <stop offset="100%" stopColor="oklch(0.7 0.16 210)" />
        </linearGradient>
        <radialGradient id={`ag-node-${variant}`}>
          <stop offset="0%" stopColor="oklch(0.64 0.19 285 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.64 0.19 285 / 0)" />
        </radialGradient>
      </defs>

      {/* grid */}
      <g opacity="0.12" stroke="currentColor" strokeWidth="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="260" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 52} x2="400" y2={i * 52} />
        ))}
      </g>

      {/* connecting paths */}
      <motion.path
        d={
          variant % 2 === 0
            ? 'M60 130 C130 130 130 70 200 70 C270 70 270 130 340 130'
            : 'M60 90 C130 90 130 190 200 190 C270 190 270 90 340 90'
        }
        fill="none"
        stroke={`url(#ag-line-${variant})`}
        strokeWidth="1.5"
        {...dash}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      />
      <motion.path
        d="M60 130 C130 130 130 190 200 190 C270 190 270 130 340 130"
        fill="none"
        stroke="oklch(0.7 0.16 210 / 0.5)"
        strokeWidth="1.5"
        {...dash}
        transition={{ repeat: Infinity, duration: 3.6, ease: 'linear' }}
      />

      {/* nodes */}
      {[
        { x: 60, y: 130, r: 10, label: 'in' },
        { x: 200, y: variant % 2 === 0 ? 70 : 190, r: 14, label: 'model' },
        { x: 200, y: variant % 2 === 0 ? 190 : 70, r: 12, label: 'feat' },
        { x: 340, y: 130, r: 10, label: 'out' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 12} fill={`url(#ag-node-${variant})`} />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="oklch(0.19 0.01 285)"
            stroke={`url(#ag-line-${variant})`}
            strokeWidth="1.5"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="none"
            stroke="oklch(0.64 0.19 285 / 0.4)"
            strokeWidth="1"
            animate={{ r: [n.r, n.r + 8], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
          />
        </g>
      ))}
    </svg>
  )
}
