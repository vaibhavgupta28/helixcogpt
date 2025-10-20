"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "helix-cookie-consent";

type ConsentState = "hidden" | "visible" | "dismissed";

export function CookieBanner() {
  const [state, setState] = useState<ConsentState>("hidden");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setState("dismissed");
    } else {
      setState("visible");
    }
  }, []);

  if (state !== "visible") return null;

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setState("dismissed");
  }

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "dismissed");
    setState("dismissed");
  }

  return (
    <aside className="fixed bottom-6 right-6 z-50 max-w-md rounded-2xl border border-border/70 bg-surface/95 p-6 shadow-xl">
      <p className="text-sm text-text">
        We use cookies to analyze aggregate usage and improve our systems. No personal data is sold. Continue to accept or manage settings.
      </p>
      <div className="mt-4 flex gap-2">
        <Button onClick={accept}>Accept</Button>
        <Button variant="outline" onClick={dismiss}>
          Dismiss
        </Button>
      </div>
    </aside>
  );
}
