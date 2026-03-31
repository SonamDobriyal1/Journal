import { AppShell } from "@/components/layout/AppShell";

export default function PeerReviewPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Peer review process
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          Describe double-blind or single-blind review, typical timelines, and
          reviewer expectations.
        </p>
      </div>
    </AppShell>
  );
}
