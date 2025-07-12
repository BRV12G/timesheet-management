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
    <div className=" bg-gray-50 ">
      <Header />
      <main className="pt-10 px-48 pb-60">
        <TimesheetTable timesheets={data} />
        <Footer />
      </main>
    </div>
  );
}
