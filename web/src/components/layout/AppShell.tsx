import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-[var(--journal-canvas)]">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
