"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageHero } from "@/components/page-hero"
import { FadeIn, PageTransition } from "@/components/animations"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, Eye, Zap } from "lucide-react"

const securityMeasures = [
  {
    title: "Bulle de Protection Temporelle",
    description: "Notre technologie de pointe crée un champ de force invisible qui vous protège de toute interaction dangereuse avec la faune préhistorique.",
    icon: Shield,
  },
  {
    title: "Observation à Distance",
    description: "Des drones temporels permettent d'observer les dinosaures de près sans risque, transmettant des images en haute définition.",
    icon: Eye,
  },
  {
    title: "Protocole d'Évacuation Rapide",
    description: "En cas de danger imminent, notre système peut vous ramener au présent en moins de 3 secondes.",
    icon: Zap,
  },
  {
    title: "Guide Expert Armé",
    description: "Chaque expédition est accompagnée d'un paléontologue et d'un expert en sécurité temporelle certifié.",
    icon: AlertTriangle,
  },
]

const creatures = [
  { name: "Tyrannosaurus Rex", description: "Le roi des dinosaures, dans toute sa majesté terrifiante." },
  { name: "Triceratops", description: "Paisibles herbivores aux cornes impressionnantes." },
  { name: "Pteranodon", description: "Maîtres des cieux préhistoriques." },
  { name: "Velociraptor", description: "Chasseurs rusés et rapides." },
]

export default function CretacePage() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen bg-background">
        <PageHero
          title="Le Crétacé :"
          titleAccent="Au Royaume des Géants"
          subtitle="Destination Temporelle"
          image="/images/cretaceous.jpg"
          video="/images/cretace-hero.mp4"
          imageAlt="Période du Crétacé - Dinosaures"
        />

        {/* Content Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Description */}
              <div>
                <FadeIn>
                  <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                    L&apos;Aventure Ultime
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 text-balance">
                    Un safari au cœur de
                    <span className="text-primary italic"> la préhistoire</span>
                  </h2>
                </FadeIn>

                <FadeIn delay={100}>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Il y a 65 millions d&apos;années, la Terre était dominée par les créatures 
                      les plus extraordinaires de son histoire. Des forêts luxuriantes 
                      s&apos;étendaient à perte de vue, peuplées de géants qui défiaient l&apos;imagination.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Notre expédition temporelle vous emmène au cœur de cet âge d&apos;or de la vie 
                      sur Terre. Observez le majestueux Tyrannosaurus Rex chasser sa proie, 
                      admirez les troupeaux de Triceratops paître paisiblement, et contemplez 
                      les Pteranodons planer dans un ciel d&apos;un bleu immaculé.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Cette aventure unique vous confronte à la puissance brute de la nature 
                      à son apogée, une expérience que vous n&apos;oublierez jamais.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={150}>
                  <div className="mt-8 p-6 rounded-lg bg-destructive/10 border border-destructive/30">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                      <div>
                        <h4 className="text-foreground font-semibold mb-2">Avertissement</h4>
                        <p className="text-sm text-muted-foreground">
                          Ce voyage est déconseillé aux personnes souffrant de problèmes cardiaques 
                          ou de claustrophobie. L&apos;intensité émotionnelle est garantie.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="mt-10">
                    <Link href="/booking?destination=cretace">
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

              {/* Right Column - Creatures */}
              <div>
                <FadeIn delay={100}>
                  <h3 className="text-xl font-semibold text-foreground mb-8 tracking-wide">
                    Créatures à Observer
                  </h3>
                </FadeIn>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {creatures.map((creature, index) => (
                    <FadeIn key={creature.name} delay={150 + index * 50}>
                      <div className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                        <h4 className="text-primary font-semibold mb-1 text-sm">
                          {creature.name}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {creature.description}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Votre Sécurité
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
                  Protocoles de <span className="text-primary italic">Protection</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <FadeIn key={measure.title} delay={150 + index * 100}>
                  <div className="flex gap-4 p-6 rounded-lg bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <measure.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {measure.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {measure.description}
                      </p>
                    </div>
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
                  src="/images/cretaceous.jpg"
                  alt="Crétacé panorama"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-foreground text-xl font-light italic">
                    &ldquo;65 millions d&apos;années nous séparent d&apos;eux. Pourtant, face à un T-Rex, 
                    on comprend que le temps n&apos;est qu&apos;une illusion.&rdquo;
                  </p>
                  <p className="text-primary mt-2">— Dr. Sarah Chen, Paléontologue temporelle</p>
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
