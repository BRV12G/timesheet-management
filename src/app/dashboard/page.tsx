import { timesheets } from "@/lib/data";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="p-10">
      <h2 className="text-2xl font-semibold mb-6">Your Timesheets</h2>
      <table className="w-full table-auto border rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Week #</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((ts) => (
            <tr key={ts.id} className="border-t">
              <td className="p-2">{ts.week}</td>
              <td className="p-2">{ts.date}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    ts.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : ts.status === "INCOMPLETE"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {ts.status}
                </span>
              </td>
              <td className="p-2">
                <Link
                  href={`/timesheet/${ts.week}`}
                  className="text-blue-600 underline"
                >
                  {ts.status === "MISSING"
                    ? "Create"
                    : ts.status === "INCOMPLETE"
                    ? "Update"
                    : "View"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
