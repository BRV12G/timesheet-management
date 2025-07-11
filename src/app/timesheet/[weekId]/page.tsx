import { timesheetEntries } from "@/lib/data";
import { notFound } from "next/navigation";

type Params = { params: { weekId: string } };

export default function TimesheetWeekPage({ params }: Params) {
  const entries = timesheetEntries[params.weekId];
  if (!entries) return notFound();

  const days = ["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"];

  return (
    <main className="p-10">
      <h2 className="text-xl font-bold mb-2">This week&#39;s timesheet</h2>
      <p className="text-sm text-gray-600 mb-4">21 - 28 January, 2024</p>

      {days.map((day) => (
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
      ))}
    </main>
  );
}
