import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";

export default function AllArticlesPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
          All articles
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          A searchable index of every article can be powered by Firestore (e.g. a
          collection group query on <code className="rounded bg-zinc-100 px-1 text-sm">articles</code>
          ). For now, browse by issue.
        </p>
        <Link
          href="/issues"
          className="mt-6 inline-block text-sm font-medium text-[var(--journal-accent)] hover:underline"
        >
          View all issues →
        </Link>
      </div>
    </AppShell>
  );
}
