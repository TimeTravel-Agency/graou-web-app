"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { PageTransition } from "@/components/animations"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"

type Destination = "paris" | "cretace" | "florence"

interface Question {
  id: number
  question: string
  options: {
    label: string
    points: Destination
  }[]
}

const questionPool: Question[] = [
  {
    id: 1,
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      { label: "Culturelle et artistique", points: "florence" },
      { label: "Aventure et nature", points: "cretace" },
      { label: "Élégance et raffinement", points: "paris" },
    ],
  },
  {
    id: 2,
    question: "Votre période préférée ?",
    options: [
      { label: "Histoire moderne (XIXe-XXe siècle)", points: "paris" },
      { label: "Temps anciens et origines", points: "cretace" },
      { label: "Renaissance et classicisme", points: "florence" },
    ],
  },
  {
    id: 3,
    question: "Vous préférez :",
    options: [
      { label: "L'effervescence urbaine", points: "paris" },
      { label: "La nature sauvage", points: "cretace" },
      { label: "L'art et l'architecture", points: "florence" },
    ],
  },
  {
    id: 4,
    question: "Votre activité idéale :",
    options: [
      { label: "Visiter des monuments", points: "paris" },
      { label: "Observer la faune", points: "cretace" },
      { label: "Explorer des musées", points: "florence" },
    ],
  },
  {
    id: 5,
    question: "Quel danger êtes-vous prêt à affronter ?",
    options: [
      { label: "Un scandale mondain", points: "paris" },
      { label: "Un prédateur géant", points: "cretace" },
      { label: "Une intrigue politique", points: "florence" },
    ],
  },
  {
    id: 6,
    question: "Quel souvenir aimeriez-vous rapporter ?",
    options: [
      { label: "Une invention révolutionnaire", points: "paris" },
      { label: "Une dent de dinosaure", points: "cretace" },
      { label: "Une esquisse originale", points: "florence" },
    ],
  },
  {
    id: 7,
    question: "Votre logement idéal ?",
    options: [
      { label: "Un hôtel de luxe", points: "paris" },
      { label: "Une tente sécurisée", points: "cretace" },
      { label: "Un palais en pierre", points: "florence" },
    ],
  },
  {
    id: 8,
    question: "Quel bruit préférez-vous ?",
    options: [
      { label: "La musique d'un cabaret", points: "paris" },
      { label: "Le rugissement lointain", points: "cretace" },
      { label: "Le son des cloches", points: "florence" },
    ],
  },
  {
    id: 9,
    question: "Votre relation à la technologie ?",
    options: [
      { label: "J'adore le progrès", points: "paris" },
      { label: "Je préfère me déconnecter", points: "cretace" },
      { label: "Je préfère l'artisanat", points: "florence" },
    ],
  },
  {
    id: 10,
    question: "L'odeur qui vous attire ?",
    options: [
      { label: "Le parfum poudré", points: "paris" },
      { label: "La pluie et la terre", points: "cretace" },
      { label: "L'encens et la peinture", points: "florence" },
    ],
  },
]

