import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const CV_PAGES = [
  { src: "/cv/page-1.png", alt: "CV page 1" },
  { src: "/cv/page-2.png", alt: "CV page 2" },
  { src: "/cv/page-3.png", alt: "CV page 3" },
]

export function CVSection() {
  return (
    <>
      {/* Download button — always visible */}
      <div className="flex justify-center mb-6 sm:mb-8">
        <Button
          size="lg"
          asChild
          className="w-full sm:w-auto bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] text-white border-0 shadow-lg shadow-[oklch(60%_.25_330)]/30"
        >
          <a href="/cv.pdf" download="Fractiunate_CV.pdf">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
        </Button>
      </div>

      {/* CV pages — rendered as plain images, stacked vertically */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {CV_PAGES.map(({ src, alt }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            width={1241}
            height={1755}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg shadow-2xl shadow-black/40 border border-slate-700/50"
          />
        ))}
      </div>
    </>
  )
}
