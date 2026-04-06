interface SectionHeaderProps {
  icon?: React.ReactNode
  title: string
  subtitle?: string
}

export function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10 lg:mb-12">
      <div className="inline-flex items-center gap-3 mb-3 lg:mb-4">
        {icon && <span className="text-[oklch(60%_.25_330)]">{icon}</span>}
        {/* Mobile-first type scale: 2xl → 3xl → 4xl → 5xl */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto px-4 sm:px-0">
          {subtitle}
        </p>
      )}
    </div>
  )
}
