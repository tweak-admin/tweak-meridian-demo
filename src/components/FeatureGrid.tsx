import React from 'react'
import { Container } from './ui/Container'
import { Section, SectionLabel, SectionHeading, SectionSubheading } from './ui/Section'

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  // intentional imperfection flag
  tightPadding?: boolean
  smallIcon?: boolean
}

// ⚠️ Review opportunity: Card 3 icon is slightly smaller than others
// ⚠️ Review opportunity: Card 6 has tighter internal padding (p-6 vs p-7)
// ⚠️ Review opportunity: Section label could be more prominent
// ⚠️ Review opportunity: Description lengths are very inconsistent across cards

const features: Feature[] = [
  {
    title: 'Real-time Collaboration',
    description:
      'Work alongside your team with live cursors, presence indicators, and instant sync across every device. No more "did you see my message?"',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gray-700">
        <path
          d="M15 8a4 4 0 01-8 0M11 4v1M4.93 6.93l.7.7M2 13h1M4.93 19.07l.7-.7M11 18v1M17.07 19.07l-.7-.7M20 13h-1M17.07 6.93l-.7.7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: 'Smart Automations',
    description:
      'Build powerful workflows without writing code. Trigger actions based on events, schedules, or conditions across your entire stack.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gray-700">
        <path
          d="M13 2L4 13h7l-2 7 9-11h-7l2-9z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Advanced Analytics',
    description:
      'Understand how your team works with beautiful, actionable dashboards.',
    // ⚠️ Icon is slightly smaller here (20 vs 22)
    smallIcon: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" className="text-gray-700">
        <path
          d="M3 17l4-5 4 3 4-7 4 2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="2" y="2" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: 'Secure by Default',
    description:
      'Enterprise-grade security baked into every layer. SOC 2 Type II certified, with SSO, audit logs, and granular permission controls to keep your data safe.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gray-700">
        <path
          d="M11 2l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M8 11l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Seamless Integrations',
    description:
      'Connect Meridian to the tools your team already loves. GitHub, Slack, Figma, Linear, Notion, and 200+ more integrations available on day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gray-700">
        <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="6" cy="16" r="3" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M9 6h4M6 9v4M16 9v4M9 16h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'AI-powered Insights',
    description:
      'Surface blockers early. Predict timelines. Get smart suggestions.',
    // ⚠️ This card has tighter padding than the others
    tightPadding: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-gray-700">
        <path
          d="M11 3C7.13 3 4 6.13 4 10c0 2.4 1.2 4.5 3 5.74V18h8v-2.26C16.8 14.5 18 12.4 18 10c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M8 18h6M9 21h4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

interface FeatureCardProps {
  feature: Feature
}

function FeatureCard({ feature }: FeatureCardProps) {
  // ⚠️ Cards 3 and 6 have intentional subtle differences in icon size / padding
  const padding = feature.tightPadding ? 'p-6' : 'p-7'

  return (
    <div
      className={`group rounded-2xl border border-gray-100 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-md card-shadow ${padding}`}
    >
      <div
        className={`mb-5 inline-flex items-center justify-center rounded-xl bg-gray-100 ${
          feature.smallIcon ? 'h-10 w-10' : 'h-11 w-11'
        }`}
      >
        {feature.icon}
      </div>
      <h3 className="mb-2.5 text-base font-semibold text-gray-900">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
    </div>
  )
}

export function FeatureGrid() {
  return (
    <Section id="features" className="bg-[#F9F8F6]">
      <Container>
        {/* Section header */}
        <div className="mb-14 text-center">
          <SectionLabel>Features</SectionLabel>
          {/* ⚠️ Section heading feels slightly small — could use text-4xl or text-5xl */}
          <SectionHeading>
            Everything your team needs,{' '}
            <span className="text-gray-400">nothing it doesn't</span>
          </SectionHeading>
          <SectionSubheading className="mx-auto">
            Meridian was built from the ground up for modern engineering and product
            teams who care about both speed and craft.
          </SectionSubheading>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
