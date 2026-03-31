import { AppShell } from "@/components/layout/AppShell";

export default function OpenAccessPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Open access policy
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          State CC BY (or other) licensing, author rights, and any article processing
          charges with a link to your fee schedule if applicable.
        </p>
      </div>
    </AppShell>
  );
}
