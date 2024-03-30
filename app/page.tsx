"use client";

import Dashboard from "@/components/Dashboard";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import LandingPage from "@/components/landing-page";
import { useAppSelector } from "@/lib/store";

export default function Home() {
  const authState = useAppSelector((state) => state.auth.user);
  return authState ? (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  ) : (
    <LandingPage />
  );
}
