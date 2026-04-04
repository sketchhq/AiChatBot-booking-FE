import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-black/20 backdrop-blur-xl">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">CarePoint Health</p>
              <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl">AI clinic assistant for appointment booking and patient intake.</h1>
            </div>
            <p className="max-w-2xl text-slate-300/90 sm:text-lg">
              Built with Next.js 15, Tailwind CSS, and a NestJS backend. Start with chat intake, urgency triage, slot booking, and admin appointments.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start development
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <p className="text-sm text-slate-500">Use `npm install` then `npm run dev`.</p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Chat intake',
              description: 'Build the symptom conversation flow and bot UI.',
            },
            {
              title: 'Doctor booking',
              description: 'Show real-time slot cards and confirm appointments.',
            },
            {
              title: 'Admin dashboard',
              description: 'Display today’s appointments and intake summaries.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
