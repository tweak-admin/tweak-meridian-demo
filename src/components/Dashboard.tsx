import React from 'react'
import { Container } from './ui/Container'
import { Section, SectionLabel, SectionHeading, SectionSubheading } from './ui/Section'

// ⚠️ Review opportunity: Secondary chart line is light gray — hard to distinguish from bg
// ⚠️ Review opportunity: One metric card uses lighter font-weight for the number
// ⚠️ Review opportunity: "View all" link in table is right-aligned inconsistently
// ⚠️ Review opportunity: Progress bar shades are inconsistent (mixed dark/medium/light)
// ⚠️ Review opportunity: Table row padding feels tight compared to card padding

const metrics = [
  { label: 'Monthly Active Users', value: '24,831', change: '+12.4%', up: true, dotColor: 'bg-gray-900' },
  { label: 'Projects Completed', value: '1,204', change: '+8.1%', up: true, dotColor: 'bg-gray-600' },
  { label: 'Team Satisfaction', value: '94.2%', change: '+2.3%', up: true, dotColor: 'bg-gray-400' },
  // ⚠️ This card's number uses font-normal instead of font-bold
  { label: 'Avg. Response Time', value: '1.8s', change: '-0.4s', up: true, dotColor: 'bg-gray-300', lightWeight: true },
]

const tableRows = [
  { project: 'Mobile App Redesign', team: 'Product', status: 'On track', progress: 78, statusColor: 'text-gray-700 bg-gray-100' },
  { project: 'API v3 Migration', team: 'Engineering', status: 'At risk', progress: 45, statusColor: 'text-gray-600 bg-gray-100' },
  { project: 'Q3 Marketing Site', team: 'Growth', status: 'On track', progress: 91, statusColor: 'text-gray-700 bg-gray-100' },
  { project: 'Data Pipeline Refactor', team: 'Data', status: 'Delayed', progress: 22, statusColor: 'text-gray-900 bg-gray-200' },
]

// ⚠️ Progress bar shades intentionally inconsistent
const barShades = ['bg-gray-900', 'bg-gray-500', 'bg-gray-700', 'bg-gray-300']

function LineChart() {
  return (
    <svg viewBox="0 0 560 160" className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[40, 80, 120].map((y) => (
        <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#F3F4F6" strokeWidth="1" />
      ))}

      {/* Area fills */}
      <path
        d="M0,130 C40,120 80,100 120,95 C160,90 200,70 240,60 C280,50 320,55 360,40 C400,25 440,30 480,18 C510,10 540,14 560,10 L560,160 L0,160 Z"
        fill="url(#grad1)"
      />
      {/* ⚠️ Secondary line in very light gray — hard to distinguish from background */}
      <path
        d="M0,145 C40,138 80,128 120,122 C160,116 200,108 240,100 C280,92 320,98 360,88 C400,78 440,82 480,72 C510,64 540,68 560,62 L560,160 L0,160 Z"
        fill="url(#grad2)"
      />

      {/* Primary line — dark */}
      <path
        d="M0,130 C40,120 80,100 120,95 C160,90 200,70 240,60 C280,50 320,55 360,40 C400,25 440,30 480,18 C510,10 540,14 560,10"
        fill="none"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Secondary line — light gray, barely visible */}
      <path
        d="M0,145 C40,138 80,128 120,122 C160,116 200,108 240,100 C280,92 320,98 360,88 C400,78 440,82 480,72 C510,64 540,68 560,62"
        fill="none"
        stroke="#D1D5DB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6,3"
      />

      {/* Data point */}
      <circle cx="360" cy="40" r="4" fill="white" stroke="#111827" strokeWidth="2" />
      <circle cx="360" cy="40" r="7" fill="#111827" fillOpacity="0.1" />
    </svg>
  )
}

