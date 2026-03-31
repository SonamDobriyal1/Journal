import { AppShell } from "@/components/layout/AppShell";
import { JournalBanner } from "@/components/layout/JournalBanner";
import { JournalHomeClient } from "@/components/journal/JournalHomeClient";

export default function Home() {
  return (
    <AppShell>
      <JournalBanner />
      <JournalHomeClient />
    </AppShell>
  );
}
