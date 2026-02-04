"use client"

import React, { Suspense } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageHero } from "@/components/page-hero"
import { FadeIn } from "@/components/animations"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Calendar, Users, MapPin } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const destinations = [
  { id: "paris-1889", name: "Paris 1889 - Belle Époque", price: "12,500" },
  { id: "cretace", name: "Crétacé - Ère des Dinosaures", price: "18,900" },
  { id: "florence-1504", name: "Florence 1504 - Renaissance", price: "14,200" },
]

const steps = [
  { id: 1, title: "Destination", icon: MapPin },
  { id: 2, title: "Dates", icon: Calendar },
  { id: 3, title: "Voyageurs", icon: Users },
]

function BookingFormInner({ initialDestination }: { initialDestination: string }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    destination: initialDestination,
    date: "",
    name: "",
    email: "",
    travelers: "1",
  })
  const [error, setError] = useState("")
  const [successOpen, setSuccessOpen] = useState(false)

  const selectedDestination = destinations.find(d => d.id === formData.destination)

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    if (currentStep === 2 && !formData.date) {
      setError("Une date valide est requise")
      return
    }
    setError("")
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Le nom et l'email sont requis")
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setError("")
    setSuccessOpen(true)
  }

  const handleSuccessClose = () => {
    setSuccessOpen(false)
    router.push("/")
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="flex items-center justify-between mb-12">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentStep >= step.id 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-card border border-border text-muted-foreground"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className={`mt-2 text-sm ${
                        currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-full h-0.5 mx-4 transition-colors duration-300 ${
                        currentStep > step.id ? "bg-primary" : "bg-border"
                      }`} style={{ width: "80px" }} />
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

            <form onSubmit={handleSubmit}>
              <FadeIn delay={100}>
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-foreground mb-6">
                        Choisissez votre <span className="text-primary italic">destination</span>
                      </h3>
                      <div className="space-y-4">
                        {destinations.map((dest) => (
                          <label
                            key={dest.id}
                            className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                              formData.destination === dest.id 
                                ? "border-primary bg-primary/5" 
                                : "border-border/50 bg-background"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <input
                                type="radio"
                                name="destination"
                                value={dest.id}
                                checked={formData.destination === dest.id}
                                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                                className="sr-only"
                              />
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                formData.destination === dest.id 
                                  ? "border-primary" 
                                  : "border-muted-foreground"
                              }`}>
                                {formData.destination === dest.id && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                )}
                              </div>
                              <span className="text-foreground">{dest.name}</span>
                            </div>
                            <span className="text-primary font-semibold">{dest.price} €</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-foreground mb-6">
                        Sélectionnez vos <span className="text-primary italic">dates</span>
                      </h3>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">
                          Date de départ souhaitée
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({...formData, date: e.target.value})
                            setError("")
                          }}
                          className={`w-full bg-background border rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-colors ${
                            error ? "border-destructive" : "border-border/50"
                          }`}
                        />
                        {error && (
                          <p className="text-destructive text-sm mt-2">{error}</p>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Note: Les voyages temporels s&apos;effectuent le matin à 8h. 
                        La durée standard est de 24h dans l&apos;époque visitée.
                      </p>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-foreground mb-6">
                        Informations <span className="text-primary italic">voyageurs</span>
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">
                            Nom complet
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({...formData, name: e.target.value})
                              setError("")
                            }}
                            placeholder="Jean Dupont"
                            className={`w-full bg-background border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                              error && !formData.name ? "border-destructive" : "border-border/50"
                            }`}
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-muted-foreground mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({...formData, email: e.target.value})
                              setError("")
                            }}
                            placeholder="jean@exemple.com"
                            className={`w-full bg-background border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                              error && (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) ? "border-destructive" : "border-border/50"
                            }`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-muted-foreground mb-2">
                          Nombre de voyageurs
                        </label>
                        <select
                          value={formData.travelers}
                          onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                          className="w-full bg-background border border-border/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} voyageur{num > 1 ? "s" : ""}</option>
                          ))}
                        </select>
                        {error && (
                          <p className="text-destructive text-sm mt-2">{error}</p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/50">
                    {currentStep > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrev}
                        className="border-border text-foreground hover:border-primary hover:text-primary bg-transparent"
                      >
                        Retour
                      </Button>
                    ) : (
                      <div />
                    )}
                    
                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={currentStep === 1 && !formData.destination}
                        className="bg-primary text-primary-foreground hover:bg-gold-light px-8 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                      >
                        Continuer
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-primary text-primary-foreground hover:bg-gold-light px-8 transition-all duration-300 hover:scale-105"
                      >
                        Valider la demande
                      </Button>
                    )}
                  </div>
                </div>
              </FadeIn>
            </form>
          </div>

          <div className="lg:col-span-1">
            <FadeIn delay={200}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 sticky top-28">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Résumé
                </h3>
                
                {selectedDestination ? (
                  <>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Destination</span>
                        <span className="text-foreground">{selectedDestination.name.split(" - ")[0]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Voyageurs</span>
                        <span className="text-foreground">{formData.travelers}</span>
                      </div>
                      {formData.date && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Date</span>
                          <span className="text-foreground">
                            {new Date(formData.date).toLocaleDateString("fr-FR")}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-6 border-t border-border/50">
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Total estimé</span>
                        <div className="text-right">
                          <span className="text-3xl font-light text-primary">
                            {(parseInt(selectedDestination.price.replace(",", "")) * parseInt(formData.travelers)).toLocaleString("fr-FR")} €
                          </span>
                          <p className="text-xs text-muted-foreground mt-1">par personne : {selectedDestination.price} €</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    Sélectionnez une destination pour voir le tarif estimé.
                  </p>
                )}

                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    * Le prix inclut : transport temporel, guide expert, assurance interdimensionnelle, 
                    et kit de survie adapté à l&apos;époque.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <AlertDialog open={successOpen} onOpenChange={setSuccessOpen}>
        <AlertDialogContent className="bg-card border border-primary/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-light text-foreground">
              Voyage <span className="text-primary italic">Confirmé</span>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              Votre demande de réservation a été reçue avec succès. Nos agents temporels vous contacteront très prochainement pour finaliser les détails de votre expédition.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={handleSuccessClose}
              className="bg-primary text-primary-foreground hover:bg-gold-light"
            >
              Retour à l&apos;accueil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

function BookingFormWithParams() {
  const searchParams = useSearchParams()
  const destinationParam = searchParams.get("destination") || ""
  const validDestination = destinations.some(d => d.id === destinationParam) ? destinationParam : ""

  return <BookingFormInner initialDestination={validDestination} />
}

export default function BookingPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background">
        <PageHero
          title="Planifiez votre"
          titleAccent="Voyage Temporel"
          subtitle="Réservation"
          image="/images/hero-bg.jpg"
          imageAlt="Portail temporel"
        />

        <Suspense fallback={<div className="py-24 px-6 text-center text-muted-foreground">Chargement...</div>}>
          <BookingFormWithParams />
        </Suspense>
      </main>

      <Footer />
      <ChatbotWidget />
    </>
  )
}
