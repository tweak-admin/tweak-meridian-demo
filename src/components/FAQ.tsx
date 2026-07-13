import React, { useState } from 'react'
import { Container } from './ui/Container'
import { Section, SectionLabel, SectionHeading } from './ui/Section'

// ⚠️ Review opportunity: Answer text padding is inconsistent (some have more py than others)
// ⚠️ Review opportunity: Plus/chevron icon changes size inconsistently when open
// ⚠️ Review opportunity: Some question text has tighter line-height

interface FAQItem {
  question: string
  answer: string
  loosePadding?: boolean
}

const faqs: FAQItem[] = [
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'You get full access to all Pro features for 14 days, no credit card required. At the end of the trial, you can choose to subscribe to a paid plan or downgrade to the free Starter tier. Your data is always yours — we export it anytime you ask.',
    loosePadding: true,
  },
  {
    question: 'Can I import data from other tools like Jira or Notion?',
    answer:
      'Yes. Meridian supports one-click imports from Jira, Linear, Notion, Asana, Trello, and GitHub Projects. Your issues, projects, and team structure all migrate over cleanly. Our import wizard usually takes less than five minutes.',
  },
  {
    question: 'Is Meridian GDPR and SOC 2 compliant?',
    answer:
      'Meridian is SOC 2 Type II certified and fully GDPR compliant. We offer data processing agreements (DPAs) for all customers, EU data residency on Enterprise plans, and detailed audit logs so you always know who accessed what and when.',
    loosePadding: true,
  },
  {
    question: 'How does pricing work for larger teams?',
    answer:
      'Pro pricing is per-seat per month. If you have a team larger than 50, reach out to our sales team for volume discounts and custom arrangements. Enterprise plans include unlimited seats with custom billing.',
  },
  {
    question: 'What integrations are available?',
    answer:
      'Meridian integrates natively with GitHub, GitLab, Bitbucket, Slack, Microsoft Teams, Figma, Linear, Jira, Google Workspace, Notion, Zapier, and 200+ more through our open API and webhook system.',
  },
  {
    question: 'Can I self-host Meridian?',
    answer:
      'Self-hosting is available on the Enterprise plan. We provide a Docker-based deployment, Kubernetes helm charts, and dedicated onboarding support for infrastructure setup. Reach out to our team to learn more.',
  },
]

interface FAQItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function FAQRow({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {/* ⚠️ Some questions use slightly tighter line-height (leading-snug vs leading-normal) */}
        <span
          className={`text-sm font-semibold text-gray-900 ${
            item.loosePadding ? 'leading-normal' : 'leading-snug'
          }`}
        >
          {item.question}
        </span>
        {/* ⚠️ Closed icon is w-5/h-5, open icon is w-4/h-4 — inconsistent size */}
        <span
          className={`flex shrink-0 items-center justify-center rounded-full border transition-colors ${
            isOpen
              ? 'border-gray-200 bg-gray-100 text-gray-900'
              : 'border-gray-200 bg-white text-gray-400'
          }`}
          style={{ width: isOpen ? 28 : 28, height: isOpen ? 28 : 28 }}
        >
          {isOpen ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div
          className={[
            'pb-5 text-sm leading-relaxed text-gray-500',
            item.loosePadding ? 'pr-12' : 'pr-8',
          ].join(' ')}
        >
          {item.answer}
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <Section className="bg-[#F9F8F6]" id="faq">
      <Container narrow>
        <div className="mb-12 text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading>Everything you need to know</SectionHeading>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-2 card-shadow">
          {faqs.map((faq, i) => (
            <FAQRow
              key={faq.question}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Still have questions?{' '}
          <a href="#" className="font-medium text-gray-900 hover:underline">
            Chat with our team →
          </a>
        </p>
      </Container>
    </Section>
  )
}
