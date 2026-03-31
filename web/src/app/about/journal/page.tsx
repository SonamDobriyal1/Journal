import { AppShell } from "@/components/layout/AppShell";

export default function AboutJournalPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          About the journal
        </h1>
        <div className="mt-6 text-[15px] leading-relaxed text-[var(--journal-body)]">
          <p>
            Replace this text with your aims, scope, and publication frequency. The
            homepage already summarizes disciplines; this page can go deeper on
            editorial standards and audience.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
