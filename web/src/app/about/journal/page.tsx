import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/site-config";

export default function AboutJournalPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          About the journal
        </h1>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--journal-body)]">
          <p>
            <strong>{siteConfig.name}</strong> ({siteConfig.shortName}) is an international,
            peer-reviewed, open-access journal that publishes scholarship intended to
            connect ideas across fields and regions. We welcome work that advances theory,
            evidence, or practice—whether empirical, conceptual, or policy-oriented—when
            it meets our standards for rigor, clarity, and contribution.
          </p>
          <h2 className="pt-2 font-serif text-xl font-semibold text-[var(--journal-heading)]">
            Aims and scope
          </h2>
          <p>
            The journal’s title reflects our commitment to a &ldquo;confluence&rdquo; of
            perspectives: we encourage submissions from the social sciences, economics,
            business and management, education, law and policy, and related interdisciplinary
            areas. Review articles, research articles, and well-argued short communications
            are within scope when they engage with contemporary debates and are accessible
            to a broad scholarly readership.
          </p>
          <h2 className="pt-2 font-serif text-xl font-semibold text-[var(--journal-heading)]">
            Publication and access
          </h2>
          <p>
            Articles appear online as soon as they are ready after acceptance and
            production. Issues are compiled periodically to create coherent volumes for
            libraries and indexing. All research content is published under an open-access
            license so readers may use and share published work in line with our{" "}
            <a className="text-[var(--journal-accent)] hover:underline" href="/about/open-access">
              open access policy
            </a>
            .
          </p>
          <h2 className="pt-2 font-serif text-xl font-semibold text-[var(--journal-heading)]">
            Audience
          </h2>
          <p>
            We serve researchers, doctoral students, educators, and professionals who rely
            on trustworthy, citable research. Our editorial team and reviewers work to
            maintain constructive feedback and timely decisions wherever possible.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
