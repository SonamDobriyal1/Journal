import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/site-config";

export default function SubmissionsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Submissions
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          Describe your manuscript types, formatting (e.g. APA), and whether you use
          OJS or another submission system. You can later connect this page to Firebase
          Auth for author dashboards.
        </p>
        <p className="mt-6 text-sm text-[var(--journal-muted)]">
          Questions:{" "}
          <a className="text-[var(--journal-accent)] hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
      </div>
    </AppShell>
  );
}
