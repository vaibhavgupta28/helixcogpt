"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(2),
  message: z.string().min(10)
});

export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const parsed = formSchema.safeParse(payload);
    if (!parsed.success) {
      setError("Please fill all fields correctly.");
      return;
    }

    setState("submitting");
    setError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data)
    });

    if (response.ok) {
      setState("success");
      (event.target as HTMLFormElement).reset();
    } else {
      const json = await response.json().catch(() => ({ message: "" }));
      setError(json.message ?? "We could not send your message.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Company" required autoComplete="organization" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="email@company.com" required autoComplete="email" />
        </div>
        <div>
          <Label htmlFor="projectType">Project Type</Label>
          <Input id="projectType" name="projectType" placeholder="MetaDSP integration" required />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Project Overview</Label>
        <Textarea id="message" name="message" placeholder="Share your goals and timelines" required />
      </div>
      {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
      {state === "success" && <p className="text-sm text-accent">Thanks—we’ll connect shortly.</p>}
      <Button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
