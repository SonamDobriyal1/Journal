import { AppShell } from "@/components/layout/AppShell";
import { JournalArchivesClient } from "@/components/journal/JournalArchivesClient";

export default function IssuesPage() {
  return (
    <AppShell>
      <JournalArchivesClient />
    </AppShell>
  );
}
