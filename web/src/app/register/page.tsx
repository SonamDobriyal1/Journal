"use client";

import { AppShell } from "@/components/layout/AppShell";

export default function RegisterPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <h1 className="font-serif text-2xl font-semibold text-[var(--journal-heading)]">
          Register
        </h1>
        <p className="mt-2 text-sm text-[var(--journal-muted)]">
          Wire this form to{" "}
          <code className="rounded bg-zinc-100 px-1">createUserWithEmailAndPassword</code> or
          your OJS account flow.
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
