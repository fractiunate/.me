import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavButtonsProps {
  showBackToTop: boolean
  isFooterVisible: boolean
  currentSection: number
  sectionsLength: number
  onScrollUp: () => void
  onScrollDown: () => void
}

export function NavButtons({
  showBackToTop,
  isFooterVisible,
  currentSection,
  sectionsLength,
  onScrollUp,
  onScrollDown,
}: NavButtonsProps) {
  const isLastSection = currentSection === sectionsLength - 1
  const downLabel = isLastSection ? "Jump to End" : "Next page"

  // Shared safe-area bottom offset so the buttons sit above the iOS home bar
  const safeBottom = "bottom-[calc(2rem+env(safe-area-inset-bottom))]"

  return (
    <div className={cn("fixed right-6 lg:right-8 flex flex-col items-center gap-3 z-50", safeBottom)}>

      {/* ── Scroll-down indicator + back-to-top (desktop only, same slot) ── */}
      <div
        className={cn(
          "relative hidden lg:flex items-center justify-center transition-all duration-500",
          currentSection === 0 ? "h-[140px]" : "h-10",
        )}
      >
        {/* Animated mouse/scroll hint — fades out once user leaves hero */}
        <div
          className={cn(
            "absolute flex flex-col items-center gap-2 pointer-events-none transition-all duration-500",
            currentSection === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <span className="text-slate-400 text-xs">scroll</span>
          <span className="text-slate-400 text-xs">down</span>
          <div className="h-8 w-px border-l-2 border-dotted border-slate-400" />
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-[oklch(60%_.25_330)] rounded-full" />
          </div>
        </div>

        {/* Back-to-top — desktop, lives inside the collapsing height container */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onScrollUp}
              size="icon"
              aria-label="Back to top"
              className={cn(
                "rounded-full bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)]",
                "hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)]",
                "shadow-lg shadow-[oklch(60%_.25_330)]/30 border-0 transition-all duration-500",
                showBackToTop ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
              )}
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Back to top</TooltipContent>
        </Tooltip>
      </div>

      {/* ── Back-to-top — mobile only ── */}
      <Button
        onClick={onScrollUp}
        size="icon"
        aria-label="Back to top"
        className={cn(
          "lg:hidden rounded-full border-0",
          "bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)]",
          "hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)]",
          "shadow-lg shadow-[oklch(60%_.25_330)]/30 transition-all duration-300",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* ── Next-section / jump-to-end — shared mobile+desktop ── */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onScrollDown}
            size="icon"
            variant="outline"
            aria-label={downLabel}
            className={cn(
              "rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-700 text-slate-300",
              "hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 shadow-lg",
              isFooterVisible ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0",
            )}
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        {/* Tooltip only renders on desktop — pointless on touch */}
        <TooltipContent side="left" className="hidden lg:flex">
          {downLabel}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
