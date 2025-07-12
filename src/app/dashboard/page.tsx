"use client";
import { useEffect, useState } from "react";
import TimesheetTable from "@/components/TimesheetTable";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTimesheets = async () => {
      const res = await fetch("/api/timesheets");
      const json = await res.json();
      setData(json);
    };
    fetchTimesheets();
  }, []);

  return (
    <div className=" bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-10 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-48 pb-20">
        <TimesheetTable timesheets={data} />
        <Footer />
      </main>
    </div>
  );
}
