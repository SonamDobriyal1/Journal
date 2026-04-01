import type { Issue, IssueWithArticles } from "@/types/journal";

/** Shown when Firebase env vars are missing or Firestore is empty (local preview). */
export const demoCurrentIssue: IssueWithArticles = {
  id: "demo-1",
  volume: 9,
  issueNumber: 4,
  year: 2026,
  monthLabel: "April",
  title: "Global Confluence Reviews Vol 9 No 4 (2026) — April",
  publishedAt: new Date("2026-03-26"),
  slug: "vol-9-no-4-2026-april",
  isCurrent: true,
  articles: [
    {
      id: "a1",
      title:
        "Mental Health Challenges among School Children and Their Effects on Educational Performance",
      authors: [
        "Dhruba Dhar",
        "Tama Sen",
        "Md Naeem Ferdous",
        "Mostafa Kabir Siddiqui",
        "Afroja Parvin Kona",
      ],
      pageStart: 1,
      pageEnd: 11,
      orderIndex: 0,
      pdfUrl: "#",
    },
    {
      id: "a2",
      title:
        "A Classroom Action Research: Improving Speaking Skills Using Interactive Learning Media",
      authors: [
        "Mutia Humairo’ul Walihah",
        "Mustika Mustika",
        "Dwiyani Pratiwi",
        "Sukarno Sukarno",
      ],
      pageStart: 12,
      pageEnd: 18,
      orderIndex: 1,
      pdfUrl: "#",
    },
    {
      id: "a3",
      title:
        "Hybrid Work Models and Their Influence on Employee Productivity and Wellbeing",
      authors: ["Yaibimi Simon Ayogoi"],
      pageStart: 19,
      pageEnd: 27,
      orderIndex: 2,
      pdfUrl: "#",
    },
  ],
};

const demoIssue2: IssueWithArticles = {
  id: "demo-2",
  volume: 9,
  issueNumber: 3,
  year: 2026,
  monthLabel: "February",
  title: "Global Confluence Reviews Vol 9 No 3 (2026) — February",
  publishedAt: new Date("2026-01-28"),
  slug: "vol-9-no-3-2026-february",
  isCurrent: false,
  articles: [],
};

export const demoArchiveIssues: IssueWithArticles[] = [demoCurrentIssue, demoIssue2];

/** Issue rows for archive lists (no nested articles). */
export const demoIssuesList: Issue[] = demoArchiveIssues.map(
  ({ articles: _a, ...issue }) => issue
);
