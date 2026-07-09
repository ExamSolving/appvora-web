"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AlertCircle, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/layout/logo";
import { auth } from "@/lib/firebase/client";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    if (!auth) {
      setError("Firebase isn't configured yet. Add your credentials to .env.local.");
      setSubmitting(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch {
      setError("Invalid email or password.");
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <Card className="w-full max-w-sm p-2">
        <CardHeader className="items-center gap-3 text-center">
          <Logo />
          <div className="flex flex-col items-center gap-1">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lock className="size-4" />
              Admin Login
            </CardTitle>
            <CardDescription>
              Sign in to view enrollments and quote requests.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="admin-email">Email</Label>
              <Input
                id="admin-email"
                name="email"
                type="email"
                required
                autoComplete="username"
                placeholder="you@appvora.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="size-4 shrink-0" />
                {error}
              </p>
            )}

            <Button type="submit" disabled={submitting} className="mt-2 gap-2">
              {submitting && <Loader2 className="size-4 animate-spin" />}
              {submitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
