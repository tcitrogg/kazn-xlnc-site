'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function Cursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth it with spring
  // const cursorX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  // const cursorY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const move = (e: MouseEvent): void => {
      mouseX.set(e.clientX - 12) // center offset
      mouseY.set(e.clientY - 12)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 z-[90] pointer-events-none w-6 h-6 bg-neutral-600 rounded-full mix-blend-difference"
      style={{
        translateX: mouseX,
        translateY: mouseY,
      }}
    />
  )
}
