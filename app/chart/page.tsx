import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chart",
};

const BasicChartPage: React.FC = () => {
  return <Chart />;
};

export default BasicChartPage;
