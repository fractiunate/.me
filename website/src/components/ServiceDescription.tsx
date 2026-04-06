interface ServiceDescriptionProps {
  title: string
  description: string
}

export function ServiceDescription({ title, description }: ServiceDescriptionProps) {
  return (
    <div className="mb-2 max-w-3xl mx-auto px-1 sm:px-0">
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 font-mono text-xs sm:text-sm">
        {/* Command line — wraps gracefully on narrow screens */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
          <span className="text-slate-500 select-none">$</span>
          <span className="text-[oklch(60%_.25_330)]">describe</span>
          <span className="text-slate-400">--service</span>
          <span className="text-white break-all">{title}</span>
        </div>
        <div className="pl-4 text-slate-300 leading-relaxed">{description}</div>
      </div>
    </div>
  )
}
