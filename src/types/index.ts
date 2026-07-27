export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface NavLink {
  href: string
  label: string
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image?: string
  url?: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
}

export interface TechItem {
  name: string
  category: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  locale: string
  social: {
    github?: string
    linkedin?: string
    email: string
  }
}

export interface AnalyticsEvent {
  event: string
  category?: string
  label?: string
  value?: number
}
