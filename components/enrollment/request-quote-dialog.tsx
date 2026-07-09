"use client";

import * as React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { AlertCircle, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase/client";
import type { SubmitStatus } from "@/components/enrollment/types";
import { projectTypes, type ProjectType } from "@/lib/data/project-types";
import { siteConfig } from "@/lib/seo/site-config";

const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

type RequestQuoteDialogProps = {
  projectType?: ProjectType;
  triggerLabel?: string;
  triggerClassName?: string;
} & VariantProps<typeof buttonVariants>;

export function RequestQuoteDialog({
  projectType,
  triggerLabel = "Request Quote",
  triggerClassName,
  variant,
  size,
}: RequestQuoteDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [selectedProjectType, setSelectedProjectType] = React.useState(projectType ?? "");
  const [selectedBudget, setSelectedBudget] = React.useState("");
  const [firstName, setFirstName] = React.useState("");

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      window.setTimeout(() => {
        setStatus("idle");
        setFirstName("");
        setSelectedProjectType(projectType ?? "");
        setSelectedBudget("");
      }, 200);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    setFirstName(name.split(" ")[0] ?? "");
    setStatus("submitting");

    if (!db) {
      setStatus("error");
      return;
    }

    try {
      await addDoc(collection(db, "quoteRequests"), {
        name,
        company,
        phone,
        email,
        projectType: selectedProjectType,
        budgetRange: selectedBudget,
        message,
        createdAt: serverTimestamp(),
        status: "new",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn("gap-2", triggerClassName)}
        >
          <MessageSquare className="size-4" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-10 text-brand-software" />
            <DialogTitle>Thanks, {firstName || "there"}!</DialogTitle>
            <DialogDescription>
              Our team will review your project and get back to you within 24
              hours to schedule a free consultation.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request a Free Consultation</DialogTitle>
              <DialogDescription>
                Tell us about your project and we&apos;ll get back to you with
                next steps.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-name">Full Name</Label>
                <Input id="quote-name" name="name" required placeholder="Your full name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-company">Company Name</Label>
                <Input id="quote-company" name="company" placeholder="Your company (optional)" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-phone">Phone Number</Label>
                <Input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-email">Email</Label>
                <Input
                  id="quote-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-project-type">Project Type</Label>
                <Select value={selectedProjectType} onValueChange={setSelectedProjectType}>
                  <SelectTrigger id="quote-project-type" className="w-full">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-budget">Budget Range</Label>
                <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                  <SelectTrigger id="quote-budget" className="w-full">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-message">Project Details</Label>
                <Textarea
                  id="quote-message"
                  name="message"
                  required
                  placeholder="Tell us briefly about what you want to build"
                  rows={3}
                />
              </div>

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="size-4 shrink-0" />
                  Something went wrong. Please try again, or email us at{" "}
                  {siteConfig.contact.email}.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 gap-2 bg-gradient-software text-brand-software-foreground hover:opacity-90"
              >
                {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
                {status === "submitting" ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
