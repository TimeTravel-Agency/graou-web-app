"use client"

import React from "react"

import { useState, useRef, useEffect, useMemo } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const transport = useMemo(() => new DefaultChatTransport({ api: "/api/chat" }), [])
  
  const { messages, sendMessage, status } = useChat({
    transport,
  })

  const isLoading = status === "streaming" || status === "submitted"

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  const suggestedQuestions = [
    "Quelles sont les destinations disponibles ?",
    "Comment fonctionne le voyage temporel ?",
    "Quels sont les tarifs ?",
  ]

  const handleSuggestedQuestion = (question: string) => {
    sendMessage({ text: question })
  }

  // Helper function to extract text from message parts
  const getMessageText = (message: (typeof messages)[0]) => {
    return (
      message.parts
        ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => p.text)
        .join("") || ""
    )
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="text-primary-foreground font-semibold">
                Assistant Temporel
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {isLoading ? "En train d'écrire..." : "Toujours disponible"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-80 p-4 overflow-y-auto bg-background/50 space-y-4">
            {messages.length === 0 ? (
              <>
                {/* Welcome Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-card rounded-2xl rounded-tl-none p-4 border border-border/50">
                    <p className="text-foreground text-sm leading-relaxed">
                      Bienvenue chez TimeTravel Agency ! Je suis votre assistant
                      temporel. Comment puis-je vous aider à planifier votre
                      voyage dans le temps ?
                    </p>
                  </div>
                </div>

                {/* Suggested Questions */}
                <div className="space-y-2 mt-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    Questions fréquentes
                  </p>
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      className="block w-full text-left text-sm text-muted-foreground hover:text-primary p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-200"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-tr-none bg-primary text-primary-foreground"
                        : "rounded-tl-none bg-card text-foreground border border-border/50"
                    }`}
                  >
                    {getMessageText(message)}
                  </div>
                </div>
              ))
            )}

            {/* Loading indicator */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === "user" && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-card rounded-2xl rounded-tl-none p-4 border border-border/50">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="p-4 bg-card border-t border-border/50"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-input border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="bg-primary text-primary-foreground hover:bg-gold-light rounded-xl h-11 w-11 shrink-0"
                aria-label="Send message"
                disabled={!input.trim() || isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* FAB Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-card text-foreground text-sm rounded-lg border border-border/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Assistant Temporel
          </span>
        )}
      </button>
    </>
  )
}
