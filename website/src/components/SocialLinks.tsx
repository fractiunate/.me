import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  /** Extra classes applied to every icon button */
  buttonClassName?: string
}

const links = [
  {
    href: "https://github.com/fractiunate",
    label: "GitHub Profile",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: "https://www.linkedin.com/in/fractiunate/",
    label: "LinkedIn Profile",
    icon: <Linkedin className="w-5 h-5" />,
  },
]

export function SocialLinks({ buttonClassName }: SocialLinksProps) {
  return (
    <>
      {links.map(({ href, label, icon }) => (
        <Button
          key={href}
          variant="outline"
          size="icon"
          asChild
          className={cn(
            // base — mobile-first: slightly smaller touch target (44 px via size="icon" = 36px + padding)
            "rounded-full bg-slate-800/80 backdrop-blur-sm border-slate-700",
            "text-slate-300 hover:text-white",
            "hover:bg-slate-700 hover:border-[oklch(60%_.25_330)]",
            // scale effect only on non-touch (desktop hover)
            "lg:hover:scale-110",
            "transition-all duration-300 shadow-lg",
            buttonClassName,
          )}
        >
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            {icon}
          </a>
        </Button>
      ))}
    </>
  )
}
