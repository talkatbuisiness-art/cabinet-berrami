import { useState, useEffect } from 'react'
import {
  Phone,
  MapPin,
  Mail,
  Scale,
  Anchor,
  Shield,
  Menu,
  X,
  ChevronRight,
  Star,
  Send,
  Clock,
  MessageCircle,
} from 'lucide-react'

/* ─────────────── NAVBAR ─────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Expertises', href: '#expertises' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#accueil"
          className={`text-xl font-serif tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-dark' : 'text-white'
          }`}
        >
          K.<span className="text-primary">Berrami</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-dark-light' : 'text-white/80'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm tracking-wider uppercase px-5 py-2.5 border border-current rounded-full transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white text-primary"
          >
            Prendre rendez-vous
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? 'text-dark' : 'text-white'} size={24} />
          ) : (
            <Menu className={scrolled ? 'text-dark' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-light">
          <div className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-dark-light text-sm tracking-widest uppercase py-2"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Abstract geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-white/5"></div>
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full border border-white/5"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        <div className="absolute top-1/2 left-20 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <Scale size={14} className="text-primary" />
          <span className="text-white/70 text-xs tracking-widest uppercase">
            Barreau de Casablanca
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
          Maître Khalid
          <br />
          <span className="text-primary">Berrami</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 font-light">
          Avocat au Barreau de Casablanca, spécialiste en Droit Maritime,
          Assurances et Droit privé.
        </p>

        <div className="flex items-center justify-center gap-1.5 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < 4 ? 'text-primary fill-primary' : 'text-primary fill-primary/50'}
            />
          ))}
          <span className="text-white/50 text-sm ml-2">4.8/5</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
          >
            Prendre rendez-vous
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="tel:0522313499"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/10"
          >
            <Phone size={16} />
            05 22 31 34 99
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  )
}

/* ─────────────── EXPERTISES ─────────────── */
function Expertises() {
  const cards = [
    {
      icon: Anchor,
      title: 'Droit Maritime',
      desc: 'Contentieux armateurs, affrètement, transport maritime, pollution maritime, saisies conservatoires et exécution sur navires.',
    },
    {
      icon: Shield,
      title: 'Assurances',
      desc: 'Contentieux en assurance maritime, responsabilité civile, sinistres, recours des assureurs et défense des assurés.',
    },
    {
      icon: Scale,
      title: 'Droit Privé',
      desc: 'Droit des affaires, contrats commerciaux, contentieux civil, procédures devant les juridictions marocaines.',
    },
  ]

  return (
    <section id="expertises" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-xs tracking-[0.2em] uppercase mb-4 block">
            Nos compétences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Domaines d'expertise
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-2xl border border-gray-light/50 transition-all duration-500 hover:shadow-xl hover:shadow-dark/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-primary">
                <c.icon
                  size={24}
                  className="text-primary transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-serif text-xl text-dark mb-4">{c.title}</h3>
              <p className="text-dark-light/80 leading-relaxed text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── À PROPOS ─────────────── */
function APropos() {
  return (
    <section id="apropos" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-6">
                    <Scale size={40} className="text-primary" />
                  </div>
                  <span className="font-serif text-3xl text-white">K.<span className="text-primary">Berrami</span></span>
                </div>
              </div>

              {/* Decorative lines */}
              <div className="absolute top-10 left-10 w-16 h-[1px] bg-white/20"></div>
              <div className="absolute top-10 left-10 w-[1px] h-16 bg-white/20"></div>
              <div className="absolute bottom-10 right-10 w-16 h-[1px] bg-white/20"></div>
              <div className="absolute bottom-10 right-10 w-[1px] h-16 bg-white/20"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-primary/20"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary/5"></div>
          </div>

          <div>
            <span className="text-primary text-xs tracking-[0.2em] uppercase mb-4 block">
              À propos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-dark mb-8">
              Une expertise au service de vos intérêts
            </h2>
            <div className="w-12 h-[2px] bg-primary mb-8"></div>

            <div className="space-y-5 text-dark-light/80 leading-relaxed">
              <p>
                Maître Khalid Berrami est avocat inscrit au Barreau de Casablanca.
                Fort d'une solide expérience dans le conseil et le contentieux,
                il accompagne une clientèle exigeante composée d'armateurs,
                d'assureurs et d'entreprises du secteur privé.
              </p>
              <p>
                Son approche allie rigueur juridique et pragmatisme. Chaque dossier
                est traité avec la plus grande attention, dans un souci constant
                d'efficacité et de confidentialité.
              </p>
              <p>
                Le cabinet intervient devant l'ensemble des juridictions marocaines
                et assure une représentation diligente des intérêts de ses clients
                dans toutes les instances judiciaires.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <div className="font-serif text-3xl text-dark">15+</div>
                <div className="text-xs text-dark-light/60 tracking-wider uppercase mt-1">Années d'expérience</div>
              </div>
              <div className="w-[1px] h-12 bg-gray-light"></div>
              <div className="text-center">
                <div className="font-serif text-3xl text-dark">500+</div>
                <div className="text-xs text-dark-light/60 tracking-wider uppercase mt-1">Dossiers traités</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── CONTACT ─────────────── */
function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ nom: '', email: '', sujet: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-xs tracking-[0.2em] uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">
            Nous contacter
          </h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-light/50">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-light/60 tracking-wider uppercase mb-1">Téléphone</div>
                    <a href="tel:0522313499" className="text-dark hover:text-primary transition-colors">
                      05 22 31 34 99
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-light/60 tracking-wider uppercase mb-1">Email</div>
                    <span className="text-dark">contact@cabinet-berrami.ma</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-light/60 tracking-wider uppercase mb-1">Adresse</div>
                    <span className="text-dark">
                      1, rue Cadi Zemmouri (Habous)
                      <br />
                      Nouvelle médina, Casablanca
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-dark-light/60 tracking-wider uppercase mb-1">Horaires</div>
                    <span className="text-dark">
                      Lun – Ven : 9h00 – 18h00
                      <br />
                      Sam : 9h00 – 13h00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-light/50 space-y-6"
            >
              {submitted && (
                <div className="p-4 rounded-xl bg-primary/10 text-primary text-sm">
                  Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-dark-light/60 tracking-wider uppercase mb-2 block">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-light bg-cream text-dark placeholder:text-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-xs text-dark-light/60 tracking-wider uppercase mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-light bg-cream text-dark placeholder:text-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-dark-light/60 tracking-wider uppercase mb-2 block">
                  Sujet
                </label>
                <input
                  type="text"
                  required
                  value={form.sujet}
                  onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-light bg-cream text-dark placeholder:text-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Objet de votre demande"
                />
              </div>

              <div>
                <label className="text-xs text-dark-light/60 tracking-wider uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-light bg-cream text-dark placeholder:text-gray focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Décrivez votre situation..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
              >
                Envoyer le message
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── MAP ─────────────── */
function MapSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-xs tracking-[0.2em] uppercase mb-4 block">
            Localisation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-dark">Où nous trouver</h2>
          <div className="w-12 h-[2px] bg-primary mx-auto mt-6"></div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-light/50 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.3088883158286!2d-7.6119!3d33.5931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4e5d5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s1+rue+Cadi+Zemmouri%2C+Casablanca%2C+Maroc!5e0!3m2!1sfr!2sma!4v1710000000000!5m2!1sfr!2sma"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte du cabinet"
            className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="py-12 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Cabinet Maître Khalid Berrami. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:0522313499"
              className="text-white/40 hover:text-primary transition-colors text-sm"
            >
              05 22 31 34 99
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#accueil"
              className="text-white/40 hover:text-primary transition-colors text-sm"
            >
              Haut de page
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────── WHATSAPP FAB ─────────────── */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/212522313499"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  )
}

/* ─────────────── APP ─────────────── */
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Expertises />
      <APropos />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
