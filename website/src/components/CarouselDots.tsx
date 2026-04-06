import { cn } from "@/lib/utils"

interface CarouselDotsProps {
  count: number
  current: number
  labels: string[]
  onSelect: (index: number) => void
}

export function CarouselDots({ count, current, labels, onSelect }: CarouselDotsProps) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`Go to ${labels[index]}`}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            index === current
              ? "bg-[oklch(60%_.25_330)] w-8"
              : "w-2 bg-slate-600 hover:bg-slate-500",
          )}
        />
      ))}
    </div>
  )
}
