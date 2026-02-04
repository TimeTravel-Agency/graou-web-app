"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { FadeIn } from "./animations"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Time travel portal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <FadeIn delay={100}>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6">
            L&apos;expérience ultime de voyage temporel
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-tight text-balance">
            Voyagez à travers
            <span className="block text-primary italic">l&apos;Histoire</span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Découvrez les époques les plus fascinantes de notre monde. 
            Une expérience de voyage unique et inoubliable vous attend.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-gold-light px-10 py-6 text-base tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              Réserver votre voyage
            </Button>
          </Link>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <FadeIn delay={600}>
          <a
            href="#destinations"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Découvrir</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
