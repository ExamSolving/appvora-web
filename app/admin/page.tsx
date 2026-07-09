"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { AlertCircle, Loader2, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth, db } from "@/lib/firebase/client";

export const dynamic = "force-dynamic";

type Enrollment = {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  createdAt: Timestamp | null;
};

type QuoteRequest = {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
  createdAt: Timestamp | null;
};

function formatDate(ts: Timestamp | null) {
  if (!ts) return "—";
  return ts.toDate().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);

  const [loadingData, setLoadingData] = React.useState(true);
  const [dataError, setDataError] = React.useState<string | null>(null);
  const [enrollments, setEnrollments] = React.useState<Enrollment[]>([]);
  const [quoteRequests, setQuoteRequests] = React.useState<QuoteRequest[]>([]);

  React.useEffect(() => {
    if (!auth) {
      setAuthChecked(true);
      return;
    }
    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthChecked(true);
      if (!nextUser) {
        router.replace("/admin/login");
      }
    });
  }, [router]);

  React.useEffect(() => {
    if (!user || !db) return;
    const firestore = db;

    async function loadData() {
      setLoadingData(true);
      setDataError(null);
      try {
        const [enrollmentsSnap, quoteRequestsSnap] = await Promise.all([
          getDocs(query(collection(firestore, "enrollments"), orderBy("createdAt", "desc"))),
          getDocs(query(collection(firestore, "quoteRequests"), orderBy("createdAt", "desc"))),
        ]);
        setEnrollments(
          enrollmentsSnap.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Enrollment, "id">),
          }))
        );
        setQuoteRequests(
          quoteRequestsSnap.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<QuoteRequest, "id">),
          }))
        );
      } catch {
        setDataError("Couldn't load submissions. Check your Firestore rules and connection.");
      } finally {
        setLoadingData(false);
      }
    }

    loadData();
  }, [user]);

  async function handleSignOut() {
    if (!auth) return;
    await signOut(auth);
    router.push("/admin/login");
  }

  if (!auth || !db) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <p className="max-w-sm text-center text-sm text-muted-foreground">
          Firebase isn&apos;t configured yet. Add your credentials to{" "}
          <code className="rounded bg-muted px-1 py-0.5">.env.local</code> to
          enable the admin dashboard.
        </p>
      </div>
    );
  }

  if (!authChecked || !user) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-10">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleSignOut}>
              <LogOut className="size-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {dataError && (
          <p className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="size-4 shrink-0" />
            {dataError}
          </p>
        )}

        {loadingData ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Tabs defaultValue="enrollments">
            <TabsList>
              <TabsTrigger value="enrollments" className="gap-2">
                Enrollments
                <Badge variant="secondary">{enrollments.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="quotes" className="gap-2">
                Quote Requests
                <Badge variant="secondary">{quoteRequests.length}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enrollments" className="mt-6">
              {enrollments.length === 0 ? (
                <p className="text-sm text-muted-foreground">No enrollments yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enrollments.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="font-medium">{row.name}</TableCell>
                        <TableCell>{row.course}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{formatDate(row.createdAt)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>

            <TabsContent value="quotes" className="mt-6">
              {quoteRequests.length === 0 ? (
                <p className="text-sm text-muted-foreground">No quote requests yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Project Type</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quoteRequests.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="font-medium">{row.name}</TableCell>
                        <TableCell>{row.company || "—"}</TableCell>
                        <TableCell>{row.projectType}</TableCell>
                        <TableCell>{row.budgetRange}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{row.phone}</span>
                            <span className="text-muted-foreground">{row.email}</span>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(row.createdAt)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
          </Tabs>
        )}
      </Container>
    </div>
  );
}
