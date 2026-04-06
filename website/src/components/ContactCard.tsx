import { Card, CardContent } from "@/components/ui/card"

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}

export function ContactCard({ icon, label, value, href, external }: ContactCardProps) {
  return (
    <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300">
      <CardContent className="flex items-center gap-4 p-4 sm:p-6">
        {/* Icon circle — slightly smaller on mobile */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[oklch(60%_.25_330)]/10 flex items-center justify-center flex-shrink-0 text-[oklch(60%_.25_330)]">
          <span className="[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{label}</h3>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-slate-300 hover:text-[oklch(60%_.25_330)] transition-colors text-sm sm:text-base break-all"
          >
            {value}
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
