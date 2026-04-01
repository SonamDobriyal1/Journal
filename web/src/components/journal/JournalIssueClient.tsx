"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isFirebaseConfigured } from "@/lib/firebase";
import { fetchIssueBySlug } from "@/lib/firestore-journal";
import { demoArchiveIssues } from "@/lib/demo-data";
import type { IssueWithArticles } from "@/types/journal";
import { siteConfig } from "@/lib/site-config";
import { ArticleList } from "@/components/journal/ArticleList";
import { formatIssueLabel, formatPublished } from "@/lib/format-dates";

type Props = { slug: string };

export function JournalIssueClient({ slug }: Props) {
  const [issue, setIssue] = useState<IssueWithArticles | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const fallback = demoArchiveIssues.find((i) => i.slug === slug) ?? null;
      if (!isFirebaseConfigured()) {
        if (!cancelled) {
          setIssue(fallback);
          setNotFound(!fallback);
          setLoading(false);
        }
        return;
      }
      try {
        const data = await fetchIssueBySlug(slug);
        if (!cancelled) {
          if (data) {
            setIssue(data);
            setNotFound(false);
          } else {
            setIssue(fallback);
            setNotFound(!fallback);
          }
        }
      } catch {
        if (!cancelled) {
          setIssue(fallback);
          setNotFound(!fallback);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="h-10 max-w-lg animate-pulse rounded bg-zinc-200" />
        <div className="mt-8 h-32 animate-pulse rounded bg-zinc-100" />
      </div>
    );
  }

  if (notFound || !issue) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="font-serif text-2xl font-semibold text-[var(--journal-heading)]">
          Issue not found
        </h1>
        <p className="mt-2 text-sm text-[var(--journal-muted)]">
          There is no issue for this URL yet. Check the archives or add data in Firebase.
        </p>
        <Link
          href="/issues"
          className="mt-6 inline-block text-sm font-medium text-[var(--journal-accent)] hover:underline"
        >
          ← All issues
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="text-sm text-[var(--journal-muted)]">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <Link href="/issues" className="hover:underline">
          Issues
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-[var(--journal-heading)]">Vol {issue.volume} No {issue.issueNumber}</span>
      </nav>

      <header className="mt-6 border-b border-[var(--journal-border)] pb-8">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--journal-muted)]">
          {issue.isCurrent ? "Current issue" : "Issue"}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--journal-heading)] sm:text-4xl">
          {issue.title}
        </h1>
        <p className="mt-2 text-sm text-[var(--journal-muted)]">
          {siteConfig.shortName} · {formatIssueLabel(issue)} · Published:{" "}
          {formatPublished(issue.publishedAt)}
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-[var(--journal-heading)]">
          Full issue
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
          Each issue may include front and back cover art and, where available, a
          full-issue PDF for download. Cover images and bundled PDFs are added by the
          publisher when production is complete; if you do not see links below, they are
          not yet published for this volume.
        </p>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--journal-muted)]">
          <li className="flex flex-wrap items-baseline gap-2">
            <span className="font-medium text-[var(--journal-heading)]">Front cover</span>
            <span>— Available when linked from the issue record.</span>
          </li>
          <li className="flex flex-wrap items-baseline gap-2">
            <span className="font-medium text-[var(--journal-heading)]">Back cover</span>
            <span>— Available when linked from the issue record.</span>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-[var(--journal-heading)]">
          Main articles
        </h2>
        <ArticleList articles={issue.articles} issueSlug={issue.slug} />
      </section>
    </div>
  );
}
