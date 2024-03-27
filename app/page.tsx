"use client";

import Dashboard from "@/components/Dashboard";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import LandingPage from "@/components/landing-page";
import { useAppDispatch, useAppSelector } from "@/store";
import { setAuthState } from "@/store/authSlice";

export default function Home() {
  const authState = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  return authState ? (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  ) : (
    <div>
      <LandingPage />
    </div>
  );
}
