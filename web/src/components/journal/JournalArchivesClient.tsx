"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isFirebaseConfigured } from "@/lib/firebase";
import { fetchAllIssues } from "@/lib/firestore-journal";
import { demoIssuesList } from "@/lib/demo-data";
import type { Issue } from "@/types/journal";
import { formatIssueLabel, formatPublished } from "@/lib/format-dates";
import { siteConfig } from "@/lib/site-config";

export function JournalArchivesClient() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!isFirebaseConfigured()) {
        if (!cancelled) {
          setIssues(demoIssuesList);
          setLoading(false);
        }
        return;
      }
      try {
        const list = await fetchAllIssues();
        if (!cancelled) setIssues(list.length ? list : demoIssuesList);
      } catch {
        if (!cancelled) setIssues(demoIssuesList);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const list = issues.length > 0 ? issues : demoIssuesList;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl font-semibold text-[var(--journal-heading)]">
        All Issues
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--journal-body)]">
        This archive lists every published volume of <strong>{siteConfig.name}</strong>.
        Select an issue to see the table of contents, author names, page ranges, and PDF
        links when available. The issue marked <em>Current</em> is the most recently
        released compilation.
      </p>
      {loading ? (
        <ul className="mt-8 space-y-3">
          {[1, 2, 3].map((i) => (
            <li key={i} className="h-16 animate-pulse rounded-lg bg-zinc-100" />
          ))}
        </ul>
      ) : (
        <ul className="mt-8 divide-y divide-[var(--journal-border)] border-y border-[var(--journal-border)]">
          {list.map((issue) => (
            <li key={issue.id} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link
                  href={`/issues/${issue.slug}`}
                  className="font-serif text-lg font-medium text-[var(--journal-heading)] hover:underline"
                >
                  {issue.title}
                </Link>
                <p className="mt-1 text-sm text-[var(--journal-muted)]">
                  {formatIssueLabel(issue)} · Published {formatPublished(issue.publishedAt)}
                  {issue.isCurrent ? (
                    <span className="ml-2 rounded bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">
                      Current
                    </span>
                  ) : null}
                </p>
              </div>
              <Link
                href={`/issues/${issue.slug}`}
                className="shrink-0 text-sm font-medium text-[var(--journal-accent)] hover:underline"
              >
                View issue →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
