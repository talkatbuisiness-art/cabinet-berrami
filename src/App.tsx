import { useState, useEffect, useRef } from 'react'
import { Scale, Phone, Menu, ArrowRight, ChevronDown, Star, Quote, MapPin, Clock, MessageCircle, Award, Send, CheckCircle2, User, Mail } from 'lucide-react'

// Hook pour les animations au scroll
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

// Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#expertises', label: 'Expertises' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '#localisation', label: 'Localisation' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="logo">Berrami<span>&Associés</span></a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">Rendez-vous</a>
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// Hero
function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <p className="hero-pretitle">Cabinet d'Avocats — Paris & International</p>
        <h1 className="hero-title">
          Modernité & Excellence <br />
          Juridique
        </h1>
        <p className="hero-subtitle">
          Une approche contemporaine du droit, alliant rigueur analytique
          et vision stratégique pour accompagner vos projets les plus ambitieux.
        </p>
        <div className="hero-cta-group">
          <a href="#contact" className="btn-primary">Nous Contacter</a>
          <a href="#expertises" className="btn-outline">Découvrir</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-accent"></div>
      </div>
    </section>
  )
}

// Stats
function Stats() {
  const stats = [
    { number: '15', suffix: ' ans', label: "D'Excellence" },
    { number: '2500', suffix: '+', label: 'Missions Réalisées' },
    { number: '40', suffix: '+', label: 'Collaborateurs' },
    { number: '12', suffix: '', label: 'Pays Couverts' }
  ]

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item reveal">
            <div className="stat-number">{stat.number}<span>{stat.suffix}</span></div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Expertises
function Expertises() {
  const { ref, isInView } = useInView()

  const expertises = [
    {
      number: '01',
      title: 'Droit des Affaires',
      description: 'Conseil en stratégie corporate, fusions-acquisitions, restructurations et gouvernance d\'entreprise.'
    },
    {
      number: '02',
      title: 'Droit Immobilier',
      description: 'Accompagnement des transactions complexes, baux commerciaux, promotion et investissement immobilier.'
    },
    {
      number: '03',
      title: 'Arbitrage International',
      description: 'Résolution de litiges transfrontaliers, médiation et arbitrage devant les institutions internationales.'
    }
  ]

  return (
    <section className="expertises section-padding" id="expertises" ref={ref}>
      <div className="container">
        <div className="expertises-layout">
          <div className={`expertise-intro reveal ${isInView ? 'active' : ''}`}>
            <p className="section-pretitle">Nos Expertises</p>
            <h2 className="section-title">Une Vision Moderne du Droit</h2>
            <p>
              Notre cabinet combine expertise juridique pointue et compréhension approfondie
              des enjeux business pour vous accompagner dans tous vos projets.
            </p>
            <a href="#contact" className="btn-primary">Parler de votre projet</a>
          </div>
          <div className="expertises-list">
            {expertises.map((expertise, index) => (
              <div key={index} className={`expertise-item reveal ${isInView ? 'active' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="expertise-header">
                  <div className="expertise-line"></div>
                  <span className="expertise-number">{expertise.number}</span>
                  <h3 className="expertise-title">{expertise.title}</h3>
                </div>
                <p className="expertise-description">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Témoignages
function Temoignages() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref, isInView } = useInView()

  const temoignages = [
    {
      quote: "Le Cabinet Berrami a su nous accompagner avec une expertise remarquable sur notre opération de fusion. Une équipe réactive, stratégique et toujours à l'écoute.",
      author: "Philippe Dumont",
      role: "CEO, Dumont Industries"
    },
    {
      quote: "Une maîtrise exceptionnelle des dossiers internationaux. Leur approche moderne et leur réseau nous ont été précieux pour notre expansion européenne.",
      author: "Sarah Benali",
      role: "Directrice Juridique, TechCorp"
    },
    {
      quote: "Rigueur, efficacité et vision business : le Cabinet Berrami incarne ce que l'on attend d'un partenaire juridique de premier plan.",
      author: "Marc Lefebvre",
      role: "Président, Lefebvre Capital"
    }
  ]

  return (
    <section className="temoignages section-padding" id="temoignages" ref={ref}>
      <div className="container">
        <div className="temoignages-wrapper">
          <div className={`temoignages-header reveal ${isInView ? 'active' : ''}`}>
            <p className="section-pretitle">Témoignages</p>
          </div>
          <div className="temoignages-slider">
            <div
              className="temoignages-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {temoignages.map((temoignage, index) => (
                <div key={index} className="temoignages-slide">
                  <div className="temoignages-content">
                    <blockquote className="temoignages-quote">
                      {temoignage.quote}
                    </blockquote>
                    <div className="temoignages-author">
                      <span className="temoignages-name">{temoignage.author}</span>
                      <span className="temoignages-role">{temoignage.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`temoignages-nav reveal ${isInView ? 'active' : ''}`}>
            {temoignages.map((_, index) => (
              <button
                key={index}
                className={`temoignages-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Localisation
function Localisation() {
  const { ref, isInView } = useInView()

  return (
    <section className="localisation" id="localisation" ref={ref}>
      <div className="localisation-wrapper">
        <div className="localisation-image"></div>
        <div className={`localisation-content reveal ${isInView ? 'active' : ''}`}>
          <h2>Notre Cabinet</h2>
          <div className="localisation-item">
            <div className="localisation-icon">📍</div>
            <div className="localisation-text">
              <strong>Adresse</strong>
              45 Avenue Montaigne<br />75008 Paris, France
            </div>
          </div>
          <div className="localisation-item">
            <div className="localisation-icon">📞</div>
            <div className="localisation-text">
              <strong>Téléphone</strong>
              +33 (0)1 53 76 42 00
            </div>
          </div>
          <div className="localisation-item">
            <div className="localisation-icon">✉️</div>
            <div className="localisation-text">
              <strong>Email</strong>
              contact@cabinet-berrami.fr
            </div>
          </div>
          <div className="localisation-item">
            <div className="localisation-icon">🕐</div>
            <div className="localisation-text">
              <strong>Horaires</strong>
              Lundi — Vendredi: 8h30 — 19h30
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle')
  const { ref, isInView } = useInView()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('sent')
    setTimeout(() => setFormStatus('idle'), 4000)
  }

  return (
    <section className="contact section-padding" id="contact" ref={ref}>
      <div className="contact-wrapper">
        <div className={`contact-header reveal ${isInView ? 'active' : ''}`}>
          <p className="section-pretitle">Contact</p>
          <h2>Parlons de Votre Projet</h2>
        </div>
        <div className={`contact-form reveal ${isInView ? 'active' : ''}`}>
          {formStatus === 'sent' ? (
            <div className="form-success">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-copper" />
              <h3>Message envoyé !</h3>
              <p>Nous vous recontacterons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Nom</label>
                  <div className="input-wrapper">
                    <User className="w-4 h-4" />
                    <input type="text" placeholder="Votre nom" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Prénom</label>
                  <div className="input-wrapper">
                    <User className="w-4 h-4" />
                    <input type="text" placeholder="Votre prénom" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <div className="input-wrapper">
                    <Mail className="w-4 h-4" />
                    <input type="email" placeholder="votre@email.fr" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone</label>
                  <div className="input-wrapper">
                    <Phone className="w-4 h-4" />
                    <input type="tel" placeholder="+33 6 00 00 00 00" />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Message</label>
                  <textarea placeholder="Décrivez votre demande..." required></textarea>
                </div>
              </div>
              <button type="submit" className="form-submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Envoi en cours...' : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">Berrami<span>&Associés</span></a>
            <p>
              Cabinet d'avocats inscrit au Barreau de Paris.
              Une approche moderne et exigeante du droit au service de vos intérêts.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#expertises">Expertises</a></li>
              <li><a href="#temoignages">Témoignages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Expertises</h4>
            <ul className="footer-links">
              <li><a href="#">Droit des Affaires</a></li>
              <li><a href="#">Droit Immobilier</a></li>
              <li><a href="#">Arbitrage</a></li>
              <li><a href="#">Fiscalité</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Légal</h4>
            <ul className="footer-links">
              <li><a href="#">Mentions Légales</a></li>
              <li><a href="#">Confidentialité</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Cabinet Berrami — Tous droits réservés</p>
          <div className="footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// App principale
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Expertises />
      <Temoignages />
      <Localisation />
      <Contact />
      <Footer />
    </>
  )
}
