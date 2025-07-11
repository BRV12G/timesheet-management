// components/TimesheetTable.tsx
import Link from "next/link";

type Timesheet = {
  id: string;
  week: number;
  date: string;
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
};

interface Props {
  timesheets: Timesheet[];
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-100 text-green-700";
    case "INCOMPLETE":
      return "bg-yellow-100 text-yellow-700";
    case "MISSING":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getActionText = (status: string) => {
  switch (status) {
    case "MISSING":
      return "Create";
    case "INCOMPLETE":
      return "Update";
    default:
      return "View";
  }
};

export default function TimesheetTable({ timesheets }: Props) {
  return (
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
              <span className={`px-2 py-1 text-sm rounded-full ${getStatusStyle(ts.status)}`}>
                {ts.status}
              </span>
            </td>
            <td className="p-2">
              <Link
                href={`/timesheet/${ts.week}`}
                className="text-blue-600 underline"
              >
                {getActionText(ts.status)}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
