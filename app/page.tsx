import Link from "next/link";
import {
  Sparkles,
  FileText,
  PenTool,
  CreditCard,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              PropFlow
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
            <Sparkles className="h-4 w-4" />
            AI-Powered Proposals
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Proposals that{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              win clients
            </span>
            , in seconds
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Generate stunning proposals with AI, get them signed digitally, and
            collect payments — all in one seamless flow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-500/25"
            >
              Start for Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-8 py-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              From brief to payment in 4 steps
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              The fastest way to go from idea to invoice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: FileText,
                title: "Describe Your Project",
                desc: "Write a brief about the project scope and goals.",
                color: "blue",
              },
              {
                step: "02",
                icon: Sparkles,
                title: "AI Generates",
                desc: "Gemini creates a full proposal with scope, timeline & pricing.",
                color: "indigo",
              },
              {
                step: "03",
                icon: PenTool,
                title: "Client Signs",
                desc: "Share a link. Client reviews and signs with one click.",
                color: "violet",
              },
              {
                step: "04",
                icon: CreditCard,
                title: "Get Paid",
                desc: "Invoice auto-generates. Client pays via Polar.",
                color: "emerald",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600 mb-4">
                  {item.step}
                </div>
                <div
                  className={`p-3 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-950/50 w-fit mb-4`}
                >
                  <item.icon
                    className={`h-6 w-6 text-${item.color}-500`}
                  />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Everything you need to close deals
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              Built for freelancers and agencies who want to spend less time on
              admin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "AI Generation",
                desc: "Gemini generates professional proposals from a simple brief. Regenerate any section individually.",
                color: "amber",
              },
              {
                icon: PenTool,
                title: "Digital Signatures",
                desc: "Clients accept and sign proposals with one click. No third-party tools needed.",
                color: "blue",
              },
              {
                icon: CreditCard,
                title: "Integrated Payments",
                desc: "Polar payment links embedded in every invoice. Get paid faster.",
                color: "emerald",
              },
              {
                icon: BarChart3,
                title: "Real-Time Tracking",
                desc: "Know the second your client opens a proposal or signs, via Firebase real-time updates.",
                color: "violet",
              },
              {
                icon: Shield,
                title: "Professional Templates",
                desc: "Every proposal gets a unique shareable link. No login required for clients.",
                color: "indigo",
              },
              {
                icon: CheckCircle,
                title: "Auto Invoicing",
                desc: "Invoices are automatically created the moment a proposal is accepted.",
                color: "rose",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-xl bg-${feature.color}-50 dark:bg-${feature.color}-950/50 w-fit mb-4`}
                >
                  <feature.icon
                    className={`h-6 w-6 text-${feature.color}-500`}
                  />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              Start free. Upgrade when you need more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: [
                  "3 proposals/month",
                  "3 AI generations",
                  "Basic analytics",
                  "1 team member",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Pro",
                price: "$19",
                period: "/month",
                features: [
                  "Unlimited proposals",
                  "Unlimited AI generations",
                  "Custom branding",
                  "Full analytics",
                  "1 team member",
                ],
                cta: "Start Pro Trial",
                popular: true,
              },
              {
                name: "Agency",
                price: "$49",
                period: "/month",
                features: [
                  "Everything in Pro",
                  "Up to 5 team members",
                  "Analytics export",
                  "Priority support",
                  "Custom integrations",
                ],
                cta: "Start Agency Trial",
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl border p-6 ${
                  plan.popular
                    ? "border-blue-500 bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/10 scale-105"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-500">
                      {plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sign-up"
                  className={`block w-full text-center rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25"
                      : "border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Ready to win more clients?
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Join freelancers and agencies who save hours on every proposal.
          </p>
          <Link
            href="/sign-up"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-500/25"
          >
            Start for Free
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="text-sm font-semibold text-slate-900 dark:text-white">
              PropFlow
            </span>
          </div>
          <p className="text-xs text-slate-400">
            © 2024 PropFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
