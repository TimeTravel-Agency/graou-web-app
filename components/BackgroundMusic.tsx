'use client'

import { useEffect, useRef } from 'react'

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Check if audio element already exists to avoid duplicates in Strict Mode
    if (!audioRef.current) {
      const audio = new Audio('/sounds/lutin-malicieux-slim.mp3')
      audio.loop = true
      audio.volume = 1 // Set a reasonable default volume
      audioRef.current = audio
      
      const playAudio = async () => {
        try {
          await audio.play()
        } catch (err) {
          console.log('Autoplay prevented by browser, waiting for user interaction:', err)
          const resumeAudio = () => {
            audio.play()
              .then(() => {
                document.removeEventListener('click', resumeAudio)
                document.removeEventListener('keydown', resumeAudio)
              })
              .catch(e => console.error("Playback failed after interaction:", e))
          }
          document.addEventListener('click', resumeAudio)
          document.addEventListener('keydown', resumeAudio)
        }
      }

      playAudio()
    }

    return () => {
      // Cleanup if component unmounts (though for root layout it rarely does)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  return null // Headless component
}
