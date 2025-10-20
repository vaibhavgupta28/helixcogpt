import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Helix to launch MetaDSP, DMP, or SSP transformations.",
  alternates: { canonical: canonical("/contact") }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-text">Let’s Build Together</h1>
        <p className="text-lg text-muted">
          Share your objectives and we’ll align the right MetaDSP, AI optimization, or data engineering team for your roadmap.
        </p>
      </header>
      <section className="rounded-3xl border border-border/60 bg-surface/70 p-8">
        <ContactForm />
      </section>
    </div>
  );
}
