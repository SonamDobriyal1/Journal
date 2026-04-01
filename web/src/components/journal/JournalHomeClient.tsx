"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isFirebaseConfigured } from "@/lib/firebase";
import { fetchCurrentIssue } from "@/lib/firestore-journal";
import { demoCurrentIssue } from "@/lib/demo-data";
import type { IssueWithArticles } from "@/types/journal";
import { siteConfig } from "@/lib/site-config";
import { ArticleList } from "@/components/journal/ArticleList";
import { formatIssueLabel, formatPublished } from "@/lib/format-dates";

export function JournalHomeClient() {
  const [issue, setIssue] = useState<IssueWithArticles | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!isFirebaseConfigured()) {
        if (!cancelled) {
          setIssue(demoCurrentIssue);
          setLoading(false);
        }
        return;
      }
      try {
        const data = await fetchCurrentIssue();
        if (!cancelled) {
          setIssue(data ?? demoCurrentIssue);
        }
      } catch {
        if (!cancelled) setIssue(demoCurrentIssue);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const data = issue ?? demoCurrentIssue;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="border-b border-[var(--journal-border)] pb-8">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--journal-muted)]">
          Current Issue
        </p>
        {loading ? (
          <div className="mt-3 h-10 max-w-xl animate-pulse rounded bg-zinc-200" />
        ) : (
          <>
            <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--journal-heading)] sm:text-4xl">
              Vol {data.volume} No {data.issueNumber} ({data.year}):{" "}
              {data.title}
            </h1>
            <p className="mt-2 text-sm text-[var(--journal-muted)]">
              {siteConfig.shortName} · {formatIssueLabel(data)} · Published:{" "}
              {formatPublished(data.publishedAt)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/issues/${data.slug}`}
                className="inline-flex items-center rounded border border-[var(--journal-accent)] bg-[var(--journal-accent)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
              >
                View full issue
              </Link>
              <Link
                href="/issues"
                className="inline-flex items-center rounded border border-[var(--journal-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--journal-heading)] transition hover:bg-zinc-50"
              >
                All issues
              </Link>
            </div>
          </>
        )}
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-xl font-semibold text-[var(--journal-heading)]">
          Main Articles
        </h2>
        {!loading && (
          <ArticleList articles={data.articles} issueSlug={data.slug} />
        )}
        {loading && (
          <ul className="mt-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <li
                key={i}
                className="h-24 animate-pulse rounded-lg bg-zinc-100"
              />
            ))}
          </ul>
        )}
      </section>

      <section className="mt-14 border-t border-[var(--journal-border)] pt-10">
        <h2 className="font-serif text-xl font-semibold text-[var(--journal-heading)]">
          About this journal
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[var(--journal-body)]">
          <strong>{siteConfig.name}</strong>
          {siteConfig.issn ? <> (ISSN {siteConfig.issn})</> : null} is an international,
          peer-reviewed, open-access academic journal dedicated to bringing diverse
          research streams into dialogue. The journal uses a double-blind peer-review
          process and publishes original research, reviews, and scholarly discussions.
          Interdisciplinary work is welcome.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {[
            "Anthropology & Sociology",
            "Psychology & Education",
            "Economics & Management",
            "Law, History & Cultural Studies",
            "Communication & Peace Studies",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-[var(--journal-body)]"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--journal-accent)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