export function Dashboard() {
  return (
    <Section className="bg-white" id="dashboard">
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <SectionLabel>Analytics</SectionLabel>
          <SectionHeading>
            Real insights, not vanity metrics
          </SectionHeading>
          <SectionSubheading className="mx-auto">
            Every number in Meridian is actionable. Understand velocity, predict
            blockers, and keep your team aligned — all from one beautiful dashboard.
          </SectionSubheading>
        </div>

        {/* Dashboard card */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white card-shadow-lg">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2" stroke="white" strokeWidth="1.5" />
                  <path d="M4 7h6M4 4.5h6M4 9.5h4" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-800">Overview Dashboard</span>
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700">
                Q2 2025
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
                Export
              </button>
              <button className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800">
                Share
              </button>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            {/* Metric cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${m.dotColor}`} />
                    <span className="text-xs font-medium text-gray-500">{m.label}</span>
                  </div>
                  {/* ⚠️ Last metric uses font-normal instead of font-bold */}
                  <p
                    className={`text-2xl tracking-tight text-gray-900 ${
                      m.lightWeight ? 'font-normal' : 'font-bold'
                    }`}
                  >
                    {m.value}
                  </p>
                  <div className={`mt-1.5 flex items-center gap-1 text-xs font-medium ${m.up ? 'text-gray-600' : 'text-gray-400'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d={m.up ? 'M6 9V3M3 6l3-3 3 3' : 'M6 3v6M3 6l3 3 3-3'}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {m.change} vs last period
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + progress panel */}
            <div className="mb-8 grid gap-6 lg:grid-cols-3">
              {/* Chart */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 lg:col-span-2 card-shadow">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">User Growth</p>
                    <p className="text-xs text-gray-400">Monthly active users · Last 12 months</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-900" />
                      <span className="text-xs text-gray-500">Active users</span>
                    </div>
                    {/* ⚠️ Secondary legend uses very light gray — barely distinguishable */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                      <span className="text-xs text-gray-500">New signups</span>
                    </div>
                  </div>
                </div>

                {/* Y axis labels */}
                <div className="flex gap-3">
                  <div className="flex flex-col justify-between py-1 text-right">
                    {['30k', '20k', '10k', '0'].map((v) => (
                      <span key={v} className="text-xs text-gray-300">{v}</span>
                    ))}
                  </div>
                  <div className="flex-1">
                    <LineChart />
                    {/* X axis */}
                    <div className="mt-1 flex justify-between">
                      {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month) => (
                        <span key={month} className="text-xs text-gray-300">{month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress panel */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 card-shadow">
                <p className="mb-4 font-semibold text-gray-900">Team Velocity</p>
                <div className="space-y-4">
                  {['Engineering', 'Product', 'Design', 'Growth'].map((team, i) => {
                    const widths = [82, 65, 91, 48]
                    return (
                      <div key={team}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-700">{team}</span>
                          <span className="text-xs text-gray-400">{widths[i]}%</span>
                        </div>
                        {/* ⚠️ Bar shades intentionally inconsistent */}
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                          <div
                            className={`h-full rounded-full ${barShades[i]}`}
                            style={{ width: `${widths[i]}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="mb-1 text-xs font-semibold text-gray-800">AI Insight</p>
                  <p className="text-xs leading-relaxed text-gray-500">
                    Engineering velocity is up 14% this sprint. At this pace, the Q3 roadmap
                    ships 11 days early.
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 card-shadow">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
                <p className="text-sm font-semibold text-gray-900">Active Projects</p>
                {/* ⚠️ "View all" is right-aligned but other actions are left-aligned — inconsistent */}
                <button className="ml-auto text-xs font-medium text-gray-700 hover:underline">
                  View all →
                </button>
              </div>
              {/* Table rows — padding feels a bit tight */}
              {tableRows.map((row, i) => (
                <div
                  key={row.project}
                  className={`flex items-center gap-4 px-5 py-3 text-sm ${
                    i < tableRows.length - 1 ? 'border-b border-gray-50' : ''
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium text-gray-800">{row.project}</p>
                    <p className="text-xs text-gray-400">{row.team}</p>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-gray-800"
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{row.progress}%</span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
