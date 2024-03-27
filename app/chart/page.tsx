import Chart from "@/components/Charts/page";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chart",
};

const BasicChartPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Chart />
    </DashboardLayout>
  );
};

export default BasicChartPage;
