import { FileText, CheckCircle, DollarSign, Clock } from "lucide-react";

const stats = [
  {
    name: "Total Proposals",
    value: "0",
    change: "—",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Accepted",
    value: "0",
    change: "—",
    icon: CheckCircle,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Total Revenue",
    value: "$0",
    change: "—",
    icon: DollarSign,
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-50 dark:bg-violet-950/50",
    textColor: "text-violet-600 dark:text-violet-400",
  },
  {
    name: "Pending Invoices",
    value: "0",
    change: "—",
    icon: Clock,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
    textColor: "text-amber-600 dark:text-amber-400",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Welcome back! Here&apos;s an overview of your activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Gradient accent */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
            />

            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.name}
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/dashboard/proposals/new"
            className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-4 text-slate-600 dark:text-slate-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
              <FileText className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium">New Proposal</p>
              <p className="text-xs text-slate-400">
                Create with AI assistance
              </p>
            </div>
          </a>

          <a
            href="/dashboard/proposals"
            className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-4 text-slate-600 dark:text-slate-400 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-medium">View Proposals</p>
              <p className="text-xs text-slate-400">Manage all proposals</p>
            </div>
          </a>

          <a
            href="/dashboard/invoices"
            className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-4 text-slate-600 dark:text-slate-400 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50/50 dark:hover:bg-violet-950/30 hover:text-violet-600 dark:hover:text-violet-400 transition-all group"
          >
            <div className="p-2 rounded-lg bg-violet-50 dark:bg-violet-950/50 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50 transition-colors">
              <Receipt className="h-5 w-5 text-violet-500" />
            </div>
            <div>
              <p className="text-sm font-medium">View Invoices</p>
              <p className="text-xs text-slate-400">Track payments</p>
            </div>
          </a>
        </div>
      </div>

      {/* Recent Activity placeholder */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4">
            <FileText className="h-8 w-8 text-slate-400" />
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            No activity yet
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Create your first proposal to get started
          </p>
        </div>
      </div>
    </div>
  );
}
