import Calendar from "@/components/Calender";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calender",
};

const CalendarPage = () => {
  return (
    <DashboardLayout>
      <Calendar />
    </DashboardLayout>
  );
};

export default CalendarPage;
