import { AppShell } from "@/components/layout/AppShell";
import { JournalIssueClient } from "@/components/journal/JournalIssueClient";

type Props = { params: Promise<{ slug: string }> };

export default async function IssuePage({ params }: Props) {
  const { slug } = await params;
  return (
    <AppShell>
      <JournalIssueClient slug={slug} />
    </AppShell>
  );
}
