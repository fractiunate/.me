import { Cloud, Globe, Server, Zap, Shield, ArrowRight, Container, Box, GitBranch, GitMerge, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/SectionHeader"
import { offerings } from "@/data/offerings"

/** Icon illustration used when no real image is available yet.
 *  TODO: replace with <img src="/offerings/<id>.png" … /> once asset is ready.
 */
function CloudIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <Cloud
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <Globe className="w-5 h-5" />, label: "AWS" },
            { icon: <Server className="w-5 h-5" />, label: "Azure" },
            { icon: <Zap className="w-5 h-5" />, label: "GCP" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

function KubernetesIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <Container
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <Server className="w-5 h-5" />, label: "EKS" },
            { icon: <Server className="w-5 h-5" />, label: "AKS" },
            { icon: <Shield className="w-5 h-5" />, label: "IaC" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

function ContainersIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <Box
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <Globe className="w-5 h-5" />, label: "ACA" },
            { icon: <Server className="w-5 h-5" />, label: "ECS" },
            { icon: <Zap className="w-5 h-5" />, label: "Fargate" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

function CICDIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <GitBranch
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <Zap className="w-5 h-5" />, label: "GH Actions" },
            { icon: <Shield className="w-5 h-5" />, label: "GitLab CI" },
            { icon: <GitBranch className="w-5 h-5" />, label: "Terraform" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

function GitOpsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <GitMerge
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <GitBranch className="w-5 h-5" />, label: "ArgoCD" },
            { icon: <Shield className="w-5 h-5" />, label: "GitOps" },
            { icon: <Zap className="w-5 h-5" />, label: "Canary" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

function AIOnboardingIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <Sparkles
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <Sparkles className="w-5 h-5" />, label: "Copilot" },
            { icon: <GitBranch className="w-5 h-5" />, label: "Workshop" },
            { icon: <Shield className="w-5 h-5" />, label: "Guardrails" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

function AICustomIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[oklch(60%_.25_330)]/10 to-[oklch(65%_.25_320)]/5" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <Box
          className="w-20 h-20 text-[oklch(60%_.25_330)] drop-shadow-[0_0_24px_oklch(60%_.25_330/0.5)]"
          strokeWidth={1.2}
        />
        <div className="flex items-center gap-6 mt-2">
          {[
            { icon: <GitMerge className="w-5 h-5" />, label: "Agents" },
            { icon: <Sparkles className="w-5 h-5" />, label: "Skills" },
            { icon: <Zap className="w-5 h-5" />, label: "Tools" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="p-2 rounded-lg bg-slate-700/60 text-slate-300 border border-slate-600/40">
                {icon}
              </div>
              <span className="text-slate-400 text-xs font-mono">{label}</span>
            </div>
          ))}
        </div>
        <div className="absolute -inset-8 border border-dashed border-slate-700/40 rounded-full pointer-events-none" />
        <div className="absolute -inset-16 border border-dashed border-slate-700/20 rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

const ILLUSTRATIONS: Record<string, React.FC> = {
  AIOnboarding: AIOnboardingIllustration,
  AIWorkshops: AIOnboardingIllustration,
  AICustom: AICustomIllustration,
  Cloud: CloudIllustration,
  Kubernetes: KubernetesIllustration,
  Containers: ContainersIllustration,
  CICD: CICDIllustration,
  GitOps: GitOpsIllustration,
}

export function OfferingsSection() {
  return (
    <section
      id="offerings"
      className={[
        "min-h-screen flex flex-col items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "py-20 lg:py-32",
        "scroll-mt-20",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader
          icon={<Cloud className="w-8 h-8" />}
          title="My Offerings"
          subtitle="Practical services built on cloud-native foundations — designed to be affordable and easy to use."
        />

        <div className="flex flex-col gap-16">
          {offerings.map((offering, i) => (
            <article
              key={offering.id}
              id={`offering-${offering.id}`}
              className={[
                "scroll-mt-24",
                "flex flex-col gap-8",
                // Alternate image side on even/odd entries
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                "items-center",
              ].join(" ")}
            >
              <div className="w-full flex flex-col gap-3 lg:hidden">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {offering.title}
                </h3>

                <p className="text-[oklch(60%_.25_330)] font-medium text-base sm:text-lg">
                  {offering.tagline}
                </p>
              </div>

              {/* ── Image / illustration column ─────────────────────── */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div
                  className={[
                    "relative rounded-2xl overflow-hidden",
                    "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50",
                    "aspect-[4/3] w-full max-w-lg mx-auto",
                    "shadow-xl shadow-black/30",
                  ].join(" ")}
                >
                  {(() => { const I = ILLUSTRATIONS[offering.iconName] ?? CloudIllustration; return <I /> })()}
                </div>
              </div>

              {/* ── Text column ─────────────────────────────────────── */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                {/* Heading */}
                <h3 className="hidden lg:block text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {offering.title}
                </h3>

                {/* Tagline */}
                <p className="hidden lg:block text-[oklch(60%_.25_330)] font-medium text-base sm:text-lg">
                  {offering.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {offering.description}
                </p>

                {/* Feature bullets */}
                <ul className="flex flex-col gap-2 text-sm sm:text-base text-slate-300">
                  {offering.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Shield className="w-4 h-4 mt-0.5 text-[oklch(60%_.25_330)] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {offering.tags.map((tag) => (
                    <span
                      key={tag}
                      className={[
                        "px-3 py-1 rounded-full text-xs font-mono font-medium",
                        "bg-slate-700/60 border border-slate-600/50 text-slate-300",
                        "hover:border-[oklch(60%_.25_330)]/50 hover:text-white transition-colors",
                      ].join(" ")}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-2">
                  <Button
                    size="lg"
                    asChild
                    className={[
                      "bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)]",
                      "hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)]",
                      "text-white border-0 shadow-lg shadow-[oklch(60%_.25_330)]/30",
                      "w-full sm:w-auto",
                    ].join(" ")}
                  >
                    <a href={offering.ctaHref}>
                      {offering.ctaLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
