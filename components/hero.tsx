"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-[#0b121a] via-[#0e1a26] to-[#08111b] p-10">
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
      <div className="relative z-10 flex flex-col gap-8">
        <div className="space-y-6 max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm text-accent">
            MetaDSP control for scaled advertisers
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Build programmatic systems that compound learning and eliminate waste.
          </h1>
          <p className="text-lg text-muted">
            Helix deploys AI-guided media infrastructure that unifies fragmented buying stacks and brings human strategy forward.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contact">Let’s Build Together</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/case-studies">See Proof</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
