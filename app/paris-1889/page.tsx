"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageHero } from "@/components/page-hero"
import { FadeIn, PageTransition } from "@/components/animations"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Sparkles } from "lucide-react"

const pointsOfInterest = [
  {
    title: "Tour Eiffel en Construction",
    description: "Observez les ouvriers assembler la Dame de Fer, une prouesse d'ingénierie sans précédent.",
    icon: Sparkles,
  },
  {
    title: "Montmartre",
    description: "Promenez-vous dans les ruelles bohèmes où naît l'art impressionniste.",
    icon: MapPin,
  },
  {
    title: "Cabarets Parisiens",
    description: "Vivez les soirées légendaires du Moulin Rouge et du Chat Noir.",
    icon: Users,
  },
  {
    title: "Exposition Universelle",
    description: "Découvrez les merveilles technologiques présentées au monde entier.",
    icon: Clock,
  },
]

export default function Paris1889Page() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen bg-background">
        <PageHero
          title="Paris 1889 :"
          titleAccent="L'Apogée de la Belle Époque"
          subtitle="Destination Temporelle"
          image="/images/paris-1889.jpg"
          video="/images/paris-hero.mp4"
          imageAlt="Paris 1889 - Construction de la Tour Eiffel"
        />

        {/* Content Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Description */}
              <div>
                <FadeIn>
                  <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                    L&apos;Expérience
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 text-balance">
                    Plongez dans l&apos;effervescence de la
                    <span className="text-primary italic"> Belle Époque</span>
                  </h2>
                </FadeIn>

                <FadeIn delay={100}>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Paris, 1889. La ville lumière accueille l&apos;Exposition Universelle, 
                      célébrant le centenaire de la Révolution française. Au cœur de cette 
                      effervescence, une structure de fer s&apos;élève vers le ciel : la Tour Eiffel.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Découvrez une époque où l&apos;ingénierie et l&apos;art se rencontrent, 
                      où les impressionnistes révolutionnent la peinture, et où Paris devient 
                      la capitale mondiale de la culture et de l&apos;innovation.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Notre voyage exclusif vous permet d&apos;assister à la construction de la 
                      Dame de Fer, de flâner dans les cafés fréquentés par Van Gogh et Toulouse-Lautrec, 
                      et de vivre les nuits légendaires des cabarets parisiens.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="mt-10">
                    <Link href="/booking?destination=paris-1889">
                      <Button 
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-gold-light px-10 py-6 text-base tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                      >
                        Réserver ce voyage
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column - Points of Interest */}
              <div>
                <FadeIn delay={150}>
                  <h3 className="text-xl font-semibold text-foreground mb-8 tracking-wide">
                    Points d&apos;intérêt
                  </h3>
                </FadeIn>

                <div className="space-y-6">
                  {pointsOfInterest.map((poi, index) => (
                    <FadeIn key={poi.title} delay={200 + index * 100}>
                      <div className="flex gap-4 p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <poi.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {poi.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {poi.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/paris-1889.jpg"
                  alt="Paris 1889 panorama"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-foreground text-xl font-light italic">
                    &ldquo;La Tour Eiffel est le symbole même du génie français.&rdquo;
                  </p>
                  <p className="text-primary mt-2">— Gustave Eiffel, 1889</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />
    </PageTransition>
  )
}
