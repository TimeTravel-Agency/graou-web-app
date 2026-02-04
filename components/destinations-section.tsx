"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn, StaggerContainer } from "./animations"

const destinations = [
  {
    id: 1,
    title: "Paris 1889",
    subtitle: "Belle Époque",
    description: "Assistez à la construction de la Tour Eiffel et vivez l'effervescence de l'Exposition Universelle.",
    image: "/images/paris-1889.jpg",
    era: "XIXe siècle",
    href: "/paris-1889",
  },
  {
    id: 2,
    title: "Crétacé -65M",
    subtitle: "Ère des Dinosaures",
    description: "Explorez une nature préhistorique intacte et observez les plus majestueuses créatures ayant foulé la Terre.",
    image: "/images/cretaceous.jpg",
    era: "Mésozoïque",
    href: "/cretace",
  },
  {
    id: 3,
    title: "Florence 1504",
    subtitle: "Renaissance Italienne",
    description: "Rencontrez Michel-Ange dans son atelier et découvrez la naissance du David, chef-d'œuvre de la Renaissance.",
    image: "/images/florence-1504.jpg",
    era: "XVIe siècle",
    href: "/florence-1504",
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Destinations
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Nos Voyages <span className="text-primary italic">Emblématiques</span>
            </h2>
          </FadeIn>
        </div>

        {/* Destinations Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={150}
        >
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

interface DestinationCardProps {
  destination: {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    era: string
    href: string
  }
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={destination.href} className="block">
      <div className="group relative overflow-hidden rounded-lg bg-card border border-border/50 transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Era Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs tracking-widest uppercase bg-primary/90 text-primary-foreground rounded-full">
              {destination.era}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
            {destination.subtitle}
          </p>
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            {destination.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {destination.description}
          </p>
          
          <Button
            variant="outline"
            className="w-full group/btn border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
          >
            <span className="tracking-widest uppercase text-sm">Découvrir</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </Link>
  )
}
