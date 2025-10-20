import Link from "next/link";
import Script from "next/script";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Helix",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://helix.example",
  sameAs: ["https://www.linkedin.com/company/helix"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "sales@helix.example",
      contactType: "sales"
    }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-text">Helix</p>
          <p className="max-w-sm text-sm text-muted">
            Building programmatic infrastructure that connects $2B+ managed media to 50B+ daily impressions with petabyte-scale
            decisioning deployed in 20+ markets.
          </p>
          <div className="flex gap-4 text-sm text-muted">
            <Link href="https://www.linkedin.com" aria-label="LinkedIn">
              LinkedIn
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              X
            </Link>
            <Link href="https://github.com" aria-label="GitHub">
              GitHub
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-muted md:grid-cols-3">
          <div className="space-y-3">
            <p className="font-semibold text-text">Company</p>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-text">Work</p>
            <ul className="space-y-2">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/studio">Studio</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-text">Legal</p>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/cookies">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </footer>
  );
}
