import { Cloud, Server, GitBranch, Shield, Container, Network, Trophy, Lightbulb } from "lucide-react"

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Architecture",
    description:
      "Designing scalable and resilient cloud infrastructure on AWS and Azure. Expertise in microservices, serverless architectures, and cloud-native solutions.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Consultancy",
    description:
      "Providing expert guidance on cloud strategy, DevOps transformation, and technical architecture. Helping teams optimize workflows and make informed technology decisions.",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "DevOps",
    description:
      "Implementing CI/CD pipelines, infrastructure as code, and automation strategies. Streamlining development workflows for faster, reliable deployments.",
  },
  {
    icon: <Container className="w-8 h-8" />,
    title: "Containers",
    description:
      "Building and managing containerized applications with Docker. Optimizing container images and orchestrating multi-container environments.",
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: "CI/CD",
    description:
      "Automating build, test, and deployment processes. Creating robust pipelines with GitHub Actions, GitLab CI and ArgoCD.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security",
    description:
      "Implementing security best practices, compliance standards, and automated security scanning. Ensuring secure infrastructure and application deployments.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Kubernetes",
    description:
      "Deploying and managing production-grade Kubernetes clusters. Expertise in Helm, operators, service mesh, and cloud-native ecosystem tools.",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend",
    description:
      "Building robust server-side applications and APIs. Expertise in Node.js, Python, and microservices architecture for scalable backend solutions.",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Frontend",
    description:
      "Creating responsive and modern web applications. Proficient in React, TypeScript, and modern frontend frameworks for exceptional user experiences.",
  },
]
