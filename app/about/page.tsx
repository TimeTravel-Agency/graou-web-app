"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageHero } from "@/components/page-hero"
import { FadeIn, PageTransition } from "@/components/animations"
import { Shield, Heart, Lightbulb, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Shield,
    title: "Intégrité Temporelle",
    description: "Nous protégeons le continuum espace-temps. Chaque voyage est minutieusement planifié pour éviter tout impact sur l'histoire.",
  },
  {
    icon: Heart,
    title: "Respect des Époques",
    description: "Les civilisations passées méritent notre respect. Nous observons, nous apprenons, mais nous n'intervenons jamais.",
  },
  {
    icon: Lightbulb,
    title: "Excellence Scientifique",
    description: "Notre équipe de physiciens et d'ingénieurs repousse constamment les limites de la science du voyage temporel.",
  },
  {
    icon: Users,
    title: "Service Personnalisé",
    description: "Chaque voyageur est unique. Nous créons des expériences sur mesure qui correspondent à vos rêves les plus fous.",
  },
]

const team = [
  {
    name: "Dr. Elena Vasquez",
    role: "Fondatrice & CEO",
    description: "Pionnière de la physique temporelle, Elena a consacré 20 ans à rendre le voyage dans le temps accessible.",
  },
  {
    name: "Prof. Takeshi Yamamoto",
    role: "Directeur Scientifique",
    description: "Ancien chercheur au CERN, Takeshi supervise tous les aspects techniques de nos technologies.",
  },
  {
    name: "Marie-Claire Dubois",
    role: "Directrice des Expériences",
    description: "Historienne de formation, Marie-Claire conçoit des voyages qui allient rigueur historique et émerveillement.",
  },
]

const milestones = [
  { year: "2019", event: "Première démonstration réussie d'un micro-saut temporel de 3 secondes" },
  { year: "2021", event: "Fondation de TimeTravel Agency après 2 ans de tests intensifs" },
  { year: "2023", event: "Premier voyage commercial réussi vers Paris 1889" },
  { year: "2024", event: "Ouverture des destinations préhistoriques après certification de sécurité" },
  { year: "2025", event: "10 000ème voyageur temporel et zéro incident majeur" },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen bg-background">
        <PageHero
          title="Notre"
          titleAccent="Agence"
          subtitle="À propos"
          image="/images/hero-bg.jpg"
          imageAlt="Portail temporel"
        />

        {/* Story Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 text-center">
                Notre Histoire
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-10 text-center text-balance">
                Rendre l&apos;histoire <span className="text-primary italic">accessible</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={150}>
              <div className="prose prose-invert max-w-none text-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  TimeTravel Agency est née d&apos;un rêve : permettre à chacun de toucher du doigt 
                  les moments qui ont façonné notre civilisation. Fondée en 2021 par une équipe 
                  de physiciens visionnaires et d&apos;historiens passionnés, notre agence est 
                  devenue la référence mondiale du voyage temporel de luxe.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous croyons que comprendre le passé est essentiel pour construire l&apos;avenir. 
                  C&apos;est pourquoi nous avons consacré des années de recherche à développer 
                  une technologie sûre, éthique et respectueuse du continuum temporel.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Nos Valeurs
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
                  Ce qui nous <span className="text-primary italic">guide</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={150 + index * 100}>
                  <div className="flex gap-6 p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Notre Parcours
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
                  Moments <span className="text-primary italic">Clés</span>
                </h2>
              </FadeIn>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <FadeIn key={milestone.year} delay={150 + index * 100}>
                    <div className="flex gap-8 items-start">
                      <div className="shrink-0 w-16 text-right hidden md:block">
                        <span className="text-2xl font-light text-primary">{milestone.year}</span>
                      </div>
                      <div className="relative hidden md:block">
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      </div>
                      <div className="flex-1 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                        <span className="text-primary font-semibold md:hidden">{milestone.year}</span>
                        <p className="text-foreground">{milestone.event}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  Notre Équipe
                </p>
              </FadeIn>
              <FadeIn delay={100}>
                <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
                  Les Visionnaires <span className="text-primary italic">Derrière le Rêve</span>
                </h2>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <FadeIn key={member.name} delay={150 + index * 100}>
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center group hover:scale-105">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-light text-primary group-hover:bg-primary/20 transition-colors">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="relative p-12 rounded-2xl bg-card border border-primary/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 bg-background">
                  <span className="text-sm tracking-[0.3em] uppercase text-primary">Notre Mission</span>
                </div>
                <blockquote className="text-2xl md:text-3xl font-light text-foreground text-center leading-relaxed italic">
                  &ldquo;Permettre à l&apos;humanité de redécouvrir son passé pour mieux comprendre 
                  son présent et inspirer son futur.&rdquo;
                </blockquote>
                <p className="text-primary text-center mt-6">— TimeTravel Agency</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-card/50">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 text-balance">
                Rejoignez l&apos;aventure <span className="text-primary italic">temporelle</span>
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Des milliers de voyageurs nous ont déjà fait confiance. 
                Et vous, quelle époque souhaitez-vous découvrir ?
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <Link href="/booking">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-gold-light px-10 py-6 text-base tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  Commencer l&apos;aventure
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
