import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={['py-24 lg:py-32', className].filter(Boolean).join(' ')}
    >
      {children}
    </section>
  )
}

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
      {children}
    </p>
  )
}

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={[
        'text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </h2>
  )
}

interface SectionSubheadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionSubheading({ children, className = '' }: SectionSubheadingProps) {
  return (
    <p
      className={[
        'mt-4 max-w-2xl text-lg leading-relaxed text-gray-500',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </p>
  )
}
