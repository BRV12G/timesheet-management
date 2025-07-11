"use client";
import { timesheetEntries } from "@/lib/data";
import { notFound } from "next/navigation";
import TimesheetEntry from "@/components/TimesheetEntry";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Params = { params: { weekId: string } };

export default function TimesheetWeekPage({ params }: Params) {
//   const entries = timesheetEntries[params.weekId];
//   if (!entries) return notFound();
  const { weekId } = useParams();
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
    const [range, setRange] = useState<string>("");
      const [days, setDays] = useState<string[]>([]);



//   const days = ["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"];

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch(`/api/timesheets/${weekId}`);
      if (res.ok) {
        const json = await res.json();
        // setEntries(json);
        setEntries(json.entries || []);
        setRange(json.range || "");
        setDays(json.days || []);
        
      }
      setLoading(false);
    };
    fetchEntries();
  }, [weekId]);

   if (loading) return <p className="p-10">Loading...</p>;
  if (!entries.length) return <p className="p-10">No entries found.</p>;
  return (
    <main className="p-10">
      <h2 className="text-xl font-bold mb-2">This week&#39;s timesheet</h2>
      <p className="text-sm text-gray-600 mb-4">{range}</p>

      {/* {days.map((day) => (
        <div key={day} className="mb-6">
          <h3 className="font-semibold mb-2">{day}</h3>
          {(entries || [])
            .filter((e) => e.date === day)
            .map((e) => (
              <div
                key={e.id}
                className="p-4 border rounded flex justify-between items-center mb-2"
              >
                <div>
                  <p>{e.task}</p>
                  <p className="text-sm text-gray-500">{e.hours} hrs</p>
                </div>
                <div className="text-sm text-blue-600">{e.project}</div>
              </div>
            ))}
          <button className="text-sm text-blue-600 underline">
            + Add new task
          </button>
        </div>
      ))} */}
      {days.map((day) => (
  <div key={day} className="mb-6">
    <h3 className="font-semibold mb-2">{day}</h3>
    {(entries || [])
      .filter((e) => e.date === day)
      .map((e) => (
        <TimesheetEntry
          key={e.id}
          task={e.task}
          hours={e.hours}
          project={e.project}
        />
      ))}
    <button className="text-sm text-blue-600 underline">
      + Add new task
    </button>
  </div>
))}
    </main>
  );
}
