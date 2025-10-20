"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Stat =
  | { type: "currency"; from: number; to: number; prefix: string; suffix: string; label: string }
  | { type: "number"; from: number; to: number; suffix: string; label: string }
  | { type: "text"; label: string };

const stats: Stat[] = [
  { type: "currency", from: 0, to: 2, prefix: "$", suffix: "B+", label: "managed media" },
  { type: "number", from: 0, to: 50, suffix: "B+", label: "daily impressions" },
  { type: "text", label: "Petabyte-scale data" },
  { type: "number", from: 0, to: 20, suffix: "+", label: "markets" }
];

export function StatBar() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(reduceMotion ? 1 : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const start = performance.now();
    const duration = 1500;

    const frame = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / duration);
      setProgress(ratio);
      if (ratio < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <section
      aria-label="Proof points"
      className="grid gap-6 rounded-2xl border border-border/60 bg-surface/60 px-6 py-8 md:grid-cols-4"
    >
      {stats.map((stat, index) => {
        if (stat.type === "text") {
          const [first, ...rest] = stat.label.split(" ");
          return (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-3xl font-semibold text-text">{first}</p>
              <p className="text-sm text-muted">{rest.join(" ")}</p>
            </div>
          );
        }

        const current = reduceMotion ? stat.to : stat.from + (stat.to - stat.from) * progress;
        const formatted =
          stat.type === "currency"
            ? `${stat.prefix}${current.toFixed(1)}${stat.suffix}`
            : `${Math.round(current)}${stat.suffix}`;

        return (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-3xl font-semibold text-text">{formatted}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        );
      })}
    </section>
  );
}
