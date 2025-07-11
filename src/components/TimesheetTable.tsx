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
      return "bg-green-100 text-green-800";
    case "INCOMPLETE":
      return "bg-yellow-100 text-yellow-800";
    case "MISSING":
      return "bg-pink-100 text-pink-800";
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
    
    <div className="bg-white  p-6 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold mb-4">Your Timesheets</h3>
    <table className="w-full table-auto border border-gray-200 ">
      <thead>
        <tr className="bg-gray-50 text-left p-4 text-gray-500">
          <th className="p-4 w-[107px]">Week #</th>
          <th className="p-4 w-[502px]">Date</th>
          <th className="p-4 w-[502px]">Status</th>
          <th className="p-4 w-[121px] ">Actions</th>
        </tr>
      </thead>
      <tbody>
        {timesheets.map((ts) => (
          <tr key={ts.id} className="border-t border-gray-300 hover:bg-gray-50">
            <td className="p-4  border-gray-300 bg-gray-50 text-gray-900">{ts.week}</td>
            <td className="p-4 text-gray-500">{ts.date}</td>
            <td className="p-4">
              <span className={`px-2.5 py-1 text-sm rounded-md ${getStatusStyle(ts.status)}`}>
                {ts.status}
              </span>
            </td>
            <td className="p-4">
              <Link
                href={`/timesheet/${ts.week}`}
                className="text-blue-600 hover:underline"
              >
                {getActionText(ts.status)}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
