"use client"

import Image from "next/image"
import { FadeIn } from "./animations"

interface PageHeroProps {
  title: string
  titleAccent?: string
  subtitle?: string
  image: string
  imageAlt: string
  video?: string
}

export function PageHero({ title, titleAccent, subtitle, image, imageAlt, video }: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Media with Overlay */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={image}
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        <FadeIn delay={100}>
          {subtitle && (
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6">
              {subtitle}
            </p>
          )}
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8 leading-tight text-balance">
            {title}
            {titleAccent && (
              <span className="block text-primary italic">{titleAccent}</span>
            )}
          </h1>
        </FadeIn>
      </div>
    </section>
  )
}
