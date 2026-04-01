"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  editorialTeam,
  PLACEHOLDER,
  type EditorialMember,
} from "@/data/editorial";

function MemberPhoto({
  member,
}: {
  member: Pick<EditorialMember, "name" | "imageSrc">;
}) {
  const initial = member.imageSrc ?? PLACEHOLDER;
  const [src, setSrc] = useState(initial);

  useEffect(() => {
    setSrc(member.imageSrc ?? PLACEHOLDER);
  }, [member.imageSrc]);

  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={member.name}
        width={160}
        height={160}
        className="h-40 w-40 rounded-full border-2 border-[var(--journal-border)] bg-zinc-100 object-cover"
        onError={() => setSrc(PLACEHOLDER)}
        priority={false}
      />
    </div>
  );
}

function BioModal({
  member,
  onClose,
}: {
  member: EditorialMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="editorial-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        className="relative z-10 flex max-h-[min(90vh,720px)] w-full max-w-2xl flex-col rounded-xl border border-[var(--journal-border)] bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--journal-border)] px-5 py-4 sm:px-6">
          <div>
            <h2
              id="editorial-modal-title"
              className="font-serif text-xl font-semibold text-[var(--journal-heading)]"
            >
              {member.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-[var(--journal-accent)]">
              {member.headline}
            </p>
            <p className="mt-0.5 text-sm text-[var(--journal-muted)]">
              {member.qualification}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 sm:px-6">
          <div className="space-y-4 text-[15px] leading-relaxed text-[var(--journal-body)]">
            {member.bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EditorialTeam() {
  const [active, setActive] = useState<EditorialMember | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {editorialTeam.map((member) => (
          <article
            key={member.id}
            className="flex flex-col items-center rounded-xl border border-[var(--journal-border)] bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <MemberPhoto member={member} />
            <h2 className="mt-5 font-serif text-lg font-semibold text-[var(--journal-heading)]">
              {member.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-[var(--journal-accent)]">
              {member.headline}
            </p>
            <p className="mt-2 text-sm leading-snug text-[var(--journal-muted)]">
              {member.qualification}
            </p>
            <button
              type="button"
              onClick={() => setActive(member)}
              className="mt-5 inline-flex items-center justify-center rounded-md border border-[var(--journal-accent)] bg-white px-4 py-2 text-sm font-medium text-[var(--journal-accent)] transition hover:bg-[var(--journal-accent)] hover:text-white"
            >
              Know more
            </button>
          </article>
        ))}
      </div>

      {active ? <BioModal member={active} onClose={close} /> : null}
    </>
  );
}
