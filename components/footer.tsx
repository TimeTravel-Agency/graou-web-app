import Link from "next/link"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "À propos", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Réserver", href: "/booking" },
  ],
  destinations: [
    { label: "Paris 1889", href: "/paris-1889" },
    { label: "Crétacé", href: "/cretace" },
    { label: "Florence 1504", href: "/florence-1504" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-16 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-2xl font-semibold tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                TimeTravel <span className="text-primary">Agency</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-8">
              Votre passeport pour explorer les moments les plus extraordinaires de l&apos;histoire humaine.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Entreprise
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Destinations
            </h4>
            <ul className="space-y-4">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-foreground mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 TimeTravel Agency. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#terms" className="hover:text-primary transition-colors">
              Conditions
            </Link>
            <Link href="#privacy" className="hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="#cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
