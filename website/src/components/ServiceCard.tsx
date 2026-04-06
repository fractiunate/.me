import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  isActive?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function ServiceCard({ icon, title, isActive, onMouseEnter, onMouseLeave }: ServiceCardProps) {
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        // Mobile-first sizing: slightly narrower on small screens
        "card-3d w-[min(80%,16rem)] sm:w-[min(72%,18rem)]",
        // Fixed height comfortable on all sizes
        "h-36 sm:h-40",
        "bg-slate-800/50 backdrop-blur-sm border-slate-700/50",
        "hover:bg-slate-800/70 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300",
        isActive && "border-[oklch(60%_.25_330)]/30",
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 h-full">
        {/* Icon slightly smaller on mobile */}
        <div className="text-[oklch(60%_.25_330)] [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
          {icon}
        </div>
        <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold text-center leading-tight">
          {title}
        </h3>
      </CardContent>
    </Card>
  )
}
