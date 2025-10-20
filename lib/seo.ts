import type { Metadata } from "next";

const SITE_NAME = "Helix";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://helix.example";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Helix"
  },
  description:
    "Helix architects programmatic infrastructure that unifies ad operations, decisioning, and optimization across global marketplaces.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: "/og-default.svg" }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@helix"
  }
};

export function buildMetadata(partial: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...partial,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...partial.openGraph
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...partial.twitter
    }
  } satisfies Metadata;
}

export function canonical(pathname: string) {
  const url = new URL(pathname, SITE_URL);
  return url.toString();
}
