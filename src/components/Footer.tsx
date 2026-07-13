import React from 'react'
import { Container } from './ui/Container'

// ⚠️ Review opportunity: Footer column spacing is inconsistent (some columns use gap-3, others gap-2)
// ⚠️ Review opportunity: Newsletter input height doesn't align with button height
// ⚠️ Review opportunity: Social icon spacing too tight (gap-2 should be gap-3)
// ⚠️ Review opportunity: Copyright text is too low opacity (opacity-30 is barely readable)
// ⚠️ Review opportunity: All footer links look the same weight — hierarchy unclear

const footerLinks = {
  Product: ['Features', 'Dashboard', 'Changelog', 'Roadmap', 'Status', 'API Docs'],
  Company: ['About', 'Blog', 'Careers', 'Press kit', 'Contact'],
  Resources: ['Documentation', 'Community', 'Webinars', 'Partners', 'Integrations'],
  Legal: ['Privacy policy', 'Terms of service', 'Cookie policy', 'Security'],
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-700"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container>
        {/* Main footer grid */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-5 flex items-center gap-2.5">
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
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">
              The workspace that thinks ahead. Built for teams who care about speed, craft,
              and clarity.
            </p>

            {/* Newsletter — input height slightly shorter than button */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Stay in the loop
            </p>
            <div className="flex gap-2">
              {/* ⚠️ Input is h-9, button is h-10 — misaligned */}
              <input
                type="email"
                placeholder="your@email.com"
                className="h-9 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
              />
              <button className="h-10 rounded-lg bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>

          {/* Link columns — ⚠️ spacing inconsistent between columns */}
          {Object.entries(footerLinks).map(([section, links], colIndex) => (
            <div key={section} className="lg:col-span-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-900">
                {section}
              </p>
              {/* ⚠️ Some columns use gap-3, others gap-2 (alternating to add subtle inconsistency) */}
              <ul className={`flex flex-col ${colIndex % 2 === 0 ? 'gap-2' : 'gap-3'}`}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 py-6 sm:flex-row">
          {/* ⚠️ Copyright opacity is too low — barely readable */}
          <p className="text-xs text-gray-900 opacity-30">
            © 2025 Meridian Technologies, Inc. All rights reserved.
          </p>

          {/* Social icons — ⚠️ too tight spacing (gap-2 should be gap-3) */}
          <div className="flex items-center gap-2">
            {/* Twitter/X */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M12.5 2L8.5 6.5M2 12l4-4m0 0L2 2h3.5L12.5 12H9L6 8z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SocialIcon>
            {/* GitHub */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C3.69 1 1 3.69 1 7c0 2.65 1.72 4.9 4.1 5.69.3.06.41-.13.41-.29v-1.02C3.73 11.7 3.38 10.44 3.38 10.44c-.27-.69-.67-.87-.67-.87-.55-.37.04-.37.04-.37.6.04.92.62.92.62.54.92 1.41.65 1.76.5.05-.39.21-.65.38-.8-1.33-.15-2.73-.66-2.73-2.96 0-.65.23-1.18.62-1.6-.06-.15-.27-.76.06-1.58 0 0 .51-.16 1.67.62A5.85 5.85 0 017 4.65c.52 0 1.04.07 1.53.2 1.16-.78 1.67-.62 1.67-.62.33.82.12 1.43.06 1.58.39.42.62.95.62 1.6 0 2.3-1.41 2.81-2.75 2.96.22.19.41.56.41 1.12v1.67c0 .16.11.35.41.29C11.28 11.9 13 9.65 13 7c0-3.31-2.69-6-6-6z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
            {/* LinkedIn */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.25" />
                <path
                  d="M4 6v4M4 4.5v.01M7 10V8c0-1.1.9-2 2-2s2 .9 2 2v2M7 6v4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
            </SocialIcon>
            {/* YouTube */}
            <SocialIcon>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.25" />
                <path
                  d="M5.5 5.5l3 1.5-3 1.5V5.5z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </Container>
    </footer>
  )
}
