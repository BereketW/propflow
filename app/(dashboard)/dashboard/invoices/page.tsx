import { Receipt, Search } from "lucide-react";

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Invoices
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Track and manage your invoices
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search invoices..."
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/50 mb-4">
            <Receipt className="h-10 w-10 text-violet-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            No invoices yet
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Invoices are automatically generated when a proposal is accepted by
            your client.
          </p>
        </div>
      </div>
    </div>
  );
}