const destinationData = {
  paris: {
    id: "paris-1889",
    name: "Paris 1889",
    subtitle: "Belle Époque",
    image: "/images/paris-1889.jpg",
    description: "Vivez l'effervescence de l'Exposition Universelle et découvrez la Tour Eiffel fraîchement construite.",
  },
  cretace: {
    id: "cretace",
    name: "Crétacé",
    subtitle: "Ère des Dinosaures",
    image: "/images/cretaceous.jpg",
    description: "Partez à l'aventure dans un monde préhistorique peuplé de créatures légendaires.",
  },
  florence: {
    id: "florence-1504",
    name: "Florence 1504",
    subtitle: "Renaissance Italienne",
    image: "/images/florence-1504.jpg",
    description: "Rencontrez les plus grands maîtres de l'art dans la cité berceau de la Renaissance.",
  },
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<Destination, number>>({
    paris: 0,
    cretace: 0,
    florence: 0,
  })
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // AI Recommendation State
  const [userAnswers, setUserAnswers] = useState<{question: string, answer: string}[]>([])
  const [aiRecommendation, setAiRecommendation] = useState<string>("")
  const [isLoadingAI, setIsLoadingAI] = useState(false)

  // Randomly select 4 questions on mount
  const selectedQuestions = useMemo(() => {
    return shuffleArray(questionPool).slice(0, 4)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalQuestions = 4
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleAnswer = (optionIndex: number, points: Destination) => {
    if (isAnimating) return
    
    setSelectedAnswer(optionIndex)
    setScores((prev) => ({
      ...prev,
      [points]: prev[points] + 1,
    }))
    
    // Track answer for AI
    const currentQ = selectedQuestions[currentQuestion]
    setUserAnswers(prev => [...prev, {
      question: currentQ.question,
      answer: currentQ.options[optionIndex].label
    }])

    setIsAnimating(true)

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
      setIsAnimating(false)
    }, 600)
  }

  const getWinningDestination = (): Destination => {
    const entries = Object.entries(scores) as [Destination, number][]
    entries.sort((a, b) => b[1] - a[1])
    return entries[0][0]
  }

  const handleBooking = () => {
    const winner = getWinningDestination()
    router.push(`/booking?destination=${destinationData[winner].id}`)
  }

  // Fetch AI Recommendation when result is shown
  useEffect(() => {
    if (showResult) {
      const fetchRecommendation = async () => {
        setIsLoadingAI(true)
        try {
          const winner = getWinningDestination()
          const destination = destinationData[winner]
          
          const response = await fetch("/api/quiz-recommendation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              destination,
              answers: userAnswers
            }),
          })
          
          if (response.ok) {
            const data = await response.json()
            setAiRecommendation(data.recommendation)
          }
        } catch (error) {
          console.error("Failed to fetch recommendation", error)
        } finally {
          setIsLoadingAI(false)
        }
      }
      
      fetchRecommendation()
    }
  }, [showResult])

  if (!mounted) {
    return (
      <PageTransition>
        <Header />
        <main className="min-h-screen bg-background pt-20" />
        <Footer />
      </PageTransition>
    )
  }

  const winner = showResult ? getWinningDestination() : null
  const winnerData = winner ? destinationData[winner] : null

  return (
    <PageTransition>
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Quiz Personnalisé</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                Trouvez votre{" "}
                <span className="text-primary italic">voyage idéal</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Répondez à quelques questions pour découvrir la destination temporelle 
                qui correspond le mieux à votre personnalité.
              </p>
            </div>

            {!showResult ? (
              <>
                {/* Progress Bar */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1}/{totalQuestions}
                    </span>
                    <span className="text-sm text-primary">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-1 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <div
                  key={currentQuestion}
                  className="bg-card border border-border/50 rounded-2xl p-8 md:p-10"
                  style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating ? "translateX(-20px)" : "translateX(0)",
                    transition: "opacity 300ms ease-out, transform 300ms ease-out",
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8 text-center">
                    {selectedQuestions[currentQuestion].question}
                  </h2>

                  <div className="space-y-4">
                    {selectedQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleAnswer(index, option.points)}
                        disabled={isAnimating}
                        className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                          selectedAnswer === index
                            ? "border-primary bg-primary/10"
                            : "border-border/50 bg-background hover:border-primary/50 hover:bg-primary/5"
                        } disabled:cursor-not-allowed`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                              selectedAnswer === index
                                ? "border-primary bg-primary"
                                : "border-muted-foreground group-hover:border-primary"
                            }`}
                          >
                            <span
                              className={`text-sm font-medium transition-colors duration-300 ${
                                selectedAnswer === index
                                  ? "text-primary-foreground"
                                  : "text-muted-foreground group-hover:text-primary"
                              }`}
                            >
                              {String.fromCharCode(65 + index)}
                            </span>
                          </div>
                          <span
                            className={`text-lg transition-colors duration-300 ${
                              selectedAnswer === index
                                ? "text-primary"
                                : "text-foreground group-hover:text-primary"
                            }`}
                          >
                            {option.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Result Card */
              <div
                className="overflow-hidden rounded-2xl border border-border/50 bg-card"
                style={{
                  opacity: 1,
                  animation: "fadeIn 600ms ease-out forwards",
                }}
              >
                {/* Result Image */}
                {winnerData && (
                  <>
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={winnerData.image || "/placeholder.svg"}
                        alt={winnerData.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs tracking-widest uppercase rounded-full mb-2">
                          Votre Recommandation
                        </span>
                      </div>
                    </div>

                    {/* Result Content */}
                    <div className="p-8 md:p-10 text-center">
                      <p className="text-muted-foreground mb-2">
                        D&apos;après vos réponses, votre voyage idéal est...
                      </p>
                      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                        <span className="text-primary italic">{winnerData.name}</span>
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {winnerData.subtitle}
                      </p>
                      <p className="text-foreground/80 mb-8 max-w-md mx-auto">
                        {winnerData.description}
                      </p>

                      {/* AI Recommendation */}
                      {(isLoadingAI || aiRecommendation) && (
                        <div className="mb-8 p-6 bg-primary/5 rounded-xl border border-primary/10 max-w-2xl mx-auto relative overflow-hidden">
                          <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className="flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-xs">
                              <Sparkles className="w-3 h-3" />
                              <span>L&apos;avis de l&apos;IA</span>
                            </div>
                            
                            {isLoadingAI ? (
                              <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
                                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                              </div>
                            ) : (
                              <>
                                <p className="text-foreground/90 italic leading-relaxed">
                                  &ldquo;{aiRecommendation}&rdquo;
                                </p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-2">
                                  Généré par l&apos;IA de TimeTravel Agency
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                          onClick={handleBooking}
                          className="bg-primary text-primary-foreground hover:bg-gold-light px-8 py-6 text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                        >
                          Réserver {winnerData.name}
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Link href={`/${winnerData.id}`}>
                          <Button
                            variant="outline"
                            className="border-border text-foreground hover:border-primary hover:text-primary bg-transparent px-8 py-6 text-base"
                          >
                            En savoir plus
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </PageTransition>
  )
}
