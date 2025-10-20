import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABand() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-[#0e1b2c] via-[#10243b] to-[#0c1725] p-10">
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <h2 className="text-3xl font-semibold text-text">Deploy MetaDSP orchestration with precision.</h2>
          <p className="text-sm text-muted">
            Consolidate buying surfaces, instrument experimentation, and drive faster optimization cycles with Helix delivery engineering.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
    </section>
  );
}
