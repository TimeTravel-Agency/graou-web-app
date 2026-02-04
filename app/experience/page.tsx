"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageHero } from "@/components/page-hero"
import { FadeIn, PageTransition } from "@/components/animations"
import { Atom, Shield, Crown, Clock, Sparkles, HeartHandshake } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const technologyFeatures = [
  {
    icon: Atom,
    title: "Trous de Ver Sécurisés",
    description: "Notre technologie brevetée de manipulation spatio-temporelle crée des passages stables et parfaitement calibrés vers l'époque de votre choix.",
  },
  {
    icon: Shield,
    title: "Paradoxe-Proof",
    description: "Des algorithmes quantiques avancés préviennent tout risque de paradoxe temporel, garantissant la stabilité de votre ligne temporelle.",
  },
  {
    icon: Clock,
    title: "Synchronisation Parfaite",
    description: "Retour garanti à la seconde près. Notre système de tracking temporel vous ramène exactement là où vous êtes parti.",
  },
]

const serviceFeatures = [
  {
    icon: Crown,
    title: "Majordome Temporel Dédié",
    description: "Un expert en histoire et en protocole vous accompagne tout au long de votre voyage, assurant une immersion parfaite.",
  },
  {
    icon: Sparkles,
    title: "Costumes d'Époque",
    description: "Une garde-robe complète confectionnée par nos historiens du textile pour une intégration totale.",
  },
  {
    icon: HeartHandshake,
    title: "Conciergerie 24/7",
    description: "Une équipe disponible dans le présent surveille votre voyage et reste prête à intervenir à tout moment.",
  },
]

const preparationSteps = [
  {
    step: "01",
    title: "Consultation Initiale",
    description: "Rencontre avec nos experts pour définir vos attentes, vérifier votre condition physique, et choisir votre destination.",
  },
  {
    step: "02",
    title: "Formation Historique",
    description: "Sessions intensives sur l'époque visitée : langue, coutumes, dangers potentiels, et codes sociaux.",
  },
  {
    step: "03",
    title: "Acclimatation",
    description: "Simulation en réalité virtuelle pour vous préparer au choc culturel et temporel.",
  },
  {
    step: "04",
    title: "Équipement",
    description: "Réception de votre kit de voyage : vêtements, traducteur neural, et dispositif de rappel d'urgence.",
  },
]

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen bg-background">
        <PageHero
          title="L'Expérience"
          titleAccent="TimeTravel"
          subtitle="Comment ça marche"
          image="/images/hero-bg.jpg"
          imageAlt="Portail temporel"
        />

        {/* Technology Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Notre Technologie
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
                  La Science du <span className="text-primary italic">Voyage Temporel</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {technologyFeatures.map((feature, index) => (
                <FadeIn key={feature.title} delay={150 + index * 100}>
                  <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Service Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Service Premium
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
                  Le Luxe <span className="text-primary italic">Sans Compromis</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <FadeIn key={feature.title} delay={150 + index * 100}>
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Process */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Votre Préparation
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
                  Le Processus en <span className="text-primary italic">4 Étapes</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {preparationSteps.map((item, index) => (
                <FadeIn key={item.step} delay={150 + index * 100}>
                  <div className="flex gap-6 p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="shrink-0">
                      <span className="text-5xl font-light text-primary/30 group-hover:text-primary/50 transition-colors">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Prêt à Partir ?
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
                Commencez votre aventure <span className="text-primary italic">dès aujourd&apos;hui</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Nos conseillers sont à votre disposition pour répondre à toutes vos questions 
                et vous accompagner dans la planification de votre voyage temporel.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <Link href="/booking">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-gold-light px-10 py-6 text-base tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  Planifier mon voyage
                </Button>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />
    </PageTransition>
  )
}
