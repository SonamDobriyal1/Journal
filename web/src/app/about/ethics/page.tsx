import { AppShell } from "@/components/layout/AppShell";

export default function EthicsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Publication ethics
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          COPE-style guidance on authorship, conflicts of interest, and corrections
          belongs here.
        </p>
      </div>
    </AppShell>
  );
}
