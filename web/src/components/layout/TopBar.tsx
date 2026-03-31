"use client";

import Link from "next/link";

export function TopBar() {
  return (
    <div className="border-b border-[var(--journal-border)] bg-[var(--journal-strip)] text-sm text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <form
          className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-xs"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="site-search" className="sr-only">
            Search
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search articles…"
            className="w-full min-w-0 rounded border border-white/20 bg-white/10 px-3 py-1.5 text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
          <button
            type="submit"
            className="shrink-0 rounded bg-white/15 px-3 py-1.5 text-xs font-medium uppercase tracking-wide hover:bg-white/25"
          >
            Search
          </button>
        </form>
        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wide">
          <Link href="/register" className="hover:underline">
            Register
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
