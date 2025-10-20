"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
const gaId = process.env.NEXT_PUBLIC_GA4_ID;
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

type AnalyticsProps = {
  children: ReactNode;
};

export function AnalyticsProvider({ children }: AnalyticsProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (provider === "ga4" && gaId) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", gaId);
    }

    if (provider === "plausible" && plausibleDomain) {
      const script = document.createElement("script");
      script.src = "https://plausible.io/js/script.js";
      script.async = true;
      script.defer = true;
      script.setAttribute("data-domain", plausibleDomain);
      document.head.appendChild(script);
    }
  }, []);

  return <>{children}</>;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
