"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageHero } from "@/components/page-hero"
import { FadeIn, PageTransition } from "@/components/animations"
import { Button } from "@/components/ui/button"
import { Palette, Building, BookOpen, Crown } from "lucide-react"

const experiences = [
  {
    title: "Atelier de Michel-Ange",
    description: "Assistez à la création du David, observant le maître sculpter le marbre de Carrare avec une précision divine.",
    icon: Palette,
  },
  {
    title: "Cathédrale Santa Maria del Fiore",
    description: "Admirez le Duomo de Brunelleschi, prouesse architecturale qui défie encore aujourd'hui l'entendement.",
    icon: Building,
  },
  {
    title: "Bibliothèque des Médicis",
    description: "Feuilletez les manuscrits anciens et découvrez les secrets de la famille la plus puissante d'Italie.",
    icon: BookOpen,
  },
  {
    title: "Cour de Lorenzo de' Medici",
    description: "Participez à un banquet Renaissance aux côtés des plus grands artistes et penseurs de l'époque.",
    icon: Crown,
  },
]

const artists = [
  { name: "Michel-Ange", specialty: "Sculpture & Peinture" },
  { name: "Léonard de Vinci", specialty: "Génie Universel" },
  { name: "Raphaël", specialty: "Peinture" },
  { name: "Botticelli", specialty: "Peinture" },
]

export default function Florence1504Page() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen bg-background">
        <PageHero
          title="Florence 1504 :"
          titleAccent="Le Berceau de la Renaissance"
          subtitle="Destination Temporelle"
          image="/images/florence-1504.jpg"
          video="/images/florence-hero.mp4"
          imageAlt="Florence 1504 - Renaissance italienne"
        />

        {/* Content Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Description */}
              <div>
                <FadeIn>
                  <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                    Immersion Culturelle
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 text-balance">
                    Où l&apos;art et la beauté
                    <span className="text-primary italic"> renaissent</span>
                  </h2>
                </FadeIn>

                <FadeIn delay={100}>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Florence, 1504. La cité des Médicis est le centre du monde civilisé, 
                      un carrefour où convergent les plus grands génies de l&apos;humanité. 
                      Dans les ateliers et les palais, une révolution culturelle est en marche.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Michel-Ange vient d&apos;achever son David, Léonard de Vinci perfectionne 
                      ses inventions révolutionnaires, et les philosophes redécouvrent les 
                      trésors de l&apos;Antiquité. L&apos;air même semble vibrer de créativité.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Notre voyage vous offre l&apos;opportunité unique de rencontrer ces titans 
                      de l&apos;art, d&apos;assister à la création de chefs-d&apos;œuvre immortels, 
                      et de vous immerger dans une époque où l&apos;homme se redécouvrait.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="mt-10">
                    <Link href="/booking?destination=florence-1504">
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

              {/* Right Column - Experiences */}
              <div>
                <FadeIn delay={150}>
                  <h3 className="text-xl font-semibold text-foreground mb-8 tracking-wide">
                    Expériences Uniques
                  </h3>
                </FadeIn>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <FadeIn key={exp.title} delay={200 + index * 100}>
                      <div className="flex gap-4 p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <exp.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {exp.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {exp.description}
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

        {/* Artists Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Rencontres Exceptionnelles
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
                  Les Maîtres de la <span className="text-primary italic">Renaissance</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {artists.map((artist, index) => (
                <FadeIn key={artist.name} delay={150 + index * 100}>
                  <div className="p-6 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center group hover:scale-105">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Palette className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {artist.name}
                    </h4>
                    <p className="text-primary text-sm">
                      {artist.specialty}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/florence-1504.jpg"
                  alt="Florence Renaissance panorama"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-foreground text-xl font-light italic">
                    &ldquo;L&apos;art n&apos;est jamais terminé, seulement abandonné.&rdquo;
                  </p>
                  <p className="text-primary mt-2">— Léonard de Vinci</p>
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
