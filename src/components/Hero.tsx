import { Container } from './ui/Container'
import { Button } from './ui/Button'

// ⚠️ Review opportunity: CTA group is too close to supporting text — needs more top margin
// ⚠️ Review opportunity: "Now in public beta" badge padding is unbalanced (px > py)
// ⚠️ Review opportunity: "Watch demo" button border barely visible against warm white bg
// ⚠️ Review opportunity: Hero illustration has tight top margin — needs breathing room
// ⚠️ Review opportunity: Headline could be 1 size larger on desktop (text-6xl → text-7xl)

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Subtle glow behind illustration */}
      <div className="absolute inset-x-12 -top-8 h-32 rounded-full bg-zinc-200 opacity-50 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white card-shadow-lg">
        {/* Window chrome */}
        <div className="flex h-10 items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4">
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="ml-3 h-5 w-64 rounded-md bg-zinc-200" />
        </div>

        {/* App shell */}
        <div className="flex h-[420px] overflow-hidden sm:h-[480px]">
          {/* Sidebar */}
          <div className="hidden w-52 shrink-0 border-r border-zinc-100 bg-zinc-50 sm:block">
            <div className="p-4">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-black" />
                <div className="h-4 w-20 rounded bg-zinc-200" />
              </div>
              <div className="space-y-1">
                {['Dashboard', 'Projects', 'Analytics', 'Team', 'Settings'].map((item, i) => (
                  <div
                    key={item}
                    className={`flex h-8 items-center gap-2.5 rounded-lg px-2.5 ${
                      i === 0 ? 'bg-black' : ''
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded ${
                        i === 0 ? 'bg-zinc-600' : 'bg-zinc-200'
                      }`}
                    />
                    <div
                      className={`h-3 rounded ${
                        i === 0 ? 'w-16 bg-zinc-500' : 'w-12 bg-zinc-200'
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-zinc-200 pt-4 space-y-1">
                {['Inbox', 'Reports', 'Integrations'].map((item) => (
                  <div key={item} className="flex h-8 items-center gap-2.5 rounded-lg px-2.5">
                    <div className="h-4 w-4 rounded bg-zinc-200" />
                    <div className="h-3 w-14 rounded bg-zinc-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden bg-white p-5">
            {/* Header row */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mb-1.5 h-5 w-28 rounded bg-zinc-800" />
                <div className="h-3.5 w-44 rounded bg-zinc-200" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-20 rounded-lg bg-zinc-100" />
                <div className="h-8 w-24 rounded-lg bg-black" />
              </div>
            </div>

            {/* Stat cards */}
            <div className="mb-5 grid grid-cols-3 gap-3">
              {[
                { accent: 'bg-black' },
                { accent: 'bg-zinc-500' },
                { accent: 'bg-zinc-300' },
              ].map((card, i) => (
                <div key={i} className="rounded-xl border border-zinc-100 bg-white p-3 card-shadow">
                  <div className={`mb-2.5 h-1 w-6 rounded-full ${card.accent}`} />
                  <div className="mb-1.5 h-5 w-16 rounded bg-zinc-800" />
                  <div className="h-3 w-20 rounded bg-zinc-200" />
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="mb-4 rounded-xl border border-zinc-100 bg-white p-4 card-shadow">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-4 w-32 rounded bg-zinc-700" />
                <div className="flex gap-2">
                  <div className="h-5 w-12 rounded-full bg-zinc-100" />
                  <div className="h-5 w-12 rounded-full bg-zinc-100" />
                </div>
              </div>
              {/* Fake chart */}
              <svg viewBox="0 0 500 100" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#09090b" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C40,75 60,60 100,55 C140,50 160,40 200,35 C240,30 260,45 300,30 C340,15 360,20 400,12 C440,4 470,8 500,5 L500,100 L0,100 Z"
                  fill="url(#heroChartGrad)"
                />
                <path
                  d="M0,80 C40,75 60,60 100,55 C140,50 160,40 200,35 C240,30 260,45 300,30 C340,15 360,20 400,12 C440,4 470,8 500,5"
                  fill="none"
                  stroke="#09090b"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Table rows */}
            <div className="space-y-2">
              {[80, 65, 90].map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-zinc-100" />
                  <div className="h-3 w-24 rounded bg-zinc-200" />
                  <div className="ml-auto h-3 rounded bg-zinc-100" style={{ width: `${w}px` }} />
                  <div className="h-5 w-14 rounded-full bg-zinc-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white gradient-mesh pt-16">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container>
        <div className="pb-16 pt-20 text-center lg:pt-28">
          {/* Badge — px padding too wide vs py, feels unbalanced */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span className="text-xs font-semibold tracking-wide text-zinc-700">
              Now in public beta
            </span>
          </div>

          {/* Headline — could go one size larger on desktop */}
          <h1 className="text-balance mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-6xl">
            The workspace that{' '}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
              thinks ahead
            </span>{' '}
            of your team
          </h1>

          {/* Supporting text */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Meridian brings your projects, people, and analytics into one beautifully
            designed workspace. Stop switching tabs — start shipping faster.
          </p>

          {/* CTAs — group too close to supporting text, needs more top margin */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg">
              Start for free
            </Button>
            {/* Ghost button — border barely visible on warm white bg */}
            <Button variant="ghost" size="lg" className="border border-zinc-200 text-zinc-700">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M6.5 5.5l4.5 2.5-4.5 2.5V5.5z"
                  fill="currentColor"
                />
              </svg>
              Watch demo
            </Button>
          </div>

          <p className="mt-4 text-xs text-zinc-400">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>

        {/* Hero illustration — tight top margin, needs more breathing room */}
        <div className="mt-4">
          <HeroIllustration />
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
