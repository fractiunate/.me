import { useState } from "react"
import {
  ArrowRight,
  BookOpen,
  Box,
  ChevronDown,
  Cloud,
  Container,
  GitBranch,
  GitMerge,
  Network,
  Sparkles,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { offerings, OFFERING_GROUPS } from "@/data/offerings"
import { cn } from "@/lib/utils"

interface HeaderProps {
  scrolled: boolean
}

function OfferingIcon({ name, className }: { name: string; className?: string }) {
  if (name === "AIOnboarding") return <Sparkles className={className} />
  if (name === "AIWorkshops") return <GitBranch className={className} />
  if (name === "AICustom") return <Box className={className} />
  if (name === "Kubernetes") return <Container className={className} />
  if (name === "Containers") return <Box className={className} />
  if (name === "CICD") return <GitBranch className={className} />
  if (name === "GitOps") return <GitMerge className={className} />
  return <Cloud className={className} />
}

export function Header({ scrolled }: HeaderProps) {
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center",
        "h-14 lg:h-16 px-4 lg:px-6 xl:px-10",
        "transition-all duration-300",
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-black/20"
          : "bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 lg:bg-transparent lg:backdrop-blur-none lg:border-b-0",
      )}
    >
      {/* Desktop header actions */}
      <div className="hidden lg:flex w-full items-center">
        <div className="flex-1" />

        <nav className="flex-none flex items-center gap-2" aria-label="Primary actions">
          <DropdownMenu open={isOfferingsOpen} onOpenChange={setIsOfferingsOpen}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center gap-1 rounded-md border px-4 py-2 text-sm font-medium",
                  "text-slate-300 hover:text-white",
                  "transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(60%_.25_330)]",
                  isOfferingsOpen
                    ? "bg-slate-700/60 border-[oklch(60%_.25_330)] text-white"
                    : "bg-transparent border-slate-600 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]",
                )}
                aria-expanded={isOfferingsOpen}
                aria-label="My Offerings"
              >
                My Offerings
                <ChevronDown
                  className={cn(
                    "relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200",
                    isOfferingsOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-[860px] max-w-[calc(100vw-3rem)] p-5 !left-auto !right-6 xl:!right-10"
              align="end"
              sideOffset={8}
            >
              <div className="grid grid-cols-3 gap-5">
                {OFFERING_GROUPS.map((group) => {
                  const items = offerings.filter((o) => o.group === group.id)
                  return (
                    <div key={group.id} className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 mb-1 whitespace-nowrap">
                        {group.id === "ai" && <Sparkles className="w-3 h-3 text-[oklch(60%_.25_330)]" />}
                        {group.id === "cicd" && <GitBranch className="w-3 h-3 text-[oklch(60%_.25_330)]" />}
                        {group.id === "cloud" && <Cloud className="w-3 h-3 text-[oklch(60%_.25_330)]" />}
                        <span className="text-[13px] leading-none font-semibold uppercase tracking-widest text-[oklch(60%_.25_330)]">
                          {group.label}
                        </span>
                      </div>
                      <div className="h-px bg-slate-700/70 mb-1" />

                      {items.length === 0 ? (
                        <p className="text-sm text-slate-400 italic px-1">Coming soon</p>
                      ) : (
                        items.map((offering) => (
                          <DropdownMenuItem key={offering.id} asChild className="p-0 focus:bg-transparent">
                            <a
                              href={`#offering-${offering.id}`}
                              className={cn(
                                "flex items-start gap-3 rounded-lg p-2.5 w-full",
                                "hover:bg-slate-700/55 border border-transparent hover:border-slate-600/60",
                                "transition-all duration-200 group/link no-underline",
                              )}
                              onClick={() => {
                                setIsOfferingsOpen(false)
                                requestAnimationFrame(() => {
                                  document
                                    .getElementById(`offering-${offering.id}`)
                                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                                })
                              }}
                            >
                              <div
                                className={cn(
                                  "flex-shrink-0 w-8 h-8 rounded-lg mt-0.5",
                                  "bg-gradient-to-br from-[oklch(60%_.25_330)]/20 to-[oklch(65%_.25_320)]/10",
                                  "border border-[oklch(60%_.25_330)]/30",
                                  "flex items-center justify-center",
                                )}
                              >
                                <OfferingIcon
                                  name={offering.iconName}
                                  className="w-4 h-4 text-[oklch(60%_.25_330)]"
                                />
                              </div>

                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="text-sm font-semibold text-white group-hover/link:text-[oklch(70%_.25_330)] transition-colors flex items-center gap-1">
                                  {offering.title}
                                  <ArrowRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
                                </span>
                                <span className="text-[13px] text-slate-300 leading-snug line-clamp-2">
                                  {offering.tagline}
                                </span>
                              </div>
                            </a>
                          </DropdownMenuItem>
                        ))
                      )}
                    </div>
                  )
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] text-white border-0 shadow-md shadow-[oklch(60%_.25_330)]/25"
          >
            <a href="#contact">Get in Touch</a>
          </Button>

          <Button
            size="sm"
            variant="outline"
            asChild
            className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-200"
          >
            <a href="#cv">
              <Trophy className="w-3.5 h-3.5 mr-1.5" />
              Experience
            </a>
          </Button>

          <Button
            size="sm"
            variant="outline"
            asChild
            className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-200"
          >
            <a href="https://devops-sushi.de/" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              Blog
            </a>
          </Button>

          <Button
            size="sm"
            variant="outline"
            asChild
            className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-200"
          >
            <a href="https://tree.fractiunate.me" target="_blank" rel="noopener noreferrer">
              <Network className="w-3.5 h-3.5 mr-1.5" />
              Link Tree
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
