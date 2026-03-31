import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          Contact
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          Editorial office, publisher address, and response times belong here.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-medium text-[var(--journal-heading)]">Email</dt>
            <dd>
              <a className="text-[var(--journal-accent)] hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--journal-heading)]">Website</dt>
            <dd>
              <a className="text-[var(--journal-accent)] hover:underline" href={siteConfig.siteUrl}>
                {siteConfig.siteUrl}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </AppShell>
  );
}
