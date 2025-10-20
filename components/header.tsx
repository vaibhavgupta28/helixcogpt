"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (!pathname) return "text-muted";
    if (href === "/") {
      return pathname === "/" ? "text-accent" : "text-muted";
    }
    return pathname.startsWith(href) ? "text-accent" : "text-muted";
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-[#0b0f14cc] backdrop-blur">
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-text" aria-label="Helix home">
          Helix
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors supports-hover:hover:text-accent ${isActive(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-4">
            <Link href="/contact">Let’s Build Together</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          </Transition.Child>
          <div className="fixed inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition duration-200 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <DialogPanel className="flex h-full w-80 flex-col gap-6 bg-surface px-6 py-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-lg font-bold text-text" onClick={() => setOpen(false)}>
                    Helix
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-base font-medium ${isActive(link.href)}`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild onClick={() => setOpen(false)}>
                    <Link href="/contact">Let’s Build Together</Link>
                  </Button>
                </nav>
              </DialogPanel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
}
