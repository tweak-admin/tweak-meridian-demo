import React, { useState, useEffect } from 'react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

const navLinks = [
  { label: 'Product', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' },
]

// ⚠️ Review opportunity: Logo opacity is too low (opacity-75 makes it feel washed out)
// ⚠️ Review opportunity: Nav links spacing is too tight (gap-5 should be gap-7 or gap-8)
// ⚠️ Review opportunity: Separator between nav and CTAs is missing, feels crowded

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo — opacity slightly low, feels washed out */}
          <a href="#" className="flex items-center gap-2.5 opacity-75">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2L15.5 6V12L9 16L2.5 12V6L9 2Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6V12M6 7.5L9 6L12 7.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[17px] font-semibold tracking-tight text-gray-900">
              Meridian
            </span>
          </a>

          {/* Desktop nav — links spaced a bit tight */}
          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden items-center gap-2.5 md:flex">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="primary" size="sm">
              Get started
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 5H15M3 9H15M3 13H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white pb-4 md:hidden">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
                <Button variant="outline" size="sm" fullWidth>
                  Sign in
                </Button>
                <Button variant="primary" size="sm" fullWidth>
                  Get started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
