"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function HeaderBoard() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null) // Reference for the video element

  const [isPlaying, setIsPlaying] = useState(true)

  // Scroll progress based on how much of the box is visible in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    // start of box hits bottom -> end of box hits top
  })

  // Scale from 0.5 to 1 and back to 0.5
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8])

  // Function to toggle video playback
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <section className="w-full p-4 md:px-7 md:py-5">
      <motion.section
        ref={ref}
        style={{ scale }} className="w-full md:w-11/12 mx-auto h-[90vh] rounded-[2.5rem] bg-neutral-200 relative p7 overflow-hidden">
        {/* N24SPfeCUHbVQHqJCGKSZd */}
        <video
          ref={videoRef}
          src="/videos/cap-edit.mp4"
          loop
          muted
          playsInline
          autoPlay
          className="w-full absolute lg:-top-9/12 object-cover"
        />

        {/* button to pause and play video */}
        <button
          onClick={toggleVideoPlayback}
          className="sticky top-7 left-7 z-10 backdrop-blur-md bg-neutral-200/70 hover:bg-neutral-100/70 rounded-full p-3"
        >
          {
            isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            )
          }
        </button>
      </motion.section>
    </section>
  )
}