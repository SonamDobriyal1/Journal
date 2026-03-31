"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";

export default function LoginPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <h1 className="font-serif text-2xl font-semibold text-[var(--journal-heading)]">
          Login
        </h1>
        <p className="mt-2 text-sm text-[var(--journal-muted)]">
          Connect to Firebase Auth (<code className="rounded bg-zinc-100 px-1">signInWithEmailAndPassword</code>).
        </p>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-[var(--journal-heading)]" htmlFor="login-email">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="mt-1 w-full rounded border border-[var(--journal-border)] px-3 py-2 text-sm"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--journal-heading)]" htmlFor="login-password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="mt-1 w-full rounded border border-[var(--journal-border)] px-3 py-2 text-sm"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[var(--journal-accent)] py-2.5 text-sm font-medium text-white hover:opacity-95"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[var(--journal-muted)]">
          No account?{" "}
          <Link href="/register" className="font-medium text-[var(--journal-accent)] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
