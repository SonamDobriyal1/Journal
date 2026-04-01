import { EditorialTeam } from "@/components/editorial/EditorialTeam";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/site-config";

export default function EditorialPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Editorial team
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--journal-body)]">
          The editorial team brings together scholars and professionals committed to
          rigorous peer review and the dissemination of high-quality research.
        </p>

        <EditorialTeam />

        <p className="mt-14 border-t border-[var(--journal-border)] pt-8 text-sm text-[var(--journal-muted)]">
          Contact:{" "}
          <a className="text-[var(--journal-accent)] hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
      </div>
    </AppShell>
  );
}
