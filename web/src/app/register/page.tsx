"use client";

import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/lib/site-config";

export default function RegisterPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <h1 className="font-serif text-2xl font-semibold text-[var(--journal-heading)]">
          Register
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--journal-body)]">
          Create an account for <strong>{siteConfig.name}</strong> to save your profile,
          receive optional notifications about your submission, and access author tools
          when they are enabled on this site.
        </p>
        <p className="mt-2 text-sm text-[var(--journal-muted)]">
          Registration is powered by your site&apos;s authentication backend (e.g. Firebase
          Auth). You can use the same email you use for correspondence with the editorial
          office.
        </p>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-[var(--journal-heading)]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded border border-[var(--journal-border)] px-3 py-2 text-sm"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--journal-heading)]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full rounded border border-[var(--journal-border)] px-3 py-2 text-sm"
              autoComplete="new-password"
            />
          </div>
          <p className="text-xs text-[var(--journal-muted)]">
            By registering you agree to use the account responsibly and in line with our{" "}
            <a className="text-[var(--journal-accent)] hover:underline" href="/about/ethics">
              publication ethics
            </a>{" "}
            guidelines.
          </p>
          <button
            type="submit"
            className="w-full rounded bg-[var(--journal-accent)] py-2.5 text-sm font-medium text-white hover:opacity-95"
          >
            Create account
          </button>
        </form>
      </div>
    </AppShell>
  );
}
