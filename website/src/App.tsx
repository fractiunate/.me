import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Globe,
  Trophy,
} from "lucide-react"

import { services } from "@/data/services"
import { CarouselDots } from "@/components/CarouselDots"
import { ContactCard } from "@/components/ContactCard"
import { CVSection } from "@/components/CVSection"
import { Footer } from "@/components/Footer"
import { NavButtons } from "@/components/NavButtons"
import { SectionHeader } from "@/components/SectionHeader"
import { ServiceCard } from "@/components/ServiceCard"
import { ServiceDescription } from "@/components/ServiceDescription"
import { SocialLinks } from "@/components/SocialLinks"

const SECTIONS = ["hero", "contact", "cv"] as const

const contactItems = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "fractiunate@gmail.com",
    href: "mailto:fractiunate@gmail.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Mobile",
    value: "+49 152 0926 1143",
    href: "tel:+4915209261143",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    label: "Website",
    value: "fractiunate.me",
    href: "https://fractiunate.me",
    external: true,
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "WhatsApp",
    value: "Contact me",
    href: "https://wa.me/4915209261143",
    external: true,
  },
]

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const touchStartX = useRef(0)

  // Scroll tracking — uses element offsets, not fixed vh math
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowBackToTop(scrollY > window.innerHeight)

      const midpoint = scrollY + window.innerHeight / 2
      let active = 0
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= midpoint) active = i
      })
      setCurrentSection(active)

      const footer = document.querySelector("footer")
      if (footer) setIsFooterVisible(footer.getBoundingClientRect().top < window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => {
      if (!isCarouselPaused) setCurrentCard((p) => (p + 1) % services.length)
    }, 5000)
    return () => clearInterval(id)
  }, [isCarouselPaused])

  const nextCard = () => setCurrentCard((p) => (p + 1) % services.length)
  const prevCard = () => setCurrentCard((p) => (p - 1 + services.length) % services.length)

  // Touch swipe on carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? nextCard() : prevCard()
  }

  const handleScrollDown = () => {
    if (currentSection === SECTIONS.length - 1) {
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" })
    } else {
      const el = document.getElementById(SECTIONS[currentSection + 1])
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">

        <NavButtons
          showBackToTop={showBackToTop}
          isFooterVisible={isFooterVisible}
          currentSection={currentSection}
          sectionsLength={SECTIONS.length}
          onScrollUp={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onScrollDown={handleScrollDown}
        />

        {/* Social sidebar — desktop only, mobile icons live inside hero */}
        <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
          <SocialLinks />
        </div>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          id="hero"
          className={[
            // Mobile-first: tight padding, grow to fill screen
            "min-h-screen flex flex-col items-center justify-center",
            "px-4 sm:px-6 lg:px-8",
            // Bottom padding avoids the fixed nav buttons (larger on mobile to clear iOS home bar)
            "pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-32",
          ].join(" ")}
        >
          <div className="max-w-4xl mx-auto text-center w-full">

            {/* Heading — mobile-first scale */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight mt-8 sm:mt-16">
              This is{" "}
              <span className="relative inline-block">
                <span
                  className="bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] bg-clip-text text-transparent"
                  style={{ WebkitTextStroke: "1px transparent", paintOrder: "stroke fill" }}
                >
                  FRACTIUNATE.me
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] bg-clip-text text-transparent"
                  style={{
                    WebkitTextStroke: "1px turquoise",
                    filter:
                      "drop-shadow(-2px 0 3px rgba(64,224,208,0.2)) drop-shadow(-1px 0 2px rgba(64,224,208,0.1))",
                    WebkitMaskImage:
                      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 80%)",
                    maskImage:
                      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 80%)",
                  }}
                >
                  FRACTIUNATE.me
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              Hi, I'm David. Glad you found your way to Quality Software Engineering &amp; Cloud
              Architecture, made in Berlin.
            </p>

            {/* CTA buttons — stacked on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-44 bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] text-white border-0 shadow-lg shadow-[oklch(60%_.25_330)]/30"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-44 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-300"
              >
                <a href="#cv">
                  <Trophy className="w-5 h-5 mr-2" />
                  My Experience
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-44 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-300"
              >
                <a href="https://devops-sushi.de/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Blog
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-44 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-300"
              >
                <a href="https://tree.fractiunate.me" target="_blank" rel="noopener noreferrer">
                  <Network className="w-5 h-5 mr-2" />
                  Link Tree
                </a>
              </Button>
            </div>

            {/* Carousel wrapper — tighter padding on mobile to avoid button clip */}
            <div className="relative mb-6 sm:mb-8 max-w-4xl mx-auto px-10 sm:px-16">
              <Button
                onClick={prevCard}
                size="icon"
                variant="outline"
                aria-label="Previous service"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-40 rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-slate-300" />
              </Button>
              <Button
                onClick={nextCard}
                size="icon"
                variant="outline"
                aria-label="Next service"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-40 rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </Button>

              {/* Touch-swipeable carousel track */}
              <div
                className="relative h-40 sm:h-48 perspective-1000 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative h-full flex items-center justify-center">
                  {services.map((service, index) => {
                    const offset = (index - currentCard + services.length) % services.length
                    const isCurrent = offset === 0
                    const isNext = offset === 1
                    const isPrev = offset === services.length - 1

                    let transform = "translateX(0) scale(1)"
                    let opacity = 0
                    let zIndex = 0
                    let maskImage = "none"

                    if (isCurrent) {
                      opacity = 1
                      zIndex = 30
                    } else if (isNext) {
                      transform = "translateX(50%) scale(0.85) rotateY(-10deg)"
                      opacity = 0.4
                      zIndex = 10
                      maskImage = "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)"
                    } else if (isPrev) {
                      transform = "translateX(-50%) scale(0.85) rotateY(10deg)"
                      opacity = 0.4
                      zIndex = 10
                      maskImage = "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)"
                    }

                    return (
                      <div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
                        style={{
                          transform,
                          opacity,
                          zIndex,
                          pointerEvents: isCurrent ? "auto" : "none",
                          WebkitMaskImage: maskImage,
                          maskImage,
                        }}
                      >
                        <ServiceCard
                          icon={service.icon}
                          title={service.title}
                          isActive={isCurrent}
                          onMouseEnter={() => isCurrent && setIsCarouselPaused(true)}
                          onMouseLeave={() => isCurrent && setIsCarouselPaused(false)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <ServiceDescription
              title={services[currentCard].title}
              description={services[currentCard].description}
            />

            <CarouselDots
              count={services.length}
              current={currentCard}
              labels={services.map((s) => s.title)}
              onSelect={setCurrentCard}
            />

            {/* Social links — mobile only (desktop uses fixed sidebar) */}
            <div className="flex lg:hidden gap-4 justify-center items-center mt-10 sm:mt-12">
              <SocialLinks />
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────────── */}
        <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        >
          <div className="max-w-4xl mx-auto w-full">
            <SectionHeader
              title="Get in Touch"
              subtitle="Let's discuss your next project or collaboration"
            />
            {/* 1-col on mobile, 2-col on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
              {contactItems.map((item) => (
                <ContactCard key={item.href} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CV ───────────────────────────────────────────────────── */}
        <section
          id="cv"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        >
          <div className="max-w-6xl mx-auto w-full">
            <SectionHeader
              icon={<FileText className="w-7 h-7 sm:w-8 sm:h-8" />}
              title="Curriculum Vitae"
              subtitle="Download or view my professional experience and qualifications"
            />
            <CVSection />
          </div>
        </section>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
