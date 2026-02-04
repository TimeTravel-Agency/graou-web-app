"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Destinations", href: "/#destinations" },
  { label: "Trouver mon voyage", href: "/quiz" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
]

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname()
  
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}

function NavLinksFallback() {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary text-muted-foreground"
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-semibold tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
              TimeTravel <span className="text-primary">Agency</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Suspense fallback={<NavLinksFallback />}>
              <NavLinks />
            </Suspense>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/booking">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-gold-light px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                Réserver
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Suspense fallback={<NavLinksFallback />}>
                <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
              </Suspense>
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-gold-light mt-4 w-full text-sm tracking-widest uppercase"
                >
                  Réserver
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
