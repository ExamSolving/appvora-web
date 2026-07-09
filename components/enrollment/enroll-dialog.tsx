"use client";

import * as React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { AlertCircle, CheckCircle2, GraduationCap, Loader2 } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase/client";
import { courses } from "@/lib/data/courses";
import { foundationalCourses } from "@/lib/data/foundational-courses";
import type { SubmitStatus } from "@/components/enrollment/types";
import { siteConfig } from "@/lib/seo/site-config";

const allCourseNames = [
  ...courses.map((course) => course.title),
  ...foundationalCourses.map((course) => course.title),
];

type EnrollDialogProps = {
  courseName?: string;
  triggerLabel?: string;
  triggerClassName?: string;
} & VariantProps<typeof buttonVariants>;

export function EnrollDialog({
  courseName,
  triggerLabel = "Enroll Now",
  triggerClassName,
  variant,
  size,
}: EnrollDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [selectedCourse, setSelectedCourse] = React.useState(courseName ?? "");
  const [firstName, setFirstName] = React.useState("");

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      window.setTimeout(() => {
        setStatus("idle");
        setFirstName("");
        setSelectedCourse(courseName ?? "");
      }, 200);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();

    setFirstName(name.split(" ")[0] ?? "");
    setStatus("submitting");

    if (!db) {
      setStatus("error");
      return;
    }

    try {
      await addDoc(collection(db, "enrollments"), {
        name,
        phone,
        email,
        course: selectedCourse,
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
          <GraduationCap className="size-4" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-10 text-brand-training" />
            <DialogTitle>Thanks, {firstName || "there"}!</DialogTitle>
            <DialogDescription>
              Our admissions team will contact you within 24 hours to confirm
              your enrollment details.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Enroll in a Training Program</DialogTitle>
              <DialogDescription>
                Share your details and we&apos;ll get back to you to confirm
                your seat.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enroll-name">Full Name</Label>
                <Input id="enroll-name" name="name" required placeholder="Your full name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enroll-phone">Phone Number</Label>
                <Input
                  id="enroll-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enroll-email">Email</Label>
                <Input
                  id="enroll-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="enroll-course">Course</Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger id="enroll-course" className="w-full">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {allCourseNames.map((title) => (
                      <SelectItem key={title} value={title}>
                        {title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                className="mt-2 gap-2 bg-gradient-training text-brand-training-foreground hover:opacity-90"
              >
                {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
                {status === "submitting" ? "Submitting..." : "Submit Enrollment"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
