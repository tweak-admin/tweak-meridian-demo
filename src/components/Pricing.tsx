import { useState } from 'react'
import { Container } from './ui/Container'
import { Section, SectionLabel, SectionHeading, SectionSubheading } from './ui/Section'
import { Button } from './ui/Button'

// ⚠️ Review opportunity: Starter CTA uses outline/gray instead of primary black
// ⚠️ Review opportunity: Pro card feature list has inconsistent item spacing
// ⚠️ Review opportunity: "Most Popular" badge on Pro card is slightly off-center
// ⚠️ Review opportunity: Enterprise CTA is not full-width like the other two
// ⚠️ Review opportunity: Starter and Pro price font sizes are slightly different
// ⚠️ Review opportunity: Annual toggle is subtle and easy to miss

interface PlanFeature {
  text: string
  included: boolean
}

interface Plan {
  name: string
  price: { monthly: string; annual: string }
  description: string
  features: PlanFeature[]
  cta: string
  highlighted: boolean
  ctaVariant: 'primary' | 'outline' | 'secondary' | 'ghost'
  ctaFullWidth: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: { monthly: '$0', annual: '$0' },
    description: 'Perfect for solo builders and small side projects just getting started.',
    features: [
      { text: 'Up to 3 team members', included: true },
      { text: '5 active projects', included: true },
      { text: 'Basic analytics', included: true },
      { text: '2GB storage', included: true },
      { text: 'Community support', included: true },
      { text: 'Advanced automations', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Get started free',
    // ⚠️ Uses outline instead of primary — should be primary black like Pro
    highlighted: false,
    ctaVariant: 'outline',
    ctaFullWidth: true,
  },
  {
    name: 'Pro',
    price: { monthly: '$29', annual: '$23' },
    description: 'For growing teams that need more power, automations, and collaboration.',
    features: [
      { text: 'Unlimited team members', included: true },
      { text: 'Unlimited projects', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: '100GB storage', included: true },
      { text: 'Priority support (< 4h response)', included: true },
      { text: 'Smart automations', included: true },
      { text: 'Custom integrations', included: true },
    ],
    cta: 'Start free trial',
    highlighted: true,
    ctaVariant: 'primary',
    ctaFullWidth: true,
    // ⚠️ Badge is slightly off-center (padding uneven)
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    description: 'Tailored security, compliance, and support for large organizations.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'SSO & SAML', included: true },
      { text: 'Advanced audit logs', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'Custom SLA', included: true },
      { text: 'On-premise option', included: true },
      { text: '99.99% uptime SLA', included: true },
    ],
    cta: 'Contact sales',
    highlighted: false,
    ctaVariant: 'secondary',
    // ⚠️ Not full-width — should match the other cards
    ctaFullWidth: false,
  },
]

interface PricingCardProps {
  plan: Plan
  annual: boolean
}

function PricingCard({ plan, annual }: PricingCardProps) {
  const price = annual ? plan.price.annual : plan.price.monthly

  return (
    <div
      className={[
        'relative flex flex-col rounded-3xl p-8',
        plan.highlighted
          ? 'bg-black text-white ring-2 ring-black card-shadow-lg scale-[1.02]'
          : 'border border-zinc-200 bg-white card-shadow',
      ].join(' ')}
    >
      {/* Popular badge — slightly off-center due to uneven padding */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
          <span className="rounded-full bg-black px-4 py-1 text-xs font-semibold text-white shadow-md pl-5">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Plan name + description */}
      <div className="mb-6">
        <p
          className={`mb-1.5 text-sm font-semibold uppercase tracking-widest ${
            plan.highlighted ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          {plan.name}
        </p>
        <p
          className={`text-sm leading-relaxed ${
            plan.highlighted ? 'text-zinc-400' : 'text-zinc-500'
          }`}
        >
          {plan.description}
        </p>
      </div>

      {/* Price — Starter uses text-4xl, Pro uses text-5xl (inconsistent) */}
      <div className="mb-8">
        <div className="flex items-end gap-1.5">
          <span
            className={[
              'font-bold tracking-tight',
              plan.name === 'Starter' ? 'text-4xl' : 'text-5xl',
              plan.highlighted ? 'text-white' : 'text-zinc-900',
            ].join(' ')}
          >
            {price}
          </span>
          {price !== 'Custom' && (
            <span
              className={`mb-2 text-sm ${plan.highlighted ? 'text-zinc-400' : 'text-zinc-400'}`}
            >
              / month
            </span>
          )}
        </div>
        {annual && price !== 'Custom' && price !== '$0' && (
          <p className={`mt-1 text-xs ${plan.highlighted ? 'text-zinc-400' : 'text-zinc-400'}`}>
            Billed annually · save 20%
          </p>
        )}
      </div>

      {/* CTA */}
      <div className={plan.ctaFullWidth ? 'w-full' : ''}>
        <Button
          variant={plan.highlighted ? 'outline' : plan.ctaVariant}
          size="md"
          fullWidth={plan.ctaFullWidth}
          className={
            plan.highlighted
              ? 'border-white/30 bg-white text-black hover:bg-zinc-100'
              : ''
          }
        >
          {plan.cta}
        </Button>
      </div>

      {/* Divider */}
      <div
        className={`my-7 border-t ${plan.highlighted ? 'border-zinc-700' : 'border-zinc-100'}`}
      />

      {/* Features — Pro card has intentionally inconsistent spacing */}
      <ul className="flex-1 space-y-0">
        {plan.features.map((feature, i) => (
          <li
            key={feature.text}
            className={[
              'flex items-start gap-3',
              // ⚠️ Pro card feature items: alternating mb-2 and mb-4 — inconsistent spacing
              plan.name === 'Pro'
                ? i % 2 === 0
                  ? 'mb-2'
                  : 'mb-4'
                : 'mb-3',
            ].join(' ')}
          >
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                feature.included
                  ? plan.highlighted
                    ? 'bg-zinc-700 text-white'
                    : 'bg-zinc-100 text-zinc-700'
                  : plan.highlighted
                  ? 'bg-zinc-800 text-zinc-600'
                  : 'bg-zinc-100 text-zinc-300'
              }`}
            >
              {feature.included ? (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                  <path d="M1 1l5 5M6 1L1 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span
              className={`text-sm ${
                feature.included
                  ? plan.highlighted
                    ? 'text-zinc-200'
                    : 'text-zinc-700'
                  : plan.highlighted
                  ? 'text-zinc-600 line-through'
                  : 'text-zinc-300 line-through'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <Section id="pricing" className="bg-zinc-50">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading>Simple, transparent pricing</SectionHeading>
          <SectionSubheading className="mx-auto">
            Start free. Upgrade when you're ready. No hidden fees, no surprises.
          </SectionSubheading>

          {/* Billing toggle — subtle, easy to miss */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                !annual ? 'bg-black text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                annual ? 'bg-black text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              Annual
              <span className="ml-1.5 rounded-full bg-zinc-100 px-1.5 py-0.5 text-xs font-semibold text-zinc-700">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} annual={annual} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-zinc-400">
          All plans include a 14-day free trial. No credit card required to start.{' '}
          <a href="#" className="text-zinc-700 hover:underline">
            Compare all features →
          </a>
        </p>
      </Container>
    </Section>
  )
}
