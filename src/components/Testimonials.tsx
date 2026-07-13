import React from 'react'
import { Container } from './ui/Container'
import { Section, SectionLabel, SectionHeading } from './ui/Section'

// ⚠️ Review opportunity: Second avatar is w-10/h-10 while others are w-12/h-12 (inconsistent)
// ⚠️ Review opportunity: Third card has less bottom padding than the others
// ⚠️ Review opportunity: Company name font size varies slightly between cards

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatarShade: string
  initials: string
  smallAvatar?: boolean
  lessPaddingBottom?: boolean
  smallCompany?: boolean
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Meridian changed how our team operates entirely. We shipped our last three product cycles on time — something that hadn't happened in two years. The visibility it gives leadership is unlike anything I've seen.",
    name: 'Priya Mehta',
    role: 'VP of Engineering',
    company: 'Stackline',
    avatarShade: 'bg-black',
    initials: 'PM',
  },
  {
    quote:
      "The automations alone saved us probably 6 hours a week of status updates. Our design and engineering teams finally feel like one team.",
    name: 'James Okafor',
    role: 'Head of Product',
    company: 'Northbound',
    avatarShade: 'bg-zinc-600',
    initials: 'JO',
    // ⚠️ Smaller avatar — should match the others
    smallAvatar: true,
  },
  {
    quote:
      "We evaluated twelve tools before choosing Meridian. The analytics dashboard alone justified the cost. And the UI is just beautifully done — our team actually enjoys using it.",
    name: 'Sofia Reinholt',
    role: 'CTO',
    company: 'Arclight Systems',
    avatarShade: 'bg-zinc-500',
    initials: 'SR',
    // ⚠️ Less bottom padding
    lessPaddingBottom: true,
    // ⚠️ Smaller company name text
    smallCompany: true,
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.6 3.4 3.7.5-2.7 2.7.6 3.7L7 9.5l-3.2 1.8.6-3.7-2.7-2.7 3.7-.5L7 1z"
            fill="#18181b"
          />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-14 text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionHeading>
            Loved by teams who ship
          </SectionHeading>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={[
                'flex flex-col rounded-2xl border border-zinc-100 bg-white p-7 card-shadow',
                t.lessPaddingBottom ? 'pb-4' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <StarRating />

              {/* Quote */}
              <blockquote className="mt-4 flex-1">
                <p className="text-sm leading-relaxed text-zinc-600">"{t.quote}"</p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                {/* ⚠️ Second testimonial avatar is w-10/h-10 (smaller) */}
                <div
                  className={[
                    'flex shrink-0 items-center justify-center rounded-full font-semibold text-white',
                    t.smallAvatar ? 'h-10 w-10 text-xs' : 'h-12 w-12 text-sm',
                    t.avatarShade,
                  ].join(' ')}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                  {/* ⚠️ Third card uses text-xs for company instead of text-sm */}
                  <p
                    className={`font-medium text-zinc-700 ${
                      t.smallCompany ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {['Stackline', 'Northbound', 'Arclight', 'Polaris', 'Vantage', 'Clearwave'].map(
            (company) => (
              <p
                key={company}
                className="text-sm font-semibold tracking-wide text-zinc-300"
              >
                {company}
              </p>
            )
          )}
        </div>
      </Container>
    </Section>
  )
}
