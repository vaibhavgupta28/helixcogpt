import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyticsProvider } from "@/lib/analytics";
import { CookieBanner } from "@/components/cookie-banner";

export const metadata: Metadata = {
  title: {
    default: "Helix",
    template: "%s | Helix"
  }
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <AnalyticsProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </AnalyticsProvider>
  );
}
