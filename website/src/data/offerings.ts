export const OFFERING_GROUPS = [
  { id: "ai",    label: "AI & Agentic Engineering" },
  { id: "cicd",  label: "CI/CD and Deployments" },
  { id: "cloud", label: "Cloud Infrastructure" },
] as const

export type OfferingGroup = typeof OFFERING_GROUPS[number]["id"]

export interface Offering {
  id: string
  group: OfferingGroup
  title: string
  tagline: string
  description: string
  /** Lucide icon name (used by components that map to the icon registry) */
  iconName: string
  bullets: string[]
  tags: string[]
  ctaLabel: string
  ctaHref: string
}

export const offerings: Offering[] = [
  {
    id: "ai-agentic-onboarding",
    group: "ai",
    title: "AI Agentic Engineering Onboarding (Copilot)",
    tagline: "Structured Copilot onboarding for teams building with AI-assisted engineering workflows.",
    description:
      "I help your team adopt AI-assisted engineering safely and effectively with a practical onboarding " +
      "program focused on GitHub Copilot and modern agentic development patterns. Together we establish " +
      "prompting standards, review guardrails, and measurable productivity baselines so copilots accelerate " +
      "delivery without sacrificing code quality or security.",
    iconName: "AIOnboarding",
    bullets: [
      "Copilot onboarding sessions tailored to your stack and workflow",
      "Hands-on AI agentic engineering workshops and task-force sessions",
      "Team guardrails for secure prompts, code review, and policy compliance",
      "Playbooks and templates your engineers can apply immediately",
    ],
    tags: ["GitHub Copilot", "AI Engineering", "Agentic Workflows", "Workshops", "Enablement"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "ai-agentic-workshops-tipps",
    group: "ai",
    title: "AI Agentic Engineering Workshops and Tipps",
    tagline: "Hands-on workshops and practical tips to upskill your team in agentic engineering.",
    description:
      "I run focused workshops that help teams apply AI agentic engineering in real delivery contexts. " +
      "Sessions combine architecture guidance, practical exercises, and implementation tips so engineers " +
      "can move from experimentation to repeatable execution. You leave with concrete patterns, anti-patterns, " +
      "and a roadmap tailored to your stack.",
    iconName: "AIWorkshops",
    bullets: [
      "Interactive workshops tailored to your project and maturity level",
      "Practical tips for prompting, guardrails, and review workflows",
      "Live task-force sessions on your real backlog and use cases",
      "Actionable next-step roadmap for team-wide rollout",
    ],
    tags: ["AI Workshops", "Agentic Engineering", "Tips", "Enablement", "Task Force", "Playbooks"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "custom-agents-skills-tools",
    group: "ai",
    title: "Custom Agents, Skills & Tooling",
    tagline: "Design and implement custom agents, skills, and tools for your project use cases.",
    description:
      "I design and build custom AI agents, reusable skills, and project-specific tools that integrate " +
      "directly with your delivery workflows. From internal developer assistants to task automation and " +
      "domain-specific copilots, each solution is aligned to your real use cases and operational constraints.",
    iconName: "AICustom",
    bullets: [
      "Custom agent architecture for your domain and workflows",
      "Reusable skills and prompt patterns for recurring engineering tasks",
      "Tool integrations for repositories, CI/CD, docs, and internal platforms",
      "Use-case driven implementation with measurable outcomes",
    ],
    tags: ["Custom Agents", "Skills", "Tooling", "Automation", "Use Cases", "Developer Experience"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "managed-kubernetes", 
    group: "cloud",
    title: "Managed Cloud Kubernetes",
    tagline: "Development to Production-grade EKS & AKS clusters, delivered as Infrastructure as Code.",
    description:
      "I design, provision, and maintain managed Kubernetes clusters on AWS (EKS) and Azure (AKS) — " +
      "fully codified in Terraform so every resource is reproducible, version-controlled, and auditable. " +
      "From node-group sizing and autoscaling policies to RBAC, network policies, and cert-manager, " +
      "the entire stack is delivered as IaC. Day-2 operations — upgrades, scaling events, observability " +
      "integration — are handled for you, so your team ships features instead of managing control planes.",
    iconName: "Kubernetes",
    bullets: [
      "Cluster provisioned end-to-end in Terraform — no click-ops",
      "Node-group autoscaling, RBAC, and network policies configured out of the box",
      "Helm-based app delivery with cert-manager, ingress, and observability stack",
      "Managed upgrades and day-2 operations included",
    ],
    tags: ["EKS", "AKS", "Terraform", "Kubernetes", "IaC", "AWS", "Azure", "Helm"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "landing-page-hosting",
    group: "cloud",
    title: "Landing Page Hosting",
    tagline: "Easy, cheap static hosting on any major cloud.",
    description:
      "I offer fully managed, pay-as-you-go static website hosting on your choice of AWS S3 + CloudFront, " +
      "Azure Static Web Apps, or Google Cloud Storage. No servers to maintain — just push your files and your " +
      "site is live in minutes. Ideal for portfolios, landing pages, and micro-sites. Custom domain setup, " +
      "HTTPS, and CDN delivery included. Transparent pricing with no lock-in: you pick the cloud, I handle " +
      "the infrastructure.",
    iconName: "Cloud",
    bullets: [
      "On-demand provisioning — live within the hour",
      "HTTPS + CDN delivery out of the box",
      "Custom domain configuration included",
      "No server management — fully managed infra",
    ],
    tags: ["AWS", "Azure", "GCP", "CloudFront", "Static Sites", "CDN", "HTTPS"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "fullstack-container-hosting",
    group: "cloud",
    title: "Full-Stack Container Hosting",
    tagline: "Containerised apps deployed on Azure Container Apps, ECS, or Fargate — fully managed.",
    description:
      "Run your full-stack applications — frontend, backend, and workers — on managed container platforms " +
      "without the overhead of Kubernetes. I provision and configure Azure Container Apps, AWS ECS, or " +
      "AWS Fargate environments as Infrastructure as Code, wiring up autoscaling, secrets management, " +
      "private networking, and CI/CD pipelines so your containers ship straight from git to production.",
    iconName: "Containers",
    bullets: [
      "Supports Azure Container Apps, AWS ECS & Fargate",
      "Autoscaling, health checks, and zero-downtime deploys configured by default",
      "Secrets, env vars, and private networking handled securely",
      "CI/CD pipeline wired up from repository to production",
    ],
    tags: ["Azure Container Apps", "ECS", "Fargate", "Docker", "IaC", "Terraform", "CI/CD"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "cicd-automation",
    group: "cicd",
    title: "CI/CD Automation",
    tagline: "GitHub Actions & GitLab CI pipelines for infrastructure, containers, and service delivery.",
    description:
      "I build and maintain fully automated CI/CD pipelines using GitHub Actions and GitLab CI — " +
      "covering every stage from code commit to production artifact. Container images are built, " +
      "vulnerability-scanned, and pushed to your registry automatically. Infrastructure changes run " +
      "through Terraform pipelines with plan/apply approval gates, giving your team confidence and " +
      "control over every release without manual toil.",
    iconName: "CICD",
    bullets: [
      "GitHub Actions & GitLab CI pipelines for any project or team size",
      "OCI image builds, vulnerability scanning, and registry push automated end-to-end",
      "Infrastructure pipelines with Terraform plan/apply approval gates",
      "Reusable pipeline templates and shared workflows across repositories",
    ],
    tags: ["GitHub Actions", "GitLab CI", "OCI", "Docker", "Terraform", "CI/CD"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
  {
    id: "gitops",
    group: "cicd",
    title: "GitOps & ArgoCD",
    tagline: "Git as the single source of truth — automated, auditable deployments via ArgoCD.",
    description:
      "I implement GitOps workflows using ArgoCD so that every application and infrastructure state " +
      "is declared in Git and continuously reconciled with your cluster. Deployments become pull requests: " +
      "reviewed, approved, and fully auditable. Drift between desired and live state is detected and " +
      "corrected automatically, eliminating configuration drift and surprise incidents. ApplicationSets, " +
      "multi-cluster strategies, and progressive delivery with rollback are all on the table.",
    iconName: "GitOps",
    bullets: [
      "ArgoCD ApplicationSets for multi-cluster and multi-environment delivery",
      "Automatic drift detection — live state always matches Git",
      "Progressive delivery with canary and blue/green rollout strategies",
      "Full audit trail: every change is a reviewed, approved Git commit",
    ],
    tags: ["ArgoCD", "GitOps", "Kubernetes", "Helm", "ApplicationSets", "Progressive Delivery"],
    ctaLabel: "Contact Me",
    ctaHref: "mailto:fractiunate@gmail.com",
  },
]
