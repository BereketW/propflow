import Link from "next/link";
import { FileText, Plus, Search } from "lucide-react";

export default function ProposalsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Proposals
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Create and manage your proposals
          </p>
        </div>
        <Link
          href="/dashboard/proposals/new"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25"
        >
          <Plus className="h-4 w-4" />
          New Proposal
        </Link>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search proposals..."
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/50 mb-4">
            <FileText className="h-10 w-10 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            No proposals yet
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Create your first AI-powered proposal and start winning more
            clients.
          </p>
          <Link
            href="/dashboard/proposals/new"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            <Plus className="h-4 w-4" />
            Create First Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}
